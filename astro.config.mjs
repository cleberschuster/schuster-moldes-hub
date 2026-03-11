import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://schustermoldesdigitais.com.br', // Example final URL, user can change if needed
  integrations: [tailwind(), sitemap()],
});
