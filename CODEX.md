# Vestige CODEX

Internal guide to the Vestige site: stack, routing, theming, and how to extend it.

## Stack & Commands
- Astro 5 with Svelte (`@astrojs/svelte`); TypeScript extends `astro/tsconfigs/strict`.
- Styles live in `src/styles/palette.css`; `olderpalette.css` is a legacy reference and unused.
- Package manager: pnpm. Scripts (`package.json`): `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm deploy` (build + `pnpm dlx gh-pages -d dist --dotfiles`), `pnpm astro`.
- Svelte preprocessing uses `vitePreprocess` (`svelte.config.js`).
- Site config: `site: https://razushi.dev`; static assets in `public/` (`favicon.svg`, `CNAME`; there’s also a root `CNAME` for GitHub Pages).
- Optional: Nix flake (`flake.nix`) – `nix develop` drops into a fish shell with nodejs-slim, pnpm, rust/wasm tooling, lighthouse, typos; exports `BUILD_DATE`. `nix fmt` runs alejandra.

## Directory Map
- `src/layouts/BaseLayout.astro` – Global shell (imports `palette.css`), header/nav, optional breadcrumbs, theme bootstrap + toggle, sticky/static footer flag.
- `src/styles/palette.css` – CSS variables, themes, layout helpers (nav, cards, buttons, prose, entry listings), palette preview styles. `olderpalette.css` is unused.
- Components: `FireIcon.astro` (brand mark, not used in header), `FileIcon.astro`, `FolderIcon.astro`, `ChevronRightIcon.astro` (imported but unused), `PalettePreview.svelte` (swatch grid).
- `src/content/config.ts` – `blog` collection schema.
- `src/content/blog/` – Markdown posts; folder hierarchy defines URL slugs and breadcrumbs (supports nested folders and spaces, which are slugified).
- `src/pages/` routes:
  - `index.astro` – “Expedition survived” landing with status badges, CTA buttons to `/blog` and `/about`, metrics (post count, tag placeholder, systems text), and a contact panel (email, Matrix, GitHub); sticky footer on.
  - `blog/index.astro` root blog listing (folders first, then files).
  - `blog/[...segments].astro` catch-all for nested folder indexes and post detail pages.
  - `posts/index.astro` + `posts/[...slug].astro` legacy archive/detail, still wired to the `blog` collection.
  - `about.astro`, `tests.astro`.
- `public/` – Static assets. `dist/` holds build output.

## Content Model (Astro Collections)
- Collection: `blog` (`src/content/config.ts`).
- Frontmatter schema:
  - `title` (string, required)
  - `description` (string, optional)
  - `date` (string → Date)
  - `tags` (string array, default `[]`)
  - `heroColor` (string, optional; used for card borders/buttons)
- Slugs come from the file path under `src/content/blog/`, then slugified: lowercase, non-alphanumerics collapse to `-`, trimmed of leading/trailing dashes. Nested folders become URL segments and breadcrumbs.

## Layout & Global UI (BaseLayout)
- Imports `palette.css`; sets page `<title>`/`description` from props (defaults: `Vestige`, `Personal writing & notes`).
- Bootstraps theme on load: reads `epithet-theme`/`epithet-accent` from localStorage, sets `data-theme` and `data-theme-state` on `<html>`, applies `color-scheme`, exposes `window.__vestigeTheme`, reapplies stored accent to `--accent-highlight|teal|copper`.
- Theme toggle cycles **dark → light → night**; updates the button state and persists the choice. Accent defaults to stored value or current CSS token.
- Body class combines `site-shell`, optional `pageId`, and footer mode (`footer-sticky`/`footer-static`).
- Header: fixed bar with a home link labeled “Vestige” and links to `/blog` and `/about`. Active detection matches exact path or prefix.
- Breadcrumbs: optional array of `{label, href?}` rendered above content inside the main card.
- Footer: copyright year + GitHub link. `stickyFooter` prop pins it; otherwise it follows content.

## Theming & Styles (`src/styles/palette.css`)
- Palette variables: core hues (red → clay), neutrals (stone/bone/clay/slate/smoke/dusk), and a single accent rail (`--accent-highlight` mirrored to teal/copper) plus rose/cyan.
- Themes: `[data-theme="dark" | "light" | "night"]` set surfaces, text, borders, shadows, and `color-scheme`.
- Layout tokens: radii, transitions, `--card-padding`, `--wrap-width` (min(900px, 62vw, 88vw)), grid overlay helpers, shader/vignette colors.
- Font stack: `'Share Tech', 'Share Tech Mono', system` for both display/body; `.caps` uppercases and letter-spaces headings.
- Key classes: `site-shell`, `wrap`, `page-wrap`, `card-panel`, `ghost-button`, `post-grid`/`post-card`, `.tag`/`.tag-list`, palette preview grid, nav (`.nav`, `.nav-links`, `.theme-toggle`, shared nav link styling), folder/file listings (`.entry-list`, `.entry-card`, `.entry-icon`, `.entry-meta`, `.entry-desc`), hero/eyebrow, prose styles.

## Pages & Routing
- `/` (`index.astro`): Landing with status badges, CTA buttons, metrics, and a contact list; sticky footer on.
- `/blog` (`blog/index.astro`): lists top-level folders first (alphabetical), then files at the root. Icons for folders/files; files show date.
- `/blog/...` (`blog/[...segments].astro`):
  - Folder path → folder index (folders first, files second) with breadcrumbs (Home → Blog → folder segments).
  - Post path → detail view with breadcrumbs, formatted date, tags, and rendered markdown.
- `/posts` legacy archive grid; cards use `heroColor` (or token) for a top border and CTA color; supports nested slugs.
- `/posts/...` legacy post detail view.
- `/tests`: palette preview swatches + post card grid (shares `heroColor` styling).
- `/about`: static writeup with bilingual intro line; sticky footer enabled.

## Components
- `FireIcon.astro` – flame glyph (not used in the header).
- `FolderIcon.astro` / `FileIcon.astro` – SVGs for folder/file rows.
- `ChevronRightIcon.astro` – chevron glyph (available, not currently rendered).
- `PalettePreview.svelte` – Responsive swatch buttons showing name/hex; highlights selection and shows a selected readout; used on `/tests`.

## Content Inventory (by folder path)
- `League of Legends/toplane-pressure.md` — “League Toplane moment” — 2024-02-14 — tags: League, jungle tempo, toplane — heroColor unset (uses accent fallback).
- `Warframe/equipment-farming-speedrun.md` — “Minmal farm to maximum content” — 2025-05-27 — tags: warframe, meta, speedrun — heroColor unset.
- `Warframe/modding/warframe-settings.md` — “Optimised Game Settings” — 2025-05-27 — tags: warframe, qol, settings — heroColor unset.

## How to Extend
- Add a post: drop `your-title.md` inside `src/content/blog/<folder>/...`. Frontmatter needs `title`, `date`, optional `description`, `tags`, `heroColor`. Path segments become slugs after slugifying (lowercase, non-alphanumerics → `-`); nested folders are supported.
- Folder labels come from the raw segment (before slugify) for breadcrumbs/listings.
- `heroColor` can be a hex or any token used on `/posts` and `/tests` (teal, copper, highlight, cyan, slate, stone, bone, lime, sky, red, orange, yellow, green, magenta, violet, pink, clay, neutral clay, smoke, dusk).
- Nav, cards, and prose styles live in `palette.css`; reusing `wrap`, `card-panel`, `ghost-button`, `post-card`, `prose`, `entry-card` keeps layouts consistent.
- Theme toggle cycles dark/light/night and reapplies a stored accent from `epithet-accent`.

## Dev Notes
- `pnpm dev` (or `pnpm astro dev`) to run locally; `pnpm build` → `dist`; `pnpm preview` serves the build; `pnpm deploy` builds then publishes `dist` with `pnpm dlx gh-pages -d dist --dotfiles`.
- `CNAME` pins deploys to `razushi.dev`.
- Static site only; no server/runtime dependencies. `olderpalette.css` is retained for reference.
