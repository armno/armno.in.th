import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '700px',
            a: {
              '&:hover': {
                color: colors.green[600],
              }
            },
            color: colors.slate[900],
            code: {
              backgroundColor: colors.slate[200],
              padding: '3px 4px',
              borderRadius: '3px',
              fontWeight: 'normal',
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            },
            blockquote: {
              backgroundColor: colors.slate[100],
              fontWeight: 'normal',
              padding: '0.1rem 2rem'
            },
            hr: {
              width: '40%',
              border: '0',
              height: '6px',
              marginTop: '4rem',
              marginBottom: '4rem',
              backgroundColor: colors.slate[800]
            },
            li: {
              marginTop: '0',
              marginBottom: '0.5rem'
            },
            p: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem'
            },
            img: {
              marginBottom: '0.75rem'
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: 0,
              marginBottom: 0
            }
          },
        },
        lg: {
          css: {
            li: {
              marginTop: '0',
              marginBottom: '0'
            },
            hr: {
              width: '30%',
              marginTop: '4rem',
              marginBottom: '4rem'
            },
          }
        },
      },
    }
  },
  content: [
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md,mdx,mdoc}'
  ],
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'selector'
} satisfies Config

