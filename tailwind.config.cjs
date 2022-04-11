const defaultTheme = require('tailwindcss/defaultTheme');

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
                color: '#009350',
              }
            },
          },
        },
      },
      fontFamily: {
        headings: ['IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans],
        sans: ['Sarabun', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        base: ['1.125rem', '1.5']
      }
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
