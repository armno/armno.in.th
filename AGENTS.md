# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` — route files (`.astro`, `.md`, `.mdx`, Markdoc). Use kebab-case for filenames and URL slugs (e.g., `src/pages/blog/my-post.astro`).
- `src/components/` — reusable UI (Astro/React). Use PascalCase for component files (e.g., `PostCard.tsx`).
- `src/layouts/` — page layouts shared across routes.
- `src/content/` — content collections (e.g., `src/content/blog`). Frontmatter defines metadata.
- `src/styles/` — global styles and Tailwind entry.
- `public/` — static assets (images, favicon, `pagefind/`).
- Config: `astro.config.ts`, `tailwind.config.ts`, `markdoc.config.mjs`, `keystatic.config.tsx`, `tsconfig.json`.

## Build, Test, and Development Commands
- `npm run dev` — start Astro dev server (host set in script).
- `npm start` — alias to dev.
- `npm run build` — build site, generate Pagefind index, copy `dist/pagefind` to `public/pagefind`.
- `npm run preview` — serve the production build locally.
- Optional: `npx astro check` — type/syntax checks for Astro/TS.

## Coding Style & Naming Conventions
- Indentation: 2 spaces, LF endings, UTF‑8 (`.editorconfig`).
- Components: PascalCase (e.g., `SiteHeader.astro`, `TagList.tsx`).
- Routes/content: kebab-case filenames and slugs.
- Styling: prefer Tailwind utilities; keep globals in `src/styles`. Avoid inline styles.
- TypeScript for code; keep strict, explicit types where practical.

## Testing Guidelines
- No unit test suite at present. Validate changes by:
  - `npm run build` then `npm run preview` and test routes.
  - `npx astro check` for type and template issues.
  - For visual changes, include screenshots or before/after notes.

## Commit & Pull Request Guidelines
- Commits in history are short and imperative (e.g., "update astro"). Keep messages concise and descriptive. Conventional Commits are welcome but not required.
- PRs should include:
  - Clear summary, scope, and rationale; link related issues.
  - Screenshots/GIFs for UI changes.
  - Notes on content structure or config changes (e.g., `astro.config.ts`, `tailwind.config.ts`).
  - Build verified locally (`build` + `preview`). If `public/pagefind` changes after build, commit those assets.

## Security & Configuration Tips
- Use `.env` for secrets; never commit secrets. Follow Node version in `.nvmrc`.
- Netlify deploys from this repo; ensure production build works without local assumptions.
