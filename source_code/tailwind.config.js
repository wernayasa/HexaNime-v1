/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {accent: '#ffdd95',},
    },
  },
  plugins: [require('@tailwindcss/typography','flowbite/plugin'),],
}
