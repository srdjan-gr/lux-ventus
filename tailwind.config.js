/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light_green": "#defaf8",
        "main_black": "#262626",
        "gradient_blue": "#8BA9F4",

        'theme_green': {
          DEFAULT: '#4CE0D7',
          50: '#E8FBFA',
          100: '#D7F8F6',
          200: '#B4F2EE',
          300: '#92ECE7',
          400: '#6FE6DF',
          500: '#4CE0D7',
          600: '#24D0C5',
          700: '#1CA098',
          800: '#13706B',
          900: '#0B403D',
          950: '#072926'
        },
      },
      fontFamily: {
        'poppins_font': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

