/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1366px',
        '3xl': '1440px',
        '4xl': '1536px',
        '5xl': '1600px',
        '6xl': '1920px',
        '7xl': '2048px',
        '8xl': '2560px',
      },
      container: {
        center: true,
        padding: '1rem'
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))'
      },
      fontFamily: {
        'alegreya': ['Alegreya Sans', 'sans-serif'],
        'cairo': ['Cairo Play', 'sans-serif'],
        'amiri-quran': ['Amiri Quran', 'serif'],
      },
    },
  },
  plugins: [],
}