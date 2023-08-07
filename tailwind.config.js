/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        JetBrains: ["JetBrains Mono", "monospace"],
        Vanguard: ["Vanguard"],
      },
      colors: {
        Black: "rgb(23, 15, 30)",
        White: "#e5e1e6",
        Blue: "rgb(64, 221, 255)",
        Violet: "rgb(124, 127, 255)",
        Yellow: "rgb(255, 215, 77)",
        Pink: "rgb(234, 74, 170)",
        DarkViolet: "rgb(14, 3, 24)",
        Green: "rgb(180, 255, 57)",
        MenuBG: "rgb(23, 15, 30)",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
