// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { defineConfig, type AstroUserConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';

import netlify from "@astrojs/netlify";

// https://astro.build/config
const config: AstroUserConfig = {
  site: "https://armno.in.th",
  integrations: [
    sitemap(),
    mdx(),
    tailwind(),
    react(),
    markdoc(),
  ],
};

if (process.env.NODE_ENV !== 'production') {
  config.output = 'hybrid';
  config.adapter = netlify();
  config.integrations?.push(keystatic());
}

export default defineConfig(config);
