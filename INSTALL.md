# Resume download, favicon, and share image

3 new files. Nothing of yours gets replaced.

## Step 1. Copy the files into your project

Keep the same folders:

- `public/resume.pdf`   -> into your `public` folder (next to `projects` and `me.jpeg`)
- `app/icon.svg`        -> into your `app` folder (next to `layout.tsx`)
- `app/opengraph-image.tsx` -> into your `app` folder

If your `app` folder already has a `favicon.ico`, delete it so the new icon is used.

## Step 2. Add the "Download resume" button

Open `app/about/page.tsx`. Find this paragraph near the top:

```tsx
<p className="lead">
  Who I am, how I work, and my full resume below.
</p>
```

Paste this right AFTER its closing `</p>`:

```tsx
<div className="hero-actions">
  <a
    className="btn btn-ghost"
    href="/resume.pdf"
    download="Cyril-Mandin-Resume.pdf"
  >
    Download resume
  </a>
</div>
```

## Step 3. Make the share image use your real address

Open `app/layout.tsx`. Find `export const metadata: Metadata = {` and add this line
directly under it:

```tsx
metadataBase: new URL("https://cyrilmandin.vercel.app"),
```

## Step 4. Check, then publish

1. `npm run dev`, then open http://localhost:3000/about and click "Download resume".
2. Open http://localhost:3000/opengraph-image to see your link preview picture.
3. In VS Code: type a message in Source Control, Commit, Sync Changes.
4. When Vercel says Ready, check the browser tab icon on your site.

## Please read before you share the PDF

- I rebuilt the resume from the text on your live site. Read every line.
- Remove anything that is not true for you. The skills list includes JavaScript,
  SQL, and Git because your site lists them. Delete any you have not used.
- The PDF is a fixed file. If you change your resume in `lib/data.ts` later,
  the PDF does not change by itself. Ask me to make a new one.

## Link preview tip

Messenger and LinkedIn save old previews. After you publish, test with the
"Sharing Debugger" tools if the old picture still shows.
