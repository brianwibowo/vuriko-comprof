import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://vuriko.id';

export default defineConfig({
  site,
  trailingSlash: 'always',
});
