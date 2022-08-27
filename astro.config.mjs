// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  site: 'https://armno.in.th',
  integrations: [sitemap(), mdx(),
  NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main',
      },
      collections: [
        // Content collections
        {
          name: 'blog',
          label: 'Blog posts',
          folder: 'src/pages/blog',
          fields: [
            {
              name: 'title',
              widget: 'string',
              label: 'Post title'
            }
          ]
        }
      ],
    },
  }),
  ]
});