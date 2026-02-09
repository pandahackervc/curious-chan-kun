
# Void-Astro

> 🧑‍🚀 Void-Astro is a minimalistic blog starter template designed for developers and writers who appreciate simplicity and elegance. Built with [Astro](https://astro.build/), this template leverages the power of [TailwindCSS](https://tailwindcss.com/) for styling and comes with a built-in dark mode, making it aesthetically pleasing and easy on the eyes.

## Features

- **Minimalistic Design.**
- **Dark Mode**
- **Build with TailwindCSS**: 
- **Responsive**


## Getting Started

1. Clone the repository:
```bash
# Clone the repository
git clone https://github.com/eAntillon/void-astro.git
cd void-astro
#  Install dependencies
npm i
#  Start the development server
npm run dev
```
![frame](https://github.com/user-attachments/assets/0ab4b7b7-6b20-4ae2-8266-aa029a503cf1)

## Deploy to Netlify + Private Admin Writing

This repo is now pre-configured for Netlify:

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
