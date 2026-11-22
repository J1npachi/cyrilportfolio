# Portfolio

A simple, responsive portfolio built with Next.js (App Router) and TypeScript. Black, white, and gray, with a light and dark theme.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Make it yours

All the text lives in one file: `lib/data.ts`.

- `profile`: your name, role, intro, email, and social links
- `profile.statement`: the big sentence on the home page. Make it specific to you
- `profile.photo`: put your photo in `public/` (for example `public/me.jpg`) and set this to `"/me.jpg"`
- `now`: the "Right now" section on the home page
- `about`: the paragraphs and quick facts on the About page
- `projects`: your work. Each one gets its own case-study page. Add `image`, `liveUrl` or `sourceUrl` and they appear
- `resume`: experience, education, and skills shown by "Show resume"

Colors and spacing are CSS variables at the top of `app/globals.css`.

## Pages

| Route       | File                      |
| ----------- | ------------------------- |
| `/`         | `app/page.tsx`            |
| `/about`    | `app/about/page.tsx`      |
| `/projects` | `app/projects/page.tsx`   |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` |
| `/contact`  | `app/contact/page.tsx`    |

"Save as PDF" in the resume uses the browser's print dialog and prints only the resume.

## Deploy

Push the project to GitHub and import it on [Vercel](https://vercel.com). No settings are needed.
