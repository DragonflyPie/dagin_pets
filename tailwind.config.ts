import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "blue-button": {
          default: "#00BEFC",
          darken: "#00abe2",
        },
        "blue-light": "#D4F4FF",
        "gray-bg": "#696073",
        honeycomb: {
          default: "#DBA810",
          light: "#FFF6DC",
          dark: "#c5970e",
        },

        blackish: "#393939",
        "gray-dark": "#18171C",
        "gray-light": "#E4E4E7",
        "gray-form": "#828282",
        "gray-form-heading": "#667085",
        "white-dirty": "#F9FAFB",
        "red-error": "#ff3333",
      },
      fontFamily: {
        geometria: ["var(--font-geometria)"],
        futura: ["var(--font-futura)"],
        raleway: ["var(--font-raleway)"],
      },
      backgroundImage: {
        "dog-pattern": "url('/images/dog-pattern.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
