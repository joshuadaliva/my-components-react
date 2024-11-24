/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['MyFont', 'sans-serif'], // Add your custom font here
      },

    },
  },
  plugins: [],
}