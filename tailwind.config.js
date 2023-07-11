/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['PlayfairDisplay-Regular'],
        'playfair-bold': ['PlayfairDisplay-ExtraBold'],
        'gilroy': ['Gilroy-Regular'],
        'gilroy-bold': ['Gilroy-ExtraBold'],
      },
      colors: {
        black: '#2B2847',
        white: '#F1EEED',
        primary: {
          100: '#4D509E',
          200: '#796BA2',
          300: '#4E819B',
          400: '#B6BA9D',
        },
        secondary: {
          100: '#ED6960',
          200: '#EEA4A7',
          300: '#60EAC0',
          400: '#A6EDBC',
        }
      },
      screens: {
        'sm': '393px',
        'md': '428px',
      }
    },
  },
  plugins: [],
};
