# Vestige CODEX

Internal guide to the Vestige site: stack, routing, theming, and how to extend it.

## Stack & Commands
- Astro 5 with Svelte integration (`astro.config.mjs`), TypeScript support via Astro strict config.
- CSS lives in `src/styles/palette.css` (current) and `src/styles/olderpalette.css` (legacy, not imported).
- Package manager: pnpm lockfile present; scripts in `package.json` (`pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm run deploy` to build + `gh-pages`).
- Svelte preprocessing is the Astro default (`svelte.config.js`). Favicon is in `public/favicon.svg`.
- Fonts: `Share Tech` is imported via Google Fonts and applied to headings/caps; body stack stays monospace/sans.
- Optional: Nix flake (`flake.nix`) provides a dev shell (`nix develop`) with Node, pnpm, Rust, wasm tooling, and a CI helper derivation. It references a broader workspace name (`notashelf-dev`), but the shell is usable for this site.

## Directory Map
- `src/layouts/BaseLayout.astro` – Global shell (imports `palette.css`), header/footer, nav, breadcrumb slot, theme toggle script.
- `src/styles/palette.css` – CSS variables + global styles (layout, nav, cards, buttons, blog/post classes). `olderpalette.css` kept for reference.
- `src/components/FireIcon.astro` – Flame SVG used in brand mark.
- `src/components/PalettePreview.svelte` – Swatch selector (used on `/tests`) emitting `select` events.
- `src/content/config.ts` – Content collection schema for `blog`.
- `src/content/blog/*.md` – Markdown posts (frontmatter drives routes/meta).
- `src/pages/` – Astro routes:
  - `index.astro` (`/`) landing hero.
  - `blog/index.astro` (`/blog`) grouped listing.
  - `blog/[slug].astro` post detail.
  - `blog/[category].astro` category listing.
  - `posts/index.astro` alternate archive grid.
  - `posts/[slug].astro` simple detail view.
  - `about.astro`, `tests.astro`.
- `public/` – Static assets (favicon). `dist/` contains build output.
- `.vscode/` – Editor recommendations (Astro extension, dev server launch).

## Content Model (Astro Collections)
- Collection: `blog` (`src/content/config.ts`).
- Frontmatter schema:
  - `title` (string, required)
  - `description` (string, optional)
  - `date` (string → Date)
  - `category` (string, default `"general"`)
  - `tags` (string array, default `[]`)
  - `heroColor` (string, optional; used for card borders/buttons)
- Slugs come from filenames. Files live under `src/content/blog/`; nested folders are allowed and become part of the slug.

## Layout & Global UI (BaseLayout)
- Applies `palette.css` globally. `<html>` starts with `data-theme="dark"`.
- Header nav: brand + links (`/blog`, `/tests`, `/about`, external GitHub). Active link detection checks the current path prefix.
- Brand behavior: on the home page the “Vestige” text is accent-colored and underlined; on hover it accents/underlines; otherwise it uses the base text color. Fire icon stays accent.
- Breadcrumbs: pass an array of `{label, href?}` via props to render in `wrap page-wrap`.
- Footer: copyright year + “Built with Astro + Svelte”.
- Theme toggle button cycles **dark → light → night**:
  - LocalStorage keys: `epithet-theme` (theme), `epithet-accent` (accent color, if set elsewhere).
  - Applies CSS variables `--accent-highlight`, `--accent-teal`, `--accent-copper` to the chosen accent; default is the CSS value of `--accent-highlight`.
  - Sets `data-theme` on `<html>` and `data-theme-state` on the toggle for icon switching (sun/moon/star).
- Vignette effect: `.site-shell` adds gradient overlays at the bottom; JS toggles `vignette-bottom-hidden` when scrolled to the end.
- Hero sections (`.hero`) use a grid with vertical centering; inline padding on hero sections was removed and is managed in CSS.

## Theming & Styles (`src/styles/palette.css`)
- Palette variables:
  - Core hues (`--core-red` … `--core-pink`, `--core-magenta`, `--core-clay`), neutrals (`--neutral-stone`, `--neutral-bone`, `--neutral-clay`, `--neutral-slate`, `--neutral-smoke`, `--neutral-dusk`).
  - Accent rail: `--accent-highlight` feeds `--accent-teal` and `--accent-copper`; `--accent-rose` and `--accent-cyan` available.
  - Layout tokens: radii, transitions, `--card-padding`, `--wrap-width`, vignette sizing.
