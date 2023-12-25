import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {

  const allPosts = await getCollection("blog");
  return rss({
    title: `Armno's blog`,
    description: 'Notes from my thoughts and learnings.',
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    stylesheet: '/rss/pretty-feed-v3.xsl'
  });
}
