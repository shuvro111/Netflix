const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // mode: "jit",
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        netflix: {
          red: '#E50914',
          darkred: '#B81D24',
          white: '#F5F5F1',
          black: '#221F1F',
          gray: '#8c8c8c',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
