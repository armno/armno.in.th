// keystatic.config.ts
import { config, fields, collection, component, singleton } from '@keystatic/core';
import { block, wrapper } from '@keystatic/core/content-components'
import VideoPlayer from '@components/VideoPlayer';
import { Clapperboard, FileWarning } from 'lucide-react';

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
      columns: ['title', 'pubDate', 'language'],
      entryLayout: 'content',
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/blog/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.datetime({
          label: 'Publish Date (UTC)',
          defaultValue: {
            kind: 'now'
          }
      }),
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
              description: 'Display a warning message',
              icon: <FileWarning />,
              schema: {
                title: fields.text({
                  label: 'Title'
                }),
              },
            }),
            video: block({
              label: 'Video',
              description: 'Upload a video',
              icon: <Clapperboard />,
              ContentView: (props) => {
                const { src, ...otherProps} = props.value;
                if (!src) {
                  return <></>;
                }

                const blob = new Blob([src.data], { type: 'video/mp4' });
                const url = URL.createObjectURL(blob);
                return (
                  <VideoPlayer src={url} {...otherProps} />
                )
              },
              schema: {
                src: fields.file({
                  label: 'Video file',
                  description: 'Select a video file',
                  directory: 'public/videos/',
                  publicPath: '/videos/',
                }),
                controls: fields.checkbox({
                  label: 'Controls',
                  description: 'Show video controls',
                  defaultValue: false
                }),
                autoPlay: fields.checkbox({
                  label: 'Autoplay',
                  description: 'Enable autoplay (will mute the video)',
                  defaultValue: false
                }),
                loop: fields.checkbox({
                  label: 'Loop',
                  description: 'Enable looping',
                  defaultValue: false
                })
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
