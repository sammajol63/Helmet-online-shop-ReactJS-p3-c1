/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'baackgroundLanding' : "url('./src/components/jonny-mckenna-4igCpD-Lnfg-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}