/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
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
        '1200': '1200px',
        '600': '600px',
        '300': '300px',
        '700': '700px',
        '1000': '1000px',
        '90': '90%',
        '50': '50%'
      },
      height: {
        '40px': '400px',
        '95': '95%',
        '70': '70%',
        '50': '50%'
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
        'light': '#ecf0f3',
        'para': '#42566A',
        'gbg': '#edefee',
        'pale-pink': '#FCE4EC',
        'orange': '#ff5722',
        'orange2': '#FD5D00',
        'light-orange': '#F58544',
        'r': '#ff014f',
        'b': '#1E2125',
        'bl': '#3c3e41',
        'bg': '#ecf0f3',
        'port': '#e5ebee'
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'os': ['Oswald', 'sans-serif'],
        'hand': ['Parisienne', 'cursive'],
        'alata': ['Alata', 'sans-serif'],
      },
      zIndex: {
        '99': '99',
      }
    },
  },
  plugins: [],
}
