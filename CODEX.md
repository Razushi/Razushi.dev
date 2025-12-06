# Vestige CODEX

Internal guide to the Vestige site: stack, routing, theming, and how to extend it.

## Stack & Commands
- Astro 5 with Svelte integration (`astro.config.mjs`), TypeScript via `astro/tsconfigs/strict`.
- Styles: `src/styles/palette.css` (current) and `src/styles/olderpalette.css` (legacy reference).
- Package manager: pnpm; scripts (`package.json`): `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm run deploy` (build + `gh-pages`), `pnpm astro`.
- Svelte preprocessing uses `vitePreprocess` (`svelte.config.js`).
- Site config: `site: https://razushi.dev`; static assets in `public/` (`favicon.svg`, `CNAME`).
- Optional: Nix flake (`flake.nix`) gives `nix develop` (node/pnpm/rust/wasm/lighthouse) and `nix fmt` (alejandra).

## Directory Map
- `src/layouts/BaseLayout.astro` – Global shell (imports `palette.css`), fixed header/nav, optional breadcrumbs, theme bootstrap + toggle, sticky/static footer option.
- `src/styles/palette.css` – CSS variables, themes, layout helpers (nav, cards, buttons, post styles), and folder/file listing styles (`entry-*`). `olderpalette.css` is a prior palette.
- `src/components/FireIcon.astro` – Brand flame. `FileIcon.astro` and `FolderIcon.astro` – Lucide-style glyphs for listings.
- `src/components/PalettePreview.svelte` – Swatch grid emitting `select` events; used on `/tests`.
- `src/content/config.ts` – Content collection schema for `blog`.
- `src/content/blog/` – Markdown posts; folder structure defines URL slugs and breadcrumbs (nested folders allowed).
- `src/pages/` routes:
  - `index.astro` landing.
  - `blog/index.astro` root blog listing (folders + files).
  - `blog/[...segments].astro` nested catch-all for folder indexes and post detail pages.
  - `posts/index.astro`, `posts/[...slug].astro` (legacy archive view, still functional with nested slugs).
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
- Slugs come from the file path under `src/content/blog/`. Nested folders are part of the slug and drive breadcrumbs and URLs (all lowercase/hyphen suggested).

## Layout & Global UI (BaseLayout)
- Imports `palette.css`; sets page `<title>`/`description` from props (defaults: `Vestige`, `Personal writing & notes`).
- Bootstraps theme on load: reads `epithet-theme`/`epithet-accent` from localStorage, sets `data-theme` and `data-theme-state` on `<html>`, applies `color-scheme`, exposes `window.__vestigeTheme`.
- Theme toggle cycles **dark → light → night**; updates `data-theme-state` on the button and stores the selection. Accent key applies the same value to `--accent-highlight`, `--accent-teal`, `--accent-copper`.
- Body class combines `site-shell`, optional `pageId`, and footer mode (`footer-sticky`/`footer-static`).
- Header: fixed bar with brand (FireIcon + “Vestige”) linking home; nav links `/blog`, `/tests`, `/about` with active detection via path prefix.
- Breadcrumbs: optional array of `{label, href?}` rendered above content inside the main card.
- Footer: copyright year + GitHub link. `stickyFooter` prop fixes it to the viewport bottom; otherwise it follows content.

## Theming & Styles (`src/styles/palette.css`)
- Palette variables: core hues (red → clay), neutrals (stone/bone/clay/slate/smoke/dusk), single accent rail (`--accent-highlight` feeding teal/copper), plus rose/cyan.
- Themes: `[data-theme="dark" | "light" | "night"]` set surfaces, text, borders, shadows, and `color-scheme`.
- Layout tokens: radii, transitions, `--card-padding`, `--wrap-width` (min(900px, 62vw, 88vw)), grid overlay settings for `card-panel`, shader/vignette colors.
- Font stack: `'Geist Mono', 'Share Tech', 'FiraCode', 'Geist', 'Inter', system`; `.caps` uppercases and letter-spaces headings.
- Key classes: `site-shell` spacing for fixed header/footer; `wrap`, `page-wrap`, `card-panel`; `ghost-button`; `post-grid`/`post-card`; `.tag`/`.tag-list`; palette preview grid; nav (`.nav`, `.brand`, `.nav-links`, `.theme-toggle`); folder/file listings (`.entry-list`, `.entry-card`, `.entry-icon`, `.entry-meta`, `.entry-desc`).

## Pages & Routing
- `/` (`index.astro`): centered landing card with avatar initial, eyebrow greeting, “I use NixOS, btw” headline, CTAs to `/blog` and `/about`; sticky footer on.
- `/blog` (`blog/index.astro`): lists top-level folders first (alphabetical), then files at root. Each folder/file shows an icon and metadata (date for files).
- `/blog/...` (`blog/[...segments].astro`):
  - If the path matches a folder, renders a folder index (folders first, then files) with breadcrumbs reflecting each folder segment (title-cased).
  - If the path matches a post slug, renders the post detail with breadcrumbs (Home → Blog → folders → post title), formatted date, tags, and markdown content.
- `/posts`: legacy archive grid; cards use `heroColor` (or a color token) for a top border and CTA color; supports nested slugs.
- `/posts/...`: legacy post detail view (catch-all).
- `/tests`: palette preview + post grid sandbox (uses `PalettePreview` swatches).
- `/about`: static writeup with caps heading and bilingual intro line; sticky footer enabled.

## Components
- `FireIcon.astro` – 28px stroke flame icon for the nav brand.
- `FolderIcon.astro` / `FileIcon.astro` – Lucide-style SVGs for folder/file rows.
- `PalettePreview.svelte` – Responsive swatch buttons showing name/hex, highlights selection, emits `select` events, shows a selected readout; used on `/tests`.

## Content Inventory (posts, by folder path)
- `dark-souls/sunlight-spear.md` — 2025-09-15 — tags: dark souls 3, routes, bosses — heroColor `#efcc69`.
- `dark-souls/Holy-lothric-knight-sword.md` — 2025-06-06 — tags: dark souls 3, routes, bosses — heroColor `#efcc69`.
- `dark-souls/dark-notes.md` — 2025-03-15 — tags: dark souls 3, routes, bosses — heroColor `#efcc69`.
- `dark-souls-2/dark-souls-3-chaos-builds.md` — 2025-07-23 — tags: dark souls 3, routes, bosses — heroColor `#efcc69`.
- `destiny-2/destiny-2-loadouts.md` — 2025-07-14 — tags: destiny 2, builds, loadouts — heroColor `#31a5e9`.
- `warframe/warframe-prime-hunt.md` — 2025-03-12 — tags: warframe, farming, prime — heroColor unset (falls back to accent).
- `warframe/warframe-mod-testing.md` — 2025-02-28 — tags: warframe, melee, testing — heroColor unset.
- `valheim/anor-londo-build-guide.md` — 2025-02-13 — tags: dark souls 3, routes, bosses — heroColor `#efcc69`.
- `gtfo/estus-and-sunny-d.md` — 2025-01-12 — tags: dark souls 3, routes, bosses — heroColor `#efcc69`.

## How to Extend
- Add a post: place `your-title.md` inside `src/content/blog/<folder>/...` (folders become URL segments). Frontmatter needs `title`, `date`, optional `description`, `tags`, `heroColor`. Filename/paths set the slug; title drives the breadcrumb label for the file itself.
- Folders: nested folders are allowed; each folder path gets its own index page. Folder labels are derived from the segment (hyphens → spaces, title-cased) for breadcrumbs and listings.
- `heroColor` can be a hex or any token used on `/posts` and `/tests` (teal, copper, highlight, cyan, slate, stone, bone, lime, sky, red, orange, yellow, green, magenta, violet, pink, clay, neutral clay, smoke, dusk).
- Nav lives in `src/layouts/BaseLayout.astro`; reuse global classes from `palette.css` (`wrap`, `card-panel`, `ghost-button`, `post-card`, `prose`, `entry-card`) for consistent spacing.
- Themes: toggle cycles dark/light/night and re-applies stored accent. Persist a custom accent by setting `--accent-highlight` and saving it under `epithet-accent`.

## Dev Notes
- `pnpm dev` (or `pnpm astro dev`) to run locally; `pnpm build` → `dist`; `pnpm preview` serves the build; `pnpm run deploy` builds then publishes `dist` with `gh-pages`.
- `CNAME` pins deploys to `razushi.dev`.
- Static site only; no server/runtime dependencies. `olderpalette.css` kept for reference.
- Nix: `nix develop` drops into a shell with node/pnpm/rust/wasm/lighthouse and exports `BUILD_DATE`; `nix fmt` runs alejandra.
