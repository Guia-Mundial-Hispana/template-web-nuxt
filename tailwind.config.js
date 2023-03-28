/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      neutral: {
        white: 'white',
        black: 'black',
        transparent: 'transparent'
      },
      primary: {
        100: '#FF2625',
        50: '#FF8585',
        10: '#FFE9E9'
      },
      gray: {
        100: '#ECECEC',
        10: '#d9d9d9'
      }
    }
  },
  plugins: [],
}
