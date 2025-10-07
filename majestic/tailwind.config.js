/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          veneer: ['Veneer', 'sans-serif'],       // pour navigation, texte normal
          veneerThree: ['VeneerThree', 'sans-serif'],
          pacifico: ['Pacifico', 'cursive'],
          Mistrully: ['Mistrully', 'sans-serif'] 
        }
    },
  },
  plugins: [],
}
