import rss from '@astrojs/rss';

export const get = () => rss({
  title: `Armno's blog`,
  description: 'Notes from my thoughts and learnings.',
  site: import.meta.env.SITE,
  items: import.meta.glob('./**/*.md'),
  stylesheet: '/rss/pretty-feed-v3.xsl'
});
