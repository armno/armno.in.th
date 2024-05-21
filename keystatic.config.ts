// keystatic.config.ts
import { config, fields, collection, component, singleton } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components'

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
            { label: 'English', value: 'en', },
            { label: 'Thai', value: 'th', }
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
          publicPath: '/images',
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/content/blog/',
              publicPath: '../../../content/blog/',
            }
          },
          components: {
            warningMessage: wrapper({
              label: 'Warning Message',
              schema: {
                title: fields.text({
                  label: 'Title'
                }),
              },
            })
          }
        })
      },
    }),
  },
  singletons: {
    uses: singleton({
      entryLayout: 'content',
      label: 'Uses',
      path: 'src/pages/uses/',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description' }),
        pubDate: fields.text({ label: 'Publish Date' }),
        layout: fields.text({ label: 'Layout' }),
        language: fields.select({
          label: 'Language',
          defaultValue: 'en',
          options: [
            { label: 'English', value: 'en', },
            { label: 'Thai', value: 'th', }
          ]
        }),
        thumbnail: fields.image({
          label: 'Thumbnail',
          directory: 'public/images/uses/content',
          publicPath: '/images/uses/content',
        }),
        content: fields.mdx({
          label: 'Content',
          options:{
            image: {
              directory: 'src/pages/uses/content/',
              publicPath: '../../pages/uses/content/',
            }
          }
        }),
      }
    })
  }
});
