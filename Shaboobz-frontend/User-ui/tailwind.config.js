/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        pinkLight: "#FFC8DD",  // Light Pink
        purpleLight: "#CDB4DB", // Soft Purple
        blueLight: "#BDE0FE",  // Light Blue
        blueSoft: "#A2D2FF",   // Soft Blue
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px"
      }
    },
  },
  plugins: [],
}
