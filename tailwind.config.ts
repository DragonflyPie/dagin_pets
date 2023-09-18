import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-button": {
          default: "#00BEFC",
          darken: "#00abe2",
        },
        "light-blue": "#D4F4FF",
        blackish: "#393939",
        "gray-dark": "#18171C",
        "gray-light": "#E4E4E7",
        "gray-form": "#828282",
        "gray-form-heading": "#667085",
        "white-dirty": "#F9FAFB",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        jakarta: ["var(--font-jakarta)"],
        lato: ["var(--font-lato)"],
        osans: ["var(--font-osans)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
