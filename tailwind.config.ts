import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: colors.slate[900],
            code: {
              backgroundColor: colors.slate[200],
              padding: '0 4px',
              borderRadius: '3px',
              fontWeight: 'normal',
              fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            },
            blockquote: {
              backgroundColor: colors.slate[100],
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
        }
      },
    }
  },
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md}'
  ],
  plugins: [
    require('@tailwindcss/typography')
  ]
} satisfies Config

