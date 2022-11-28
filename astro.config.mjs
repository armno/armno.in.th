// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://armno.in.th',
  integrations: [sitemap(), mdx(), tailwind()]
});