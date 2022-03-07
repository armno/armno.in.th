const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              textUnderlineOffset: '1px',
              '&:hover': {
                color: '#009350'
              }
            }
          }
        }
      },
      fontFamily: {
        sans: ['Sarabun', ...defaultTheme.fontFamily.sans]
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