import { defineConfig } from 'astro/config';

// Basic Astro configuration. We define a static output so
// Netlify can easily serve the built files without requiring
// a server runtime. If you later add the official Netlify adapter
// (`@astrojs/netlify`) you can update this file accordingly.
export default defineConfig({
  output: 'static',
});