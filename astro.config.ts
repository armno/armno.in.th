// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';
import node from "@astrojs/node";
import type { AstroUserConfig } from "astro";

const config: AstroUserConfig = {
  site: "https://armno.in.th",
  integrations: [sitemap(), mdx(), react(), markdoc({
    allowHTML: true
  })],
  vite: {
    plugins: [tailwindcss()],
  }
};
if (process.env.NODE_ENV !== 'production') {
  config.output = 'static';
  config.adapter = node({ mode: 'standalone' });
  config.integrations?.push(keystatic());
}

// https://astro.build/config
export default defineConfig(config);
