import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
      fontFamily: {
        RampartOne: ["var(--font-RampartOne)"],
      },
    extend: {
      keyframes: {
        fadedown: {
          "0%": { opacity: "0", transform: "translateY(-30px) scale(0.9)" },
          "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
          },
        },
        fadeup: {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.9)" },
          "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
          },
        },
      },
      animation: {
        fadedown: "fadedown 0.5s",
        fadeup: "fadeup 0.5s",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
export default config;