- Themes:
  - `[data-theme="dark"]`: dark surfaces, light text, light borders, vignette/shadow inverted.
  - `[data-theme="light"]`: light background, dark text, darker shader/shadow.
  - `[data-theme="night"]`: alt-black background with teal-ish accents.
- Utility: `.caps` forces uppercase text and uses Share Tech (used on hero H1s for non-landing pages and category headers).
- Key layout classes:
  - `.site-shell` sets flex column layout, header/footer padding, fixed vignette gradients.
  - `.wrap` width clamp; `.page-wrap` vertical padding; `.card-panel`, `.post-card`, `.ghost-button`, `.tag`, `.tag-list`, `.post-grid`, `.blog-index`, `.category-block` define most cards/lists.
  - Nav styles: `.nav`, `.nav-links`, `.brand`, `.theme-toggle` (icon swap via data attribute, hover states tuned per theme).
  - Typography helpers: `.eyebrow` (uppercase tracking), `.hero`, `.lede`, `.prose` base.
- `olderpalette.css` mirrors the variables but lacks newer vignette/layout tweaks; currently unused but can inform fallback styling.

## Pages & Routing
- `/` (`src/pages/index.astro`): Centered hero card with avatar circle, tagline, and CTA buttons to `/blog` and `/about`.
- `/blog` (`blog/index.astro`): Fetches all posts, groups by `category` (default `general`), sorted newest-first. Categories are normalized case-insensitively, displayed uppercase, and the banner itself links to the category page; each block lists date/title pairs.
- `/blog/[slug]`: Renders a single post with breadcrumbs: Home → Blog → Category → Title. Shows formatted date and tags, then Markdown content via `<Content />`.
- `/blog/[category]`: Static paths generated from existing categories (case-insensitive matching). Displays the category name uppercased and lists posts in that category with dates and titles.
- `/posts`: Alternate archive grid. Each card uses `heroColor` (or a mapped token name) for a 6px top border and CTA button color; shows date, title, description.
- `/posts/[slug]`: Simple prose layout with eyebrow date, tags, content, and a “Back to posts” button.
- `/about`: Static profile/career writeup inside a `card-panel`.
- `/tests`: Sandbox page:
  - PalettePreview components show core and neutral swatches (client:idle hydration).
  - Reuses post cards with tag chips and a “Read” button colored by `heroColor`.

## Components
- `FireIcon.astro`: 28px stroke SVG used in the nav brand.
- `PalettePreview.svelte`: Accepts `swatches: {name, hex}[]`, highlights selection, emits `select` events; styles include hover lift and accent border on selection.

## Content Inventory (current posts)
- `hello-world.md` (2025-07-11) tags: meta, personal; heroColor `#3ccfb0`; category default (general).
- `colour-playbook.md` (2025-07-09) tags: design, palette; heroColor `#c7876e`.
- `games-notes.md` (2025-07-05) tags: games, guides; heroColor `#31a5e9`.
- `warframe-prime-hunt.md` (2025-03-12) category WARFRAME; tags: warframe, farming, prime.
- `warframe-mod-testing.md` (2025-02-28) category WARFRAME; tags: warframe, melee, testing.

## How to Extend
- Add a post: create `src/content/blog/your-title.md` with frontmatter matching the schema. `category` controls grouping; `heroColor` can be a hex or one of the token names (`teal`, `copper`, `cyan`, `slate`, `stone`, etc.) used in archive/test cards.
- Theming tweaks:
  - Change any CSS variable in `palette.css` to retheme surfaces/accents. `--accent-highlight` is the master accent feeding buttons/links.
  - Theme toggle cycles `dark → light → night`; ensure new theme variables live under the matching `[data-theme]` block.
  - Accent persistence key exists (`epithet-accent`); wiring a color picker to call `root.style.setProperty("--accent-highlight", value)` will sync with the toggle script.
- Layout tweaks: shared classes (`wrap`, `card-panel`, `ghost-button`, `post-card`, `prose`) are defined in `palette.css`; reuse them for consistent spacing/radius/shadow.
- Nav updates: edit links in `src/layouts/BaseLayout.astro`; `isActive` checks path prefixes to set `.active`.

## Dev Notes
- Astro content collection is already registered in `.astro/collections` after a build; no manual action needed.
- Build output lives in `dist/`. `deploy` script runs `astro build` then publishes `dist` via `gh-pages`.
- If using the Nix flake, the dev shell exports `BUILD_DATE` and pins toolchains; otherwise rely on Node/pnpm locally.
