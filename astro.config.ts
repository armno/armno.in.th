// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';
import netlify from "@astrojs/netlify";
import type { AstroUserConfig } from "astro";

const config: AstroUserConfig = {
  site: "https://armno.in.th",
  integrations: [sitemap(), mdx(), tailwind(), react(), markdoc({
    allowHTML: true
  })]
};
if (process.env.NODE_ENV !== 'production') {
  config.output = 'static';
  config.adapter = netlify();
  config.integrations?.push(keystatic());
}

// https://astro.build/config
export default defineConfig(config);
