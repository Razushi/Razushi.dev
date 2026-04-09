# Vestige

A content-first personal website and blog built with Astro and small Svelte islands.

## Stack

- Astro
- Svelte islands
- pnpm
- Nix flakes for the dev environment
- Astro content collections
- Markdown content with folder-aware blog routing
- Layered `/blog` navigation search with exact, close, and fuzzy fallback states

## Local development

```bash
cd ~/Projects/Vestige
nix develop
pnpm install
pnpm dev
```

## Verification

```bash
nix develop -c pnpm build
```
