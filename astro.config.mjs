import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Set the output to server to enable SSR (Server-Side Rendering) 
// and configure the Vercel adapter for hosting.
export default defineConfig({
  output: 'server',
  adapter: vercel(),
});