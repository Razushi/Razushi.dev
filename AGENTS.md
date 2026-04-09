# Vestige

Personal site at razushi.dev. Astro + Svelte + TypeScript. Deployed to GitHub Pages via CNAME.

## Stack
- Astro (static only, no SSR)
- Svelte for interactive components
- TypeScript strict mode
- pnpm

## Purpose
Descriptor/contact page primarily. Blog functionality for markdown-based posts/guides, file-based routing via Astro content collections.

## Conventions
- PascalCase for components (.astro and .svelte)
- CSS custom properties from tokens.css, no Tailwind, no CSS-in-JS
- No inline styles
- One component per file

## Do not
- Add SSR adapters
- Add UI frameworks beyond Svelte
- Add unnecessary dependencies
- Use em-dashes in generated copy

## Agent rules
- Never replace the whole design system unless asked
- Never add animation libraries unless asked
- Prefer Astro-native features before adding dependencies
- Keep CSS tokenised
- Keep components small and single-purpose
- Avoid client-side JavaScript unless necessary
- Preserve markdown-first blog workflow
- Before large edits, present a plan
- After edits, summarise files changed and why