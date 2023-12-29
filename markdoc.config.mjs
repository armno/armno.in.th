import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

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
  },
});
