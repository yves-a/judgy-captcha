````markdown
# CAPTCHA That Judges You 🧑‍⚖️

An absurd, satirical “vibe-check” CAPTCHA system that doesn’t just verify you’re human—it judges your digital aura, mouse jitters, and choice of surreal imagery. Perfect for poking fun at over-engineered AI systems and injecting some delightful frustration into user flows.

---

## 🚀 Features

- **Randomized Challenges**  
  – “Pick the most emotionally available frog.”  
  – “Rate these clouds by how judgmental they look.”  
  – “What vibe does this goat give?”  
- **Vibe Engine™**  
  – Fake logic: Random score (0–100) → comical approval/rejection.  
  – Optional real NLP sentiment analysis (via Hugging Face).  
  – Mouse‐movement chaos scoring (“Your cursor screams existential dread.”)  
- **REST API**  
  – `POST /evaluate-vibe` returns `{ approved: bool, reason: string }`  
  – `POST /mouse-data` for extra “stress level” analysis  
- **Frontend**  
  – React + Tailwind CSS for sleek, meme-ready UI  
  – Loading animations & dramatic “Analyzing Vibe…” delays  
  – Judgment modal with retry button  
- **DevOps**  
  – Ready for Vercel/Netlify (frontend) + Render/Replit (backend)  
  – `proxy` setup in CRA for clean `/evaluate-vibe` calls  

---

## 📦 Tech Stack

- **Frontend**: React (Create React App) + Tailwind CSS  
- **Backend**: Python 3 + Flask + flask-cors  
- **Optional ML**: Hugging Face `transformers` (sentiment-analysis)  
- **Version Control**: Git (branch-per-feature workflow)  

---

## 🛠️ Getting Started

### Prerequisites

- Node >= 14 & npm  
- Python >= 3.8  
- Git

### 1. Clone & Branch

```bash
git clone https://github.com/yourname/judgycaptcha.git
cd judgycaptcha
````

Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

### 2. Backend Setup

```bash
cd backend
# Create & activate venv
python3 -m venv venv
source venv/bin/activate        # macOS/Linux
# venv\Scripts\activate         # Windows

# Install dependencies
pip install -r requirements.txt

# Start server
flask run                     # → http://localhost:5000
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install

# Ensure Tailwind is configured (see tailwind.config.js)
# Start dev server
npm start                     # → http://localhost:3000
```

By default CRA is proxying API calls to `http://localhost:5000` (see `package.json`).

---

## 📁 Project Structure

```
judgycaptcha/
├── backend/
│   ├── venv/                 ← Python virtual environment
│   ├── app.py                ← Flask app & routes
│   ├── vibe_engine.py        ← Fake & real “vibe” logic
│   └── requirements.txt
└── frontend/
    ├── public/               ← CRA static assets (index.html, icons)
    ├── src/
    │   ├── components/       ← React UI components (Challenges, Modal)
    │   ├── App.jsx           ← Entry point
    │   └── index.css         ← Tailwind directives
    ├── tailwind.config.js
    └── package.json
```

---

## 🛣️ Roadmap

* [ ] Add user “session mood log” JSON export
* [ ] Leaderboard of lowest “vibe scores” for max humiliation
* [ ] Dark Mode = Extra Judginess
* [ ] Dockerize frontend + backend for 1-click deploy

---

## 🤝 Contributing

1. Fork the repo
2. Create a topic branch (`feature/…` or `bugfix/…`)
3. Write tests & update README if needed
4. Open a Pull Request — PRs that add extra absurdity get priority!

---

## 📄 License

This project is released under the **MIT License**. See [LICENSE](./LICENSE) for details.

---

> “We don’t just check if you’re human. We check if you’re confident, composed, and can pick the right frog.” 🐸✨

```
```
