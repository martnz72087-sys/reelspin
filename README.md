# 🎰 ReelSpin — Spin to Watch

**Can't decide what to watch? Spin the wheel.**

Browse 800,000+ movies and TV shows, add up to 3 to the wheel, and let fate decide. Real posters, YouTube trailers, critic ratings, and streaming links.

## How It Works

1. **Browse** — Trending, Top Rated, Popular, TV tabs. Filter by genre or mood.
2. **Search** — Find any movie, show, or actor.
3. **Add to Wheel** — Click the `+` button on any poster (or click into details and add from there). You can also hit **🎲 Random Fill** to auto-populate from the current catalog.
4. **Spin** — Hit the **🎰 SPIN** button. The wheel picks a winner.
5. **After the spin** — Three options:
   - **▶ Watch Trailer** — Opens YouTube trailer
   - **🎰 Re-Spin** — Don't like the pick? Spin again.
   - **⏳ Take a Minute** — 60-second countdown timer to think it over.

Streaming links take you directly to each platform's login page.

## Deploy to Netlify

### 1. Push to GitHub

```bash
cd reelspin
git init
git add .
git commit -m "Initial commit - ReelSpin"
git remote add origin https://github.com/YOUR_USERNAME/reelspin.git
git branch -M main
git push -u origin main
```

### 2. Connect Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from GitHub**
2. Select your `reelspin` repo
3. Publish directory: `.` (should auto-detect)
4. Click **Deploy site**

### 3. Add API Key

1. Netlify dashboard → **Site configuration** → **Environment variables**
2. Add: `TMDB_API_KEY` = your TMDB v3 key
3. **Deploys** → **Trigger deploy** → **Deploy site**

Get a free key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

## Project Structure

```
reelspin/
├── index.html              ← Entire frontend
├── netlify.toml            ← Netlify config
├── netlify/functions/
│   └── tmdb.js             ← Serverless TMDB proxy (hides API key)
└── README.md
```

## Features

- 🎰 Spin wheel for 2-3 movie picks
- 🎲 Random fill from current browse results
- ▶️ YouTube trailer embeds
- 📺 Streaming links (Netflix, Hulu, Max, Disney+, etc.)
- ⭐ Ratings + genre tags
- 🔥 Trending / Top Rated / Popular / TV tabs
- 🎭 14 genre filters + 8 mood filters
- 🔍 Full catalog search
- ⏳ "Take a Minute" countdown timer
- 🎉 Confetti celebration on spin result
- 🔒 API key hidden via serverless function

## License

MIT
