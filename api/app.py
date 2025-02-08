from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
import numpy as np
import joblib
from sklearn.preprocessing import StandardScaler
from gensim.models import Word2Vec

app = Flask(__name__)

CORS(app)
# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")


# Model paths
MODEL_PATHS = {
    "rating-gbr": "models/rating-gbr.pkl",
    "revenue-rf": "models/revenue_rf.pkl"
}

# Load Word2Vec model and scaler
word2vec_model = Word2Vec.load("word2vec_model.model")  # Replace with your actual path
scaler = StandardScaler()

# Genre columns
GENRE_COLUMNS = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary',
                 'Drama', 'Family', 'Fantasy', 'Fiction', 'Foreign', 'History', 'Horror', 'Movie',
                 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Science', 'Sport', 'TV',
                 'Thriller', 'War', 'Western']

def transform_user_input(user_keywords, user_genres, user_budget, model, scaler, genre_columns):
    """Transform user input into numerical features."""
    keyword_vectors = [model.wv[word] for word in user_keywords if word in model.wv]
    keyword_vector_avg = np.mean(keyword_vectors, axis=0) if keyword_vectors else np.zeros(model.vector_size)
    genre_vector = np.array([1 if genre in user_genres else 0 for genre in genre_columns])
    feature_vector = np.concatenate((keyword_vector_avg, [user_budget], genre_vector))
    return scaler.fit_transform(feature_vector.reshape(1, -1))

def load_model(model_name):
    """Load the specified model from disk."""
    if model_name in MODEL_PATHS:
        return joblib.load(MODEL_PATHS[model_name], mmap_mode='r')
    else:
        return None
    
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
        "budget": "budget information",
        "keywords": ["keyword1", "keyword2", "keyword3"],
        "genres": ["genre1", "genre2", "genre3"]
    }}
    """

    # Call OpenAI API
    response = openai.Completion.create(
        engine="text-davinci-003",  # Use the appropriate engine
        prompt=prompt,
        max_tokens=150,
        temperature=0.5,
        stop=None
    )

    # Extract the generated text
    generated_text = response.choices[0].text.strip()

    # Parse the generated text into a dictionary
    try:
        import json
        criteria = json.loads(generated_text)
    except json.JSONDecodeError:
        criteria = {
            "budget": "Unknown",
            "keywords": [],
            "genres": []
        }

    return criteria

@app.route('/getMovieCriteria', methods=['POST'])
def get_movie_criteria():
    data = request.json
    test = data.get('test', False)
    print (test)
    movie_description = data.get('description', '')
    if (test):
        return jsonify({
    "budget": "$125 million",
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
    model_name = data.get("model")
    user_keywords = data.get("keywords", [])
    user_genres = data.get("genres", [])
    user_budget = data.get("budget", 0)

    if not model_name or not user_keywords or not user_genres:
        return jsonify({"error": "Model name, keywords, and genres are required"}), 400
    
    model = load_model(model_name)
    if model is None:
        return jsonify({"error": "Invalid model name"}), 400
    
    try:
        features_array = transform_user_input(user_keywords, user_genres, user_budget, word2vec_model, scaler, GENRE_COLUMNS)
        prediction = model.predict(features_array)
        return jsonify({"prediction": prediction.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)