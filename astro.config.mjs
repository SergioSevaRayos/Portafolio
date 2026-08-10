// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()],

  fonts: [
    // cssVariable uses a "-face" suffix, distinct from the Tailwind `--font-*`
    // theme tokens defined in global.css, so the two mechanisms don't both
    // write to the same custom property on :root.
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-display-face',
      weights: [600, 700],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-body-face',
      weights: [400, 500, 600],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono-face',
      weights: [500],
    },
  ],

  compressHTML: true,
});
