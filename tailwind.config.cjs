/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      container: {
        maxWidth: '1200px',
      },
      width: {
        '90': '90%',
        '95': '95%',
        '70': '70%',
      },
      maxWidth: {
        'l0p': '1280px',
        '5p' : '200px'
      },
      colors: {
        'blu': '#001b48',
        'blup': '#3E5884',
        'bluto': '#018abe',
        'bluform':'#02457a',
        'deep': '#1D344A',
        'light': '#dfffed',
        'para': '#42566A',
        'gbg': '#edefee',
        'pale-pink': '#FCE4EC',
        'orange': '#ff5722'
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'os': ['Oswald', 'sans-serif'],
        'hand': ['Parisienne', 'cursive'],
        'alata': ['Alata', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
