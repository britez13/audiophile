/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
        'manrope': ['"Manrope"', 'sans-serif'],
      },
      colors: {
        'black': "#000000",
        'light-black': '#4C4C4C',
        'white': "#FFFFFF",
        'pinkish': '#FBAF85',
        'orangish': '#D87D4A',
        'light-orangish': '#FBAF85',
        'blackish': '#191919',
        'greyish': '#F1F1F1',
        'light-greyish': '#FAFAFA'
      }
  },
  plugins: [],
}

