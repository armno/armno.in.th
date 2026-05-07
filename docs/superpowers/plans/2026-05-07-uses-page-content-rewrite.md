# /uses Page Content Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `/uses` content into the activity-narrative IA (8 single-item heroes, inside-out order, alumni tail) and add the freeze-stack-on-tail layout polish.

**Architecture:** Almost all changes are content (MDX rewrite). One small JS addition to the existing scroll-spy keeps the deck visible during the new tail section. No new components, no new layouts.

**Tech Stack:** Astro 6, Tailwind CSS 4, MDX (markdown + JSX), existing `<UseSection>` component, existing `usesImages` manifest, existing scroll-spy in `UsesLayout.astro`.

**Spec:** `docs/superpowers/specs/2026-05-07-uses-page-content-rewrite-design.md`

**Verification model:** This is a static Astro site with no automated test harness. "Verify" steps = run `npm run dev`, hit `http://localhost:4444/uses` in the browser, and visually confirm. Final task runs `npm run build` to confirm production build still passes (~631 pages).

---

## File map

- **Modify** `src/layouts/UsesLayout.astro` — add freeze-stack branch in scroll-spy `update()` function (~5 lines).
- **Modify** `src/components/usesImages.ts` — reorder array to inside-out hero order. Optionally add `camera` entry if a camera image is provided.
- **Rewrite** `src/pages/uses/index.mdx` — full content restructure: drop Software/Hardware H2s, replace with 8 hero `<UseSection>` blocks in inside-out order + tail (`## The rest of the toolbox` with utilities + alumni subsections).

No new files. No layout primitive changes. No CSS changes.

---

## Task 0: Confirm hero list with user

This task is interactive — confirm before any code changes. The spec assumed the old MDX's tools, but the user said the content is outdated.

- [ ] **Step 1: Ask the user to confirm/override the 8 heroes**

Default list (from spec, in inside-out order):
1. Terminal
2. Editor
3. Laptop
4. Monitor
5. Keyboard
6. Headphones
7. Camera
8. Bike

Ask the user:
> "Quick confirmation before I touch the files. Per the spec, I'll structure the page around 8 heroes in this order: Terminal, Editor, Laptop, Monitor, Keyboard, Headphones, Camera, Bike. Do you want to:
> - Keep this list as-is and you'll fill in the actual tool names + copy yourself
> - Drop one (e.g., Camera if no image is ready)
> - Reorder
> - Add or swap something
>
> Also: should I write placeholder copy for each hero, or leave them as `TODO` comments for you to fill in?"

Wait for the user's response. Capture three things:
- Final hero list (count + order)
- For each hero: keep old image, or defer (no image = drop hero from rotation)
- Copy strategy: placeholder draft from me, or empty TODOs

- [ ] **Step 2: Record decisions inline in this plan**

Edit this plan file in place — under "Decisions" below, list final hero order, image plan, and copy strategy. This becomes the source of truth for Tasks 2 and 3.

```markdown
## Decisions (filled during Task 0)

Final hero list (in order):
1. ...
2. ...
...

Image plan:
- terminal → existing `_terminal.jpg`
- ...

Copy strategy: [placeholder | TODO]
```

- [ ] **Step 3: No commit for this task** — it's planning only.

---

## Task 1: Add freeze-stack-on-tail to scroll-spy

The scroll-spy currently sets active=null when no tracked section spans the trigger line, fading the deck out and showing the placeholder. After the rewrite the entire tail section is non-tracked, so the deck would fade out for the whole tail. Freeze the deck at its final state instead.

**Files:**
- Modify: `src/layouts/UsesLayout.astro` (the `update()` function inside the inline `<script is:inline>` block at the end of `<body>`)

- [ ] **Step 1: Locate the `update()` function**

Open `src/layouts/UsesLayout.astro`. Find the script near the bottom. The current `update()` looks like:

```js
const update = () => {
  scheduled = false;
  const trigger = window.innerHeight * 0.5;
  let next = null;
  for (const el of tracked) {
    const rect = el.getBoundingClientRect();
    if (rect.top <= trigger && rect.bottom > trigger) {
      next = el.dataset.imageId;
      break;
    }
  }
  if (next === null && tracked.length > 0) {
    const first = tracked[0].getBoundingClientRect();
    if (first.top > trigger) next = tracked[0].dataset.imageId;
  }
  setActive(next);
};
```

- [ ] **Step 2: Add the past-last-section branch**

Insert a second `if (next === null && tracked.length > 0)` block immediately after the existing one, BEFORE `setActive(next)`. The full updated function:

```js
const update = () => {
  scheduled = false;
  const trigger = window.innerHeight * 0.5;
  let next = null;
  for (const el of tracked) {
    const rect = el.getBoundingClientRect();
    if (rect.top <= trigger && rect.bottom > trigger) {
      next = el.dataset.imageId;
      break;
    }
  }
  if (next === null && tracked.length > 0) {
    const first = tracked[0].getBoundingClientRect();
    if (first.top > trigger) next = tracked[0].dataset.imageId;
  }
  if (next === null && tracked.length > 0) {
    const last = tracked[tracked.length - 1].getBoundingClientRect();
    if (last.bottom <= trigger) next = tracked[tracked.length - 1].dataset.imageId;
  }
  setActive(next);
};
```

The new block: when `next` is still null after checking spans + before-first preview, check whether the last tracked section's bottom has scrolled past the trigger line. If so, hold the last hero as active — which means the deck stays at `data-stack="0,1,2,3..."` (the existing setActive logic handles this).

- [ ] **Step 3: Verify in browser**

Run dev server (already running on `:4444` per session context, otherwise: `npm run dev`).

In Chrome, hit `http://localhost:4444/uses`. Scroll to the very bottom of the page (past the Bike section into the Other / footer area).

Expected: the bike image stays visible on the left as the active card, with previous heroes stacked behind it. The dashed-card placeholder should NOT appear during the tail.

