# Plan: Unify post tagging into a single `tags` system

## Goal
One tagging system (`tags`) for all 225 blog posts. Legacy `categories` values are merged into `tags` and the field is retired. All frontmatter list styles are normalized. Verify with build + preview.

## Current state (audited)
- 225 content files: 216 `.mdx`, 9 `.mdoc` (incl. nested `corne-keyboard/th/index.mdx`).
- `tags:` present on 224 posts, two YAML styles: 134 unindented `- item` (WP-export), 89 indented `  - item` (modern). Same parsed data.
- `categories:` on 172 posts; only 12 unique values (Life 59, Web Development 36+web development 11, Photography 28, Astronomy 26, hobby 10, personal 2, bicycle, Tools, development, mechanical keyboards, books). 31 occurrences already duplicate a tag on the same post.
- `categeory:` (typo, plain string) on `mamp-osx` only.
- No tags at all: `vim-powerline/index.mdoc` (2014).
- Renderers use only `tags` (lowercased/deduped via `postTags()` in `src/shared/posts.ts:31`): /blog sidebar (count >= 5, top 20), /tags/[tag], TagsList, RelatedPosts. Keystatic already defines only `tags`. `PostLayout.astro:10` destructures an unused `categories`.

## Phase 1 — Codemod (one-off script, not kept after run)
`scripts/unify-tags.mjs` using `js-yaml` (already in deps):
1. Walk `src/content/blog/**/index.{md,mdx,mdoc}` recursively.
2. Parse frontmatter to READ values; rewrite with line-targeted edits only (don't re-dump whole frontmatter — WP-era values have quirks we shouldn't churn).
3. Per post:
   - Merge `categories` (+ mamp-osx `categeory`) into `tags`: existing tags first, categories appended.
   - Lowercase ALL stored tag values; dedupe after lowercasing (a post may carry both `Web Development` and `web development`).
   - Delete `categories:` / `categeory:` blocks.
   - Rewrite the `tags:` block in indented style (`  - item`).
4. Touch git-clean tree first; review `git diff` before committing.

## Phase 2 — Manual content fixes
- `vim-powerline/index.mdoc`: add `tags: vim, osx, tooling`.

## Phase 3 — Schema & code cleanup
- `src/content.config.ts:17`: remove `categories` from zod schema (typo keys like `categeory`/`published` are already auto-stripped).
- `src/layouts/PostLayout.astro:10`: drop unused `categories` from destructuring.
- No keystatic change needed.

## Phase 4 — Verification
- `grep -rn "^categories:\|^categeory:" src/content/blog` → empty.
- `npx astro check` + `npm run build` + `npm run preview`.
- Snapshot `tagCounts()` before/after: expect `life`, `web development`, `photography`, `astronomy`, `hobby` to enter/shift the top-20 sidebar; spot-check /blog, /tags/web-development, one merged old post (tags + related), and a 2024 keystatic post.
- Confirm no /tags 404 regressions (all old tag URLs still exist; merge only adds).

## Expected side effects (acceptable)
- Sidebar tag counts change because categories fold into tags.
- Old WP-imported category/tag names become lowercase in storage; `/tags/*` URLs unchanged (already lowercased at render).
- `postTags()` lowercasing in `src/shared/posts.ts:32` becomes a no-op safety net; leave the code as-is.

## Decisions
1. vim-powerline tags: `vim`, `osx`, `tooling`.
2. Lowercase all stored tag values (decided 2026-09-17).
