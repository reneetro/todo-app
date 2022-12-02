/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'nerko-one': ['Nerko One', 'cursive']
      },
      colors: {
        'purple': '#301A4B',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
