// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import remarkExternalCitations from './src/lib/blog/remark-external-citations.mjs';
import remarkMissingLocalImages from './src/lib/blog/remark-missing-local-images.mjs';
import onedarkTheme from './src/lib/blog/onedark-theme.mjs';
import nixShellHookTransformer from './src/lib/blog/nix-shellhook-transformer.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://razushi.dev',
  integrations: [svelte(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: onedarkTheme,
      transformers: [nixShellHookTransformer],
    },
    remarkPlugins: [remarkMissingLocalImages, remarkExternalCitations],
  },
});
