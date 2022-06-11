/** @type {import('tailwindcss').Config}*/

module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F28F3B",
          secondary: "#9CAFB7",
          accent: "#764134",
          neutral: "#B0FE76",
          "base-100": "#ffffff",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}