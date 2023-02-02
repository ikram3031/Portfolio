/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        maxWidth: '1280px',
      },
      width: {
        '90': '90%',
      },
      maxWidth: {
        'l0p': '1280px',
        '5p' : '200px'
      },
      colors: {
        'blu': '#002f6c',
        'deep': '#000a63',
        'light': '#dfffed'
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'os': ['Oswald', 'sans-serif'],
        'hand': ['Parisienne', 'cursive']
      }
    },
  },
  plugins: [],
}
