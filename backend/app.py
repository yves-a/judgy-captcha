from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React frontend to access backend


@app.route("/evaluate-vibe", methods=["POST"])
def evaluate_vibe():
    data = request.get_json()
    # Fake judgment logic
    return jsonify(
        {"approved": False, "reason": "Your mouse movement screams existential dread."}
    )


if __name__ == "__main__":
    app.run(debug=True)
