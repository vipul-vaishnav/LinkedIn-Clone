/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        primary: '#0077b5',
      },
    },
  },
  plugins: [],
};
