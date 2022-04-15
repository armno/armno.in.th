const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: colors.slate[900],
            a: {
              textUnderlineOffset: '1px',
              '&:hover': {
                color: colors.green[600],
              }
            },
            code: {
              backgroundColor: colors.slate[100],
              padding: '0 4px',
              borderRadius: '3px',
              fontWeight: 'normal'
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
              marginBottom: '0'
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
      a: {
        textUnderlineOffset: '1px',
        '&:hover': {
          color: colors.green[600],
        }
      },
      fontFamily: {
        headings: ['IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans],
        sans: ['Sarabun', ...defaultTheme.fontFamily.sans]
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
}
