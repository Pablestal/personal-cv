# cv-astro

Personal CV/portfolio built with [Astro](https://astro.build). Bilingual (Spanish/English) static site with PDF export support.

## Project Structure

```
src/
├── components/       # Astro components (Header, Experience, Skills, etc.)
├── config/
│   └── contact.ts    # Contact info (reads from environment variables)
├── i18n/
│   ├── sections/     # Translation files per section
│   └── translations.ts
├── layouts/
│   └── Layout.astro  # Global styles and HTML shell
└── pages/
    └── index.astro   # Entry point
public/
└── assets/           # Static images and logos
```

## Setup

**1. Install dependencies**

```sh
npm install
```

**2. Configure environment variables**

Copy `.env.example` to `.env` and fill in your contact details:

```sh
cp .env.example .env
```

```env
CONTACT_EMAIL_USER=yourname
CONTACT_EMAIL_DOMAIN=example.com
CONTACT_PHONE_PARTS=+1,555,000,0000
```

> Email and phone are split across variables to avoid being scraped as plain strings in the source code. They are assembled client-side at runtime.

**3. Start the dev server**

```sh
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Commands

| Command          | Action                              |
| :--------------- | :---------------------------------- |
| `npm run dev`    | Start dev server at localhost:4321  |
| `npm run build`  | Build production site to `./dist/`  |
| `npm run preview`| Preview the production build        |

## Deployment

Set the environment variables (`CONTACT_EMAIL_USER`, `CONTACT_EMAIL_DOMAIN`, `CONTACT_PHONE_PARTS`) in your hosting platform before building. The `.env` file is gitignored and should never be committed.
