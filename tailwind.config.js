/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main_green": "#4CE0D7",
        "light_green": "#defaf8",
        "main_black": "262626",
      },
      fontFamily: {
        'poppins_font': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

