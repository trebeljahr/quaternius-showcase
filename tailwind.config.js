const colors = require('tailwindcss/colors')

delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

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
      'leva-medium': '#535760',
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
