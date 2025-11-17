import colors from 'tailwindcss/colors';
export default {
  theme: {
    extend: {
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
              padding: '2px 4px',
              borderRadius: '3px',
              fontWeight: 'normal',
              '.dark &': {
                backgroundColor: colors.slate[700],
              },
            },
            'code::before': {
              content: ''
            },
             'code::after': {
               content: ''
             },
             pre: {
               backgroundColor: colors.slate[100],
               padding: '0.5rem 1rem',
               borderRadius: '3px',
               fontWeight: 'normal',
             },
             'pre code': {
               backgroundColor: 'transparent',
               padding: 0,
               fontWeight: 'normal',
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
            hr: {
              width: '30%',
              marginTop: '4rem',
              marginBottom: '4rem'
            },
          }
        },
      },
    },
  },
}
