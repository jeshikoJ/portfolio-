# Jeshiko J — Portfolio

A dark, gold-accented developer portfolio inspired by the reference site, built with React + Vite + Tailwind CSS v4.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/` — deploy that folder to Vercel, Netlify, GitHub Pages, etc.

## Before you publish — fill these in

A few placeholders need your real links:

1. **GitHub profile** — `src/data.js` -> `profile.github` is currently `"#"`. Set it to your GitHub URL.
2. **E-Commerce project links** — `src/data.js` -> `project.links.demo` and `project.links.code` are placeholders. Add your live demo URL and GitHub repo link.
3. **Contact form (so messages reach your inbox)** — the form posts to Formspree, a free service that forwards submissions straight to your email. Set it up:
   - Go to [formspree.io](https://formspree.io) and sign up free with `chandranjeshiko@gmail.com`
   - Create a new form — Formspree gives you an endpoint like `https://formspree.io/f/abcd1234`
   - Open `src/data.js` and replace `formEndpoint: 'https://formspree.io/f/REPLACE_ME'` with your real endpoint
   - Rebuild (`npm run build`) and redeploy
   - **Important:** the *first* submission after setup triggers a one-time confirmation email from Formspree — open it and confirm, or later messages won't reach you
   - Until you do this, the form falls back to opening the visitor's own email app instead (not very reliable, since they have to actually hit send)

## Structure

```
src/
  data.js                 — all site content (name, experience, projects, tech stack, contact info)
  components/
    Navbar.jsx             — fixed nav with scroll-spy + resume download
    Hero.jsx                — intro section with watermark name + typed role
    About.jsx                — photo + bio + specializations
    Experience.jsx            — tabbed roles + tech stack grid + certifications
    Projects.jsx                — expanded case study for the E-Commerce project
    Contact.jsx                   — contact info + form
    BrandIcons.jsx                 — GitHub/LinkedIn icons (current lucide-react version dropped brand icons)
```

To add more projects later, turn the `project` object in `data.js` into an array and map over it in `Projects.jsx`.
