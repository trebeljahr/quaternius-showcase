const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      'my-color': '#334155',
      'leva-white': '#fefefe',
      'leva-dark': '#181c20',
    },
    fontFamily: {
      leva: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Roboto Mono', 'monospace'],
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
