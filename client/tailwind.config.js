/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Belanosima': ['Belanosima', 'sans-serif'],
        'Quicksand': ['Quicksand','sans-serif'],
        'MavenPro': ['Maven Pro','sans-serif'],
      },
      dropShadow: {
        'custom': '0 5px 5px rgba(249,113,24,0.45)',
        'custom1': '0 5px 5px rgba(255,255,255,0.25)',
        'custom2': '0 0px 5px rgba(255,255,255,0.15)',
      }
      

    },
  },
  plugins: [],
}

