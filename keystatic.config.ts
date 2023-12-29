// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  ui: {
    brand: {
      name: 'Armno.in.th'
    }
  },
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      entryLayout: 'content',
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/blog/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.text({ label: 'Publish Date' }),
        description: fields.text({ label: 'Description' }),
        language: fields.select({
          label: 'Language',
          defaultValue: 'en',
          options: [
            {
              label: 'English',
              value: 'en',
            },
            {
              label: 'Thai',
              value: 'th',
            }
          ]
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value
          }
        ),
        thumbnail: fields.image({
          label: 'Thumbnail',
          directory: 'public/images',
          publicPath: '/public/images',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/content/blog',
            publicPath: '../../../content/blog/',
          },
        }),
      },
    }),
  },
});
