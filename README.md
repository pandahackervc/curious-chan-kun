# Curious Chan Kun

This is the **Curious Chan Kun** blog, built with [Astro](https://astro.build/) and based on the **Void Theme for Astro**.

## Features

- Minimal, content-first blog layout
- Dark mode support
- Tailwind CSS styling
- Responsive pages

## Getting Started

```bash
git clone https://github.com/eAntillon/void-astro.git
cd void-astro
npm i
npm run dev
```

## Deploy to Netlify + Private Admin Writing

This repo is pre-configured for Netlify:

- `netlify.toml` for build + publish settings
- `/admin` Decap CMS at `public/admin/index.html`
- CMS config at `public/admin/config.yml`

### 1. Deploy

1. Push this repository to GitHub.
2. In Netlify, create a new site from that GitHub repo.
3. Build settings (already in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`

### 2. Enable CMS login

In Netlify site dashboard:

1. Go to `Site configuration` > `Identity` and enable Identity.
2. Under `Registration preferences`, set **Invite only**.
3. Under `Services`, enable **Git Gateway**.
4. Invite only your own email address from the Identity users page.

After deployment, open `/admin` on your site and log in with your invited account.

### 3. Final required change

Update these placeholders in `public/admin/config.yml`:

- `site_url`
- `display_url`

Set both to your real Netlify site URL (or your custom domain).
