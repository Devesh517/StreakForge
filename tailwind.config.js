/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F1A",
        surface: "#141B2E",
        surface2: "#1C2438",
        flame: "#FFB130",
        flameSoft: "#FFD98A",
        proof: "#5EEAD4",
        miss: "#FB6F5C",
        paper: "#F4F1EA",
        muted: "#8B93A7",
        line: "#232B42",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};