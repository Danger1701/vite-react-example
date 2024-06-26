/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c059b",
        secondary: "#1e293b",
        accent: "#cb5930"
      }
    },
  },
  plugins: [],
}