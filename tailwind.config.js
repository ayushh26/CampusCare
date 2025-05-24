/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include ts/tsx if you're using TypeScript
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2E5AAC", // Educational Blue
        bgDark: "#0d1117", // Dark background
        bgLight: "#EEEEEE", // Light background
      },
    },
  },
  plugins: [],
};
