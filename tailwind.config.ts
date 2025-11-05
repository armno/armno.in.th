import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  theme: {
    fontFamily: {
      serif: [
        '"Source Serif 4"',
        'IBM Plex Sans Thai Looped',
        '"Adjusted Georgia Fallback"',
        ...defaultTheme.fontFamily.serif,
      ]
    },
    extend: {
      content: {
        external: 'url(/images/icons/external.svg)',
      },
    }
  },
  content: [
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md,mdx,mdoc}'
  ],
  darkMode: 'selector'
} satisfies Config

