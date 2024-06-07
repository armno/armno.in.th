import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
  tags: {
    picture: {
      render: component('./src/components/Picture.astro'),
      attributes: {
        // Markdoc requires type defs for each attribute.
        // These should mirror the `Props` type of the component
        // you are rendering.
        // See Markdoc's documentation on defining attributes
        // https://markdoc.dev/docs/attributes#defining-attributes
        src: { type: String },
        alt: { type: String },
        caption: { type: String, required: false },
        width: { type: Number },
        height: { type: Number },
        full: { type: Boolean, required: false },
        extraClass: { type: String, required: false },
      },
    },
    warningMessage: {
      render: component('./src/components/WarningMessage.astro'),
      attributes: {
        title: { type: String, required: false },
      }
    },
    video: {
      render: component('./src/components/VideoPlayer.tsx'),
      attributes: {
        slug: {
          type: String,
          required: true
        },
        src: {
          type: String,
          required: true
        },
        controls: {
          type: Boolean,
          required: false
        },
        autoPlay: {
          type: Boolean,
          required: false
        },
        loop: {
          type: Boolean,
          required: false
        },
      }
    },
  },
  extends: [
    shiki()
  ]
});
