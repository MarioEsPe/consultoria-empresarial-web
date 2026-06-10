// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // El dominio principal de Innova Praxis
    site: 'https://www.innovapraxis.mx',

  integrations: [sitemap()]
});