from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os

app = Flask(__name__)

CORS(app)
# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

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

if __name__ == '__main__':
    app.run(debug=True)