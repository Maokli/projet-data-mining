from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import json
import re
import numpy as np
import joblib
from sklearn.preprocessing import StandardScaler
from gensim.models import Word2Vec

app = Flask(__name__)

CORS(app)
# Set your OpenAI API key
client = openai.OpenAI(
    api_key="key goes here",
)


# Model paths
MODEL_PATHS = {
    "rating-gbr": "models/rating-gbr.pkl",
    "revenue-rf": "models/revenue-rf.pkl"
}

# Load Word2Vec model and scaler
word2vec_model = Word2Vec.load("models/word2vec_model.model")
scaler = StandardScaler()

# Genre columns
GENRE_COLUMNS = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary',
                 'Drama', 'Family', 'Fantasy', 'Fiction', 'Foreign', 'History', 'Horror', 'Movie',
                 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Science', 'Sport', 'TV',
                 'Thriller', 'War', 'Western']

def load_model(model_name):
    """Load the specified model from disk."""
    if model_name in MODEL_PATHS:
        return joblib.load(MODEL_PATHS[model_name], mmap_mode='r')
    else:
        return None
    
def transform_user_input(user_keywords, user_genres, user_budget, model, scaler,genre_columns, embedding_dim=30):
    """
    Transforms user input into a feature vector compatible with the trained model.

    Parameters:
        user_keywords (list of str): List of keywords provided by the user.
        user_genre (str): Genre of the movie provided by the user.
        user_budget (float): Budget of the movie provided by the user.
        model (gensim.models.Word2Vec): Pretrained Word2Vec model.
        scaler (sklearn.preprocessing.StandardScaler): Scaler fitted to the budget column.
        genre_columns (list of str): List of all possible genre columns in the dataset.
        embedding_dim (int): Dimension of the Word2Vec embeddings.

    Returns:
        np.array: A 1D array containing the transformed features for prediction.
    """
    # 1. Convert keywords to embedding
    def keywords_to_embedding(keywords, model, embedding_dim):
        vectors = [model.wv[word] for word in keywords if word in model.wv]
        if vectors:
            return np.mean(vectors, axis=0)
        else:
            return np.zeros(embedding_dim)

    user_keywords_embedding = keywords_to_embedding(user_keywords, model, embedding_dim)

    # 2. Normalize the budget
    user_budget_normalized = scaler.fit_transform([[user_budget]])[0][0]

    # 3. Encode the genre
    genre_vector = np.zeros(len(genre_columns))
    for genre in user_genres:
        if genre in genre_columns:
            genre_index = genre_columns.index(genre)
            genre_vector[genre_index] = 1

    # 4. Combine all features
    user_input = np.concatenate([user_keywords_embedding, genre_vector, [user_budget_normalized]])

    return user_input.reshape(1, -1)

def extract_movie_criteria(description):
    # Define the prompt for OpenAI
    prompt = f"""
    Extract the following information from the movie description below:
    - Budget: A string describing the budget.
    - Keywords: A list of keywords related to the movie.
    - Genres: A list of genres the movie belongs to.

    Movie Description: {description}

    Return the output in the following JSON format:
    {{
        "budget": number,
        "keywords": string[],
        "genres": string[]
    }}
    
    The budget field should be a number and not a string.
    """

    # Call OpenAI API
    response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="gpt-4o",
    )

    # Extract the generated text
    generated_text = response.choices[0].message.content.strip()
    print(generated_text)

    # Regex pattern to extract JSON string
    json_pattern = re.search(r'\{.*\}', generated_text, re.DOTALL)
    
    # Parse the extracted JSON or return defaults
    try:
        criteria = json.loads(json_pattern.group(0)) if json_pattern else {"budget": "Unknown", "keywords": [], "genres": []}
    except json.JSONDecodeError:
        criteria = {"budget": "Unknown", "keywords": [], "genres": []}
    
    return criteria

@app.route('/getMovieCriteria', methods=['POST'])
def get_movie_criteria():
    data = request.json
    test = data.get('test', False)
    movie_description = data.get('description', '')
    if (test):
        return jsonify({
    "budget": 125000000,
    "keywords": ["magic", "adventure", "friendship"],
    "genres": ["Fantasy", "Adventure"]
})
    if not movie_description:
        return jsonify({"error": "No description provided"}), 400
    criteria = extract_movie_criteria(movie_description)
    return jsonify(criteria)

@app.route('/predict', methods=['POST'])
def predict():
    """Endpoint to make predictions using the selected model."""
    data = request.json
    user_keywords = data.get("keywords", [])
    user_genres = data.get("genres", [])
    user_budget = data.get("budget", 0)
    print(user_keywords)
    print(user_genres)
    print(user_budget)
    if not user_keywords or not user_genres:
        return jsonify({"error": "Model name, keywords, and genres are required"}), 400
    
    rating_model = joblib.load(MODEL_PATHS["rating-gbr"], mmap_mode='r')
    revenue_model = joblib.load(MODEL_PATHS["revenue-rf"], mmap_mode='r')
    
    try:
        features_array = transform_user_input(user_keywords, user_genres, user_budget, word2vec_model, scaler, GENRE_COLUMNS)
        rating_prediction = rating_model.predict(features_array)
        revenue_prediction = revenue_model.predict(features_array)
        revenue_prediction_unnormalized = np.expm1(revenue_prediction.tolist()[0])
        return jsonify({"rating": rating_prediction.tolist()[0], "revenue": revenue_prediction_unnormalized})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)