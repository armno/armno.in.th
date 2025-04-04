import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx,mdoc}',
    base: "./src/content/blog"
  }),
  schema:z.object({
    title: z.string(),
    pubDate: z.union([z.string().datetime(), z.date()]),
    url: z.string().optional(),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    language: z.string().optional(),
  })
});

export const collections = {
    blog: blogCollection,
}
