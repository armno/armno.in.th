const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#000',
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
            }
          },
        },
      },
      fontFamily: {
        headings: ['IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans],
        sans: ['Sarabun', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        base: ['1.125rem', '1.5'],
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
