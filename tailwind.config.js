/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fdfdfd",
        primary: "#242424",
        secondary: "#646cff",
      },
    },
  },
  plugins: [],
};