Compare with the OPPOSITE of correct: scroll to a non-tracked section in the MIDDLE of the page (e.g., today's "Mouse" or "Others" sections, before the rewrite). Placeholder card should still appear there. (After Task 3 there are no middle non-tracked sections, so this only matters during this transitional verification.)

- [ ] **Step 4: Commit**

```bash
git add src/layouts/UsesLayout.astro
git commit -m "$(cat <<'EOF'
freeze /uses image stack on the tail section

When the user scrolls past the last tracked section, hold the deck at
its final state (last hero on top, full stack behind) instead of fading
to the placeholder card.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Reorder usesImages manifest

The image manifest currently lists images in a hardware-grouped order. The new IA wants inside-out narrative order, which drives the stacking-cards reading flow.

**Files:**
- Modify: `src/components/usesImages.ts`

- [ ] **Step 1: Read the current manifest**

Confirm current contents match expectation. Each entry has `id, src, alt, width, height`. The `id` values must remain consistent with `<UseSection id="...">` references (Task 3) — keep these stable across the file.

- [ ] **Step 2: Reorder the array to inside-out**

Replace the `usesImages` array with the order from the Task 0 decisions section. If the default order stands, the array becomes:

```typescript
export const usesImages: UseImage[] = [
  { id: 'terminal',    src: terminal.src,    alt: 'Ghostty terminal',              width: terminal.width,    height: terminal.height },
  { id: 'code-editor', src: vscode.src,      alt: 'Cursor code editor',            width: vscode.width,      height: vscode.height },
  { id: 'macbook',     src: macbook.src,     alt: '13-inch Macbook Air M2',        width: macbook.width,     height: macbook.height },
  { id: 'monitor',     src: monitor.src,     alt: 'Samsung 28-inch UR55 monitor',  width: monitor.width,     height: monitor.height },
  { id: 'keyboard',    src: keyboard.src,    alt: 'Corne wireless split keyboard', width: keyboard.width,    height: keyboard.height },
  { id: 'headphones',  src: headphones.src,  alt: 'Headphones',                    width: headphones.width,  height: headphones.height },
  { id: 'bike',        src: bike.src,        alt: '2016 Lapierre Xelius SL',       width: bike.width,        height: bike.height },
];
```

(This is already the existing order — confirm no reorder needed if Task 0 kept defaults. The point of this task is locking in the order before the MDX rewrite touches `id` references.)

- [ ] **Step 3: Optional — add camera entry**

If Task 0 confirmed a camera image exists, add the import + manifest entry:

```typescript
import camera from '../pages/uses/content/_camera.jpg'; // adjust filename
```

Then add the entry between `headphones` and `bike` in the array (so visual order: headphones → camera → bike):

```typescript
{ id: 'camera', src: camera.src, alt: 'Fujifilm X-T20', width: camera.width, height: camera.height },
```

If no camera image, skip this step. The MDX (Task 3) will not reference `<UseSection id="camera">` in that case.

- [ ] **Step 4: Verify**

Run `npm run dev` if not running. Hit `http://localhost:4444/uses`. The page may still render today's MDX content (which references `id="terminal"` etc.). Confirm the page still loads with no console errors and existing images still appear in the stack as you scroll.

- [ ] **Step 5: Commit**

```bash
git add src/components/usesImages.ts
git commit -m "$(cat <<'EOF'
reorder uses image manifest to inside-out

Order now matches the new IA: terminal → editor → laptop → monitor →
keyboard → headphones → (camera) → bike. Drives the stacking-cards
reading flow.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

(If the order didn't actually change in Step 2, skip this commit — there's nothing to commit. Note in the executing session that the manifest was already in the right order.)

---

## Task 3: Rewrite index.mdx

Replace the entire content of `src/pages/uses/index.mdx` with the new structure: personal intro, 8 hero `<UseSection>` blocks, tail with utilities + alumni.

**Files:**
- Rewrite: `src/pages/uses/index.mdx`

- [ ] **Step 1: Build the scaffolding based on Task 0 copy strategy**

Two variants depending on what the user picked in Task 0:

**Variant A — Empty TODO scaffold (user fills in content):**

```mdx
---
title: Tools I use
description: A collection of hardware/software/tools I use on a daily basis.
pubDate: '2022-06-08T07:51:22+07:00'
layout: ../../layouts/UsesLayout.astro
language: en
thumbnail: /images/uses/content/thumbnail.jpg
---
import UseSection from '@components/UseSection.astro';

{/* TODO: 1-2 sentence personal intro about your setup philosophy */}

<UseSection id="terminal">
### TODO: terminal name

**Why I'm using this:** {/* TODO: 1-3 sentences. What made you pick it, what keeps it, what you like. Mention companion tools inline. */}
</UseSection>

<UseSection id="code-editor">
### TODO: editor name

**Why I'm using this:** {/* TODO: 1-3 sentences. What made you pick it, what keeps it, what you like. Theme/font as inline links. */}
</UseSection>

<UseSection id="macbook">
### TODO: laptop model

**Why I'm using this:** {/* TODO: 1-3 sentences. What made you pick it, what keeps it, what you like. */}
</UseSection>

<UseSection id="monitor">
### TODO: monitor model

**Why I'm using this:** {/* TODO: 1-3 sentences. What made you pick it, what keeps it, what you like. */}
</UseSection>

<UseSection id="keyboard">
### TODO: keyboard name

**Why I'm using this:** {/* TODO: 1-3 sentences. What made you pick it, what keeps it. Link to build posts if any. */}
</UseSection>

<UseSection id="headphones">
### TODO: headphones

**Why I'm using this:** {/* TODO: 1-3 sentences. Which ones for what use case, what you like. */}
</UseSection>

<UseSection id="camera">
### TODO: camera

**Why I'm using this:** {/* TODO: 1-3 sentences. What made you pick it, what keeps it. */}
</UseSection>

<UseSection id="bike">
### TODO: bike

**Why I'm using this:** {/* TODO: 1-3 sentences. What made you pick it, what keeps it. */}
</UseSection>

## The rest of the toolbox

### Utilities & services

{/* TODO: flat bullet list of utilities you actively use, one short rationale per item */}

* TODO

### Alumni

{/* TODO: flat bullet list of past tools, one-line rationale each (what replaced them or why you moved on) */}

* TODO
```

**Variant B — Placeholder draft (user edits in place):**

```mdx
---
title: Tools I use
description: A collection of hardware/software/tools I use on a daily basis.
pubDate: '2022-06-08T07:51:22+07:00'
layout: ../../layouts/UsesLayout.astro
language: en
thumbnail: /images/uses/content/thumbnail.jpg
---
import UseSection from '@components/UseSection.astro';

A snapshot of the tools I reach for daily, refined over years of trying everything. {/* TODO: edit to your voice */}

<UseSection id="terminal">
### Ghostty

{/* TODO: edit. Currently a draft. */}
**Why I'm using this:** Switched from iTerm2 a year ago because text renders more crisply and it feels noticeably snappier. I run [zsh](https://www.zsh.org/) with [Starship](https://starship.rs/), [zoxide](https://github.com/ajeetdsouza/zoxide), [eza](https://github.com/eza-community/eza), and [bat](https://github.com/sharkdp/bat). Full setup in my [dotfiles](https://github.com/armno/dotfiles).
</UseSection>

<UseSection id="code-editor">
### Cursor

{/* TODO: edit. */}
**Why I'm using this:** Lives where VSCode used to — same muscle memory, plus the AI tooling I actually reach for daily. I use the official [GitHub theme](https://github.com/primer/github-vscode-theme) (light and dark, depending on the room) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/). [My VSCode setup post](https://armno.in.th/blog/vscode-setup-2023/) mostly still applies.
</UseSection>

<UseSection id="macbook">
### 13-inch Macbook Air M2

{/* TODO: edit. */}
**Why I'm using this:** Base model. Fanless and silent, lightweight enough to forget I'm carrying it, and fast enough for everything I throw at it.
</UseSection>

<UseSection id="monitor">
### Samsung 28" UR55

{/* TODO: edit. */}
**Why I'm using this:** 4K at a comfortable size — text stays sharp without being tiny. Mounted on an [NB-F80 monitor arm](https://www.google.com/search?q=nb-f80+monitor+arm) so the desk stays clear underneath.
</UseSection>

<UseSection id="keyboard">
### Corne

{/* TODO: edit. */}
**Why I'm using this:** Wireless split keyboard with low-profile keys. I built it myself, which is half the reason I love it. Process notes in [Building a Wireless Corne Keyboard](https://armno.in.th/blog/building-a-wireless-corne-keyboard/) and [Low Profile Wireless Corne Keyboard](https://armno.in.th/blog/low-profile-wireless-corne-keyboard/).
</UseSection>

<UseSection id="headphones">
### Headphones

{/* TODO: edit / consolidate to one pick. */}
**Why I'm using this:** Different pair for different situations. [Sony WH-1000XM4](https://www.sony.co.th/en/electronics/headband-headphones/wh-1000xm4) for noisy environments, [Audio-Technica M50x](https://armno.in.th/2015/08/04/audio-technica-ath-m50x/) with an [Audirect Beam 2se](https://www.google.com/search?q=Audirect+Beam+2se+DAC) for focused music listening, and [AirPods 4 ANC](https://www.apple.com/airpods-4/) for meetings and workouts.
</UseSection>

<UseSection id="camera">
### Fujifilm X-T20

{/* TODO: edit. Note: needs a camera image in usesImages.ts before this hero shows on left column. */}
**Why I'm using this:** Compact mirrorless I take everywhere, paired with a Fujifilm XC 35mm f/2.0 lens. Nothing fancy — it's just enjoyable to shoot with.
</UseSection>

<UseSection id="bike">
### 2016 Lapierre Xelius SL

{/* TODO: edit. */}
**Why I'm using this:** My road bike. Light, stiff, and the geometry suits long days in the saddle.
</UseSection>

## The rest of the toolbox

### Utilities & services

* [Raycast](https://www.raycast.com/) — Spotlight replacement
* [1Password](https://1password.com/) — passwords
* [Homebrew](https://brew.sh/) — package manager
* [Karabiner Elements](https://karabiner-elements.pqrs.org/) — keyboard remapping
* [Rectangle](https://rectangleapp.com/) — window management
* [Cleanshot X](https://cleanshot.com/) — screenshots and recordings
* [Ice](https://github.com/jordanbaird/Ice) — menubar tidy
* [Pixelmator Pro](https://www.pixelmator.com/pro/) — image editing
* [Arc](https://arc.net/) — default browser
* [Chrome Canary](https://www.google.com/chrome/canary/) — browser for development
* [Google Photos](https://www.google.com/photos/about/) — photo backup

### Alumni

* [iTerm2](https://iterm2.com/) — terminal for 10+ years; replaced by Ghostty.
* [Alfred](https://www.alfredapp.com/) — used for years until I found Raycast.
* [oh-my-zsh](https://ohmyz.sh/) and [oh-my-posh](https://ohmyposh.dev/) — replaced by Starship.
* [z](https://github.com/rupa/z) — replaced by zoxide.
* [BetterTouchTool](https://folivora.ai/) — replaced by Karabiner + Rectangle.
* [kitty](https://sw.kovidgoyal.net/kitty/) — fast but text rendering wasn't beautiful enough.
```

Pick the variant matching the Task 0 decision. If the camera image is NOT in `usesImages.ts`, remove the `<UseSection id="camera">` block from whichever variant is used (or leave it — `<UseSection>` falls back to no inline image when the manifest has no entry, but the desktop aside won't show a card for it).

- [ ] **Step 2: Write the file**

Replace the entire contents of `src/pages/uses/index.mdx` with the chosen variant from Step 1.

- [ ] **Step 3: Verify in browser**

`npm run dev` if not running. Hit `http://localhost:4444/uses`. Walk through:

1. **Top of page:** see the personal intro paragraph in the prose column. Terminal image is previewed on the left (or first hero, whatever ID is first in `usesImages.ts`).
2. **Scroll through each hero:** every `<UseSection>` claims ~60vh, image swaps to active position with previous heroes stacking behind.
3. **Scroll into "The rest of the toolbox" tail:** the deck does NOT fade to placeholder — last hero (bike, or whichever is last) stays on top with the full deck behind. Confirms Task 1 is working.
4. **Resize below `lg` (or use Chrome devtools responsive):** aside hidden, each hero shows its image inline, tail flows below as normal prose.
5. **Toggle dark mode** (`<html class="dark">` toggle in the page chrome): legibility holds.

If any TODO comments are visible to the reader (they shouldn't be — MDX `{/* */}` comments are stripped at build), check that the comment syntax is correct (`{/* */}` not `<!-- -->` for JSX-flavored MDX).

- [ ] **Step 4: Commit**

```bash
git add src/pages/uses/index.mdx
git commit -m "$(cat <<'EOF'
rewrite /uses content into activity-narrative IA

Drops the Software/Hardware split. 8 single-item heroes in inside-out
order (terminal → editor → laptop → monitor → keyboard → headphones →
camera → bike), each in a UseSection block. Long bullet lists move to
a 'The rest of the toolbox' tail with utilities + alumni subsections.

Per spec: docs/superpowers/specs/2026-05-07-uses-page-content-rewrite-design.md

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Production build verification

A static site rebuild catches any MDX/Astro issues that don't surface in dev (image import resolution, prose typography quirks, build-time errors).

**Files:** none modified.

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected output: build completes, ~631 pages indexed (Pagefind step), no errors. Sample expected lines:

```
Indexed 1 language
Indexed 629 pages
Indexed 22105 words
...
Finished in 0.180 seconds
```

- [ ] **Step 2: Spot-check the built /uses page**

Open `dist/uses/index.html` (or `dist/uses.html`, whichever Astro emits). Confirm:
- Title "Tools I use" present
- All 8 hero section IDs present (`<section id="terminal">` etc., except any deferred heroes)
- Tail `<h2>The rest of the toolbox</h2>` present with utilities + alumni subsections
- No raw MDX syntax leaked into the HTML (no `{/* */}` strings, no `<UseSection>` literal text)

```bash
grep -c 'data-uses-section' dist/uses/index.html  # expect: 8 (or however many heroes shipped)
grep 'The rest of the toolbox' dist/uses/index.html  # expect: 1 match
```

- [ ] **Step 3: No commit** — build artifacts aren't tracked. Move on.

---

## Task 5: Final verification + close

- [ ] **Step 1: Re-read the spec one more time**

Open `docs/superpowers/specs/2026-05-07-uses-page-content-rewrite-design.md`. Walk through each section: are all the IA decisions reflected in the shipped page? Is the freeze-stack working? Is the tail structure as designed?

- [ ] **Step 2: List remaining content TODOs back to the user**

If Variant A (empty TODOs) was used, list every `TODO` comment that needs the user's input. If Variant B (placeholder draft), list which sections still need editing per `{/* TODO: edit */}` markers.

Example handback message:

> "Plan executed. The /uses page is rewritten with the new IA and the freeze-stack polish.
>
> Remaining content TODOs to fill in:
> - Personal intro paragraph (top of page)
> - Hero copy: terminal, editor, laptop, monitor, keyboard, headphones, camera, bike
> - Utilities & services list (currently has draft entries — review for accuracy)
> - Alumni list (currently has draft entries — review)
>
> When you're ready to fill any of these in, just edit `src/pages/uses/index.mdx` directly. Each `<UseSection>` is one self-contained block."

- [ ] **Step 3: No final commit needed** — Tasks 1, 2, and 3 each committed. The plan is complete.

---

## Decisions (filled during Task 0)

Final hero list (in order):
1. Terminal (`id="terminal"`)
2. Editor (`id="code-editor"`)
3. Laptop (`id="macbook"`)
4. Monitor (`id="monitor"`)
5. Keyboard (`id="keyboard"`)
6. Headphones (`id="headphones"`)
7. Camera (`id="camera"`)
8. Bike (`id="bike"`)

Image plan:
- terminal → existing `_terminal.jpg`
- code-editor → existing `_vscode.jpg`
- macbook → existing `_macbook-air-m2.jpg`
- monitor → existing `_monitor.jpg`
- keyboard → existing `_corne-low-profile-mbk-keycaps.jpg`
- headphones → existing `_headphones.jpg`
- camera → existing `xt20.jpg` (note: filename has no leading underscore — adjust import accordingly)
- bike → existing `_lapierre-xelius-sl-2016.jpg`

Copy strategy: **Variant A — TODO scaffold** (user fills in copy themselves)

---

## Self-review notes

- **Spec coverage:** Each spec section maps to a task. IA decisions → Task 3 (MDX rewrite). Freeze-stack polish → Task 1. Image plan → Task 2. Tail structure → Task 3. Verification section → Tasks 3 + 4.
- **No placeholders:** Each step has either complete code or a complete instruction. The "Decisions" section is intentionally blank, to be filled during Task 0.
- **Type/symbol consistency:** `UseImage` type, `usesImages` array, `<UseSection id="...">` IDs — all consistent across Tasks 2 and 3. Image IDs (`terminal`, `code-editor`, `macbook`, `monitor`, `keyboard`, `headphones`, `bike`, optional `camera`) match between manifest and MDX usage.
- **Verification model:** static site, no test runner. Each task verifies via dev server + visual scrutiny. Production build runs in Task 4.
- **Commit cadence:** one commit per code-touching task (Tasks 1, 2, 3). Task 0 (decision-only), Task 4 (build verification, no source changes), Task 5 (handback) don't commit.
