from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)  # Allow React frontend to access backend

# Load the thanks.json file
with open(os.path.join(os.path.dirname(__file__), "thanks.json"), "r") as file:
    thanks_data = json.load(file)
    image_urls = [item["urls"] for item in thanks_data if "urls" in item]
    image_urls = [url for sublist in image_urls for url in sublist]  # Flatten the list
    print(f"Received request for image URLs: {image_urls}")


@app.route("/evaluate-vibe", methods=["POST"])
def evaluate_vibe():
    data = request.get_json()
    # Fake judgment logic
    return jsonify(
        {"approved": False, "reason": "Your mouse movement screams existential dread."}
    )


@app.route("/get-image-urls", methods=["GET"])
def send_image_urls():
    # Fake image URLs
    image_urls = [item["urls"] for item in thanks_data if "urls" in item]
    image_urls = [url for sublist in image_urls for url in sublist]  # Flatten the list
    if not image_urls:
        return jsonify({"error": "No image URLs found."}), 404
    return jsonify({"image_urls": image_urls})


if __name__ == "__main__":
    app.run(debug=True)
