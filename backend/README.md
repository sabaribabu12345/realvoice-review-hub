# RealVoice Review Hub Backend

This backend is built with Node.js, Express, TypeScript, and MongoDB (via Mongoose).

## Features
- REST API structure
- JWT-based user authentication (register, login)
- Review upload with video/audio, tags, and title
- Whisper (or mock) transcription integration
- Search endpoint (tags/keywords)
- Stripe integration for tipping reviewers

## Folders
- `/controllers` — Route logic
- `/routes` — Express route definitions
- `/models` — Mongoose schemas
- `/utils` — Utility functions
- `/middleware` — Auth, error handling, etc.

## Setup
1. `cd backend`
2. `npm install`
3. Create a `.env` file (see `.env.example`)
4. `npm run dev`

---

This backend is designed to work with the RealVoice Review Hub frontend. 