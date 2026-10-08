# AI Text Transformer

React + Tailwind frontend connected to a Node.js + Express backend using Grok/xAI.

## Run the full app locally

### 1. Backend

```bash
cd backend
npm install
```

Copy `backend/.env.example` to `backend/.env` and add your xAI API key.

```bash
npm run dev
```

Backend: `http://localhost:5000`

### 2. Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:5173`

The Vite development proxy sends `/api` requests to the backend, while Express also has CORS configured for the frontend.

## Important

Never put your Grok/xAI API key in the React frontend or in a `VITE_` environment variable. Keep it in `backend/.env`.
