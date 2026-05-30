# Pappace Place Learning Studio

A static one-page tutoring business website with a non-technical admin portal.

---

## Stack

| Layer | Tool |
|---|---|
| Template language | HTML + Nunjucks |
| Static site generator | Eleventy |
| CMS (admin portal) | Sveltia CMS |
| Hosting | Cloudflare Pages |
| CMS authentication | Cloudflare Workers (OAuth proxy) |
| Version control | GitHub |

---

## How It Works

Content lives in `src/_data/home.json`. The site owner edits content through the CMS at `/admin/`, which commits changes directly to `home.json` in this repo. Cloudflare Pages detects the commit and automatically rebuilds and redeploys the site — no code knowledge required.

---

## Running Locally

### Prerequisites

Make sure the following are installed on your machine:

- [Node.js](https://nodejs.org) (v18 or higher recommended)
- [Git](https://git-scm.com)

### Steps

**1. Clone the repo**
```bash
git clone https://github.com/marias-learning/pappaceplace3.git
cd pappaceplace3
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the local dev server**
```bash
npm run start
```

The site will be available at `http://localhost:8080`. Changes to any file in `src/` will automatically reload the browser.

**4. Build for production (optional)**
```bash
npm run build
```

This outputs the built site to `_site/`. Cloudflare Pages runs this command automatically on every push to `main` — you don't need to run it manually unless you want to inspect the build output locally.

---

## Project Structure

```
/
├── src/
│   ├── _data/
│   │   └── home.json       # All site content — managed via CMS
│   ├── admin/
│   │   ├── index.html      # Loads the Sveltia CMS interface
│   │   └── config.yml      # Defines what fields are editable in the CMS
│   ├── images/
│   │   └── uploads/        # CMS-uploaded images land here
│   ├── index.njk           # Main page template
│   └── style.css           # All styles
├── .eleventy.js            # Eleventy configuration
├── .gitignore
├── package.json
└── package-lock.json
```

---

## Making Changes

### Content changes (text, images)
Use the CMS at `/admin/` — no code editing needed.

### Layout or style changes
- Edit `src/index.njk` for HTML structure
- Edit `src/style.css` for styles
- Run `npm run start` locally to preview before pushing

### Adding a new CMS field
1. Add the field to `src/admin/config.yml`
2. Add the matching key to `src/_data/home.json`
3. Reference it in `src/index.njk` with `{{ home.your_key }}`

### Deploying
Push to `main`. Cloudflare Pages handles the rest automatically.

---

## CMS Access

The admin portal is at `/admin/` on the live site. Login requires a GitHub account that has been granted access to this repository.