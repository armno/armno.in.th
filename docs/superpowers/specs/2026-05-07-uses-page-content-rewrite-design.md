# /uses page content rewrite — design

**Date:** 2026-05-07
**Status:** Approved (pending spec review)
**Scope:** Content + IA rewrite of `/uses` to fit the existing scroll-driven stacked-card layout. One small layout polish (freeze-stack on tail).

## Context

The `/uses` page was redesigned in this session into a 50:50 two-column layout: a sticky stacked-card image column on the left, prose on the right, scroll-spy driven. The OLD content (single MDX file, Software/Hardware H2 split, mixed-granularity bullets, alumni lists) was carried over with minimal restructuring. With the new layout the legacy IA reads awkwardly:

- The Software / Hardware H2 dividers sit *outside* the centered `<UseSection>` rhythm and feel orphaned
- Several non-tracked sections (Others, Alumni, Mouse, Camera) leave blank placeholder cards in the deck — too many visual "missing pages"
- "Others" and "Alumni" are bullet dumps that don't match the hero treatment they sit next to
- Software/Hardware as top-level IA is a dated taxonomy and doesn't reflect how the user actually picks tools

User intent: rewrite the content from scratch (it's outdated anyway) and choose an IA that fits the visual rhythm of the new design.

## IA decisions (locked)

1. **Section density:** ~7-8 single-item heroes, one image each. No multi-item composites.
2. **Alumni:** kept as a small tail subsection (plain prose, no `<UseSection>`, no image).
3. **Intro:** personal 1-2 sentence opener about the user's setup philosophy. Replaces the current "Inspired by uses.tech…" framing.
4. **Order:** inside-out narrative arc — terminal → editor → laptop → monitor → keyboard → headphones → camera → bike.
5. **Drop:** Software / Hardware H2 dividers. Page is one flat narrative.

## Page structure

```
[Personal intro — 1-2 sentences in the prose column, before the first hero]

Hero sections (in this order):
  1. Terminal           <UseSection id="terminal">
  2. Editor             <UseSection id="code-editor">
  3. Laptop             <UseSection id="macbook">
  4. Monitor            <UseSection id="monitor">
  5. Keyboard           <UseSection id="keyboard">
  6. Headphones         <UseSection id="headphones">
  7. Camera             <UseSection id="camera">    ← needs new image
  8. Bike               <UseSection id="bike">

Tail (regular prose, no UseSection wrappers):
  ## The rest of the toolbox
  ### Utilities & services
    [flat bullet list]
  ### Alumni
    [flat bullet list with one-line rationale per item]
```

## Hero copy pattern

Each hero `<UseSection>` follows the same shape:

- **H3 heading** = the specific tool name, not a generic category. "Corne keyboard" beats "Keyboard". "Ghostty" beats "Terminal" (or use both: "Ghostty (terminal)").
- **Body** = 1–3 sentences. Lead with *why* you use it — what makes it stick — over *what* it is. Personality > spec list.
- **Sub-callouts** = optional, 2–4 inline links for closely-related tools (e.g., the terminal hero can mention Starship + zoxide inline). NOT a 7-bullet shopping list.
- **No long bullet lists inside heroes.** They kill the breathing rhythm of the 60vh-tall section. Bulky lists move to the tail.

Example shape (illustrative, not final copy):

> ### Ghostty
>
> My terminal for the past year. Switched from iTerm2 because it renders text crisply and feels noticeably snappier. I run [zsh](…) with [Starship](…) and [zoxide](…). Full setup in my [dotfiles](…).

vs. the old shape:

> * Terminal: I use Ghostty with
>   * zsh and with Starship prompt
>   * base16-shell for terminal colors
>   * zoxide as a replacement for cd
>   * eza as a replacement for ls
>   * bat as a replacement for cat
>   * fnm for node version management
>   * and here are my dotfiles

The new shape is shorter, more personal, and visually anchors the 60vh slot.

## Tail section: "The rest of the toolbox"

After the last hero, a regular prose section (no `<UseSection>`):

```markdown
## The rest of the toolbox

### Utilities & services
* [Raycast](…) — Spotlight replacement
* [1Password](…) — passwords
* [Homebrew](…) — package manager
* [Karabiner Elements](…) — keyboard remapping
* [Rectangle](…) — window management
* [Cleanshot X](…) — screenshots and recordings
* [Ice](…) — menubar tidy
* [Pixelmator Pro](…) — image editing
* [Google Photos](…) — photo backup
* …etc.

### Alumni
* [iTerm2](…) — main terminal app for 10+ years; replaced by Ghostty.
* [Alfred](…) — used for many years until I found Raycast.
* [oh-my-zsh](…) and [oh-my-posh](…) — replaced by Starship.
* [z](…) — replaced by zoxide.
* [BetterTouchTool](…) — replaced by Karabiner + Rectangle.
* [kitty](…) — fast but text rendering wasn't beautiful enough.
```

Tail items are flat bullet lists, one line each, focused on *what role* the tool plays (utilities) or *what replaced it* (alumni). No images, no UseSection, no hero treatment.

## Layout polish: freeze-stack on tail

**Problem:** with the new tail section, when the user scrolls past the last hero (Bike), the active becomes `null` and the deck fades out → placeholder card shows during the entire tail. That's another long stretch of "blank card" feel.

**Solution:** when no tracked section is active AND scroll position is past the last tracked section, *freeze* the stack at its final state (last hero on top, full deck of 7 previous heroes stacked behind it, in their stack=0..3 positions). Acts as a visual "summary" of the journey while the reader scans the tail.

**Implementation:** in the scroll-spy update function in `src/layouts/UsesLayout.astro`:

```js
// Existing: when no tracked section spans the trigger and we're at the top
if (next === null && tracked.length > 0) {
  const first = tracked[0].getBoundingClientRect();
  if (first.top > trigger) next = tracked[0].dataset.imageId;
}
// New: when no tracked section spans the trigger and we're past the last one
if (next === null && tracked.length > 0) {
  const last = tracked[tracked.length - 1].getBoundingClientRect();
  if (last.bottom <= trigger) next = tracked[tracked.length - 1].dataset.imageId;
}
```

Order matters — the "past last" check must come after the "before first" check so they don't conflict (they can't both be true at once anyway, but order makes intent clear).

**For non-tracked sections in the middle of the page** (none in the new IA, but defensive): placeholder still shows. Only the tail at the very end gets the freeze treatment.

## Image plan

| Hero | Image source |
|---|---|
| Terminal | `_terminal.jpg` (existing — may need refresh to current Ghostty setup) |
| Editor | `_vscode.jpg` (existing — may need refresh; user uses Cursor now) |
| Laptop | `_macbook-air-m2.jpg` (existing) |
| Monitor | `_monitor.jpg` (existing) |
| Keyboard | `_corne-low-profile-mbk-keycaps.jpg` (existing) |
| Headphones | `_headphones.jpg` (existing) |
| Camera | **NEW** — needs a shot. Currently no camera image; placeholder if not ready. |
| Bike | `_lapierre-xelius-sl-2016.jpg` (existing) |

If the user has updated tools but not new images, MVP can ship with the existing photos and refresh later. Each hero must have *some* image — if no image is available for a tool (e.g., Camera), either ship a placeholder shot, swap the hero for a different tool, or temporarily remove that hero from the rotation.

The `usesImages` manifest in `src/components/usesImages.ts` is the single source of truth — adding/removing a hero means adjusting that array.

## Layout / code changes summary

The IA rewrite is mostly content. Code changes are minimal:

1. **`src/pages/uses/index.mdx`** — full rewrite. New intro, 8 hero sections (or fewer if camera image isn't ready), tail section. Drop Software/Hardware H2s.
2. **`src/components/usesImages.ts`** — adjust array if heroes change. Adds `camera` entry if a camera image is staged.
3. **`src/layouts/UsesLayout.astro`** — add the "freeze on tail" branch in the scroll-spy update function (5 lines).

No changes to `UseSection.astro`, `GlobalStyle.astro`, layout grid, or stack CSS.

## Constraints

- Stay serif (Source Serif 4) — no font-family switches per existing design cohesion preference.
- Stay within Astro 6 + Tailwind 4 conventions already in the codebase.
- The `prose lg:prose-lg` typography wrapping continues to govern the right column. New copy should fit within prose typography expectations (no heavy custom HTML).
- Mobile fallback (below `lg`) continues to render images inline within each `<UseSection>` via `lg:hidden`. The IA rewrite must respect this — heroes work in single-column mobile too.

## Non-goals

- No new layout primitives, components, or visual styles beyond the freeze-stack JS branch.
- No CMS/Keystatic integration for `/uses` content (it stays as a hand-edited MDX file).
- No animation tuning for the stack (already locked).
- No dark-mode visual rework.
- No SEO/meta changes beyond what title/description already exist.

## Open questions for the writing-plans phase

1. **Final hero list.** The 8-hero list above assumes the user's current toolset roughly matches the old MDX. Will likely change after the user enumerates current tools. Plan must be flexible to ship 6, 7, or 8 heroes — whatever lands.
2. **Camera image.** Confirm whether a shot exists, or whether the camera hero is dropped/deferred for v1.
3. **Editor identity.** Old image is VSCode-themed but user uses Cursor. Refresh image, or keep until convenient?
4. **Terminal identity.** Old image is from an older terminal setup. Refresh, or keep?
5. **Intro copy.** User to draft (1-2 sentences). Plan can include a placeholder + drafting step.

## Verification

When the rewrite ships:

- `npm run dev` → `http://localhost:4444/uses`
- Scroll through every hero: each card crests to the active position with the previous heroes stacked behind, growing upward as the deck deepens
- Scroll past the last hero into the tail: deck *freezes* at its final state (8 cards visible, last one on top), does NOT fade to placeholder. Placeholder card never shows in the new IA (no non-tracked sections in the middle of the page anymore).
- Resize below `lg`: aside hidden, each hero shows its image inline, tail flows below as a normal prose section.
- Toggle dark mode: legibility holds.
- `npm run build` succeeds with no new errors.
