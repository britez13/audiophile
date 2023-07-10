/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        // backgroundImage: "url(/assets/)"
      },
      fontFamily: {
        'manrope': ['"Manrope"', 'sans-serif'],
      },
      colors: {
        'black': "#000000",
        'white': "#FFFFFF",
        'pinkish': '#FBAF85',
        'orangish': '#D87D4A',
        'blackish': '#101010',
        'greyish': '#F1F1F1',
        'light-greyish': '#FAFAFA'
      }
  },
  plugins: [],
}

