/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./Assets/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "Arial", "sans-serif"],
      },
      colors: {
        glow: {
          pink: "#f81f7f",
          light: "#fff2f8",
          soft: "#f7d9e8",
        },
      },
      boxShadow: {
        glow: "0 12px 24px rgba(0, 0, 0, 0.16)",
        soft: "0 8px 18px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
}