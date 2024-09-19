/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffbe0b",
        light: "#f8fafc",
        dark: "#0f172a",
        secondary: "#4379F2",
      },
    },
  },
  plugins: [],
};
