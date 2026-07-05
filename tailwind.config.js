/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tajawal", "Cairo", "Segoe UI", "Arial", "sans-serif"],
      },
      colors: {
        neon: {
          blue: "#00d4ff",
          deep: "#03172d",
          soft: "#7ddfff",
        },
      },
      boxShadow: {
        neon: "0 0 36px rgba(0, 212, 255, 0.24)",
        "neon-sm": "0 0 18px rgba(0, 212, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
