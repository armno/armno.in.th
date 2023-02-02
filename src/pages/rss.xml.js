import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: `Armno's blog`,
    description: 'Notes from my thoughts and learnings.',
    site: import.meta.env.SITE,
    items: await pagesGlobToRssItems(
      import.meta.glob('./**/*.mdx')
    ),
    stylesheet: '/rss/pretty-feed-v3.xsl'
  });
}
