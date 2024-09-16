/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFEB00",
        light: " #f8fafc",
        secondary: "#4379F2",
      },
    },
  },
  plugins: [],
};
