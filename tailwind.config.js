/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      inset: {
        50: '50%',
      },
      margin: {
        m12: '-3rem',
      },
      padding: {
        '18.5r': '18.5rem',
      },
      maxWidth: {
        10: '10rem',
      },
      height: {
        '60vh': '60vh',
      },
      maxHeight: {
        '25r': '25rem',
      },
      borderRadius: {
        xl: '1.5rem',
      },
      scale: {
        101: '1.01',
      },
      translate: {
        m50: '-50%',
      },
      fontSize: {
        '1.2r': '1.2rem',
      },
    },
  },
  variants: {
    boxShadow: ['active', 'focus'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
