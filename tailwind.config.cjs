const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              textUnderlineOffset: '1px'
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
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'
  ],
  plugins: [
    require('@tailwindcss/typography')
  ]
}