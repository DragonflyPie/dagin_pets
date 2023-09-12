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
        "dark-gray": "#18171C",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        jakarta: ["var(--font-jakarta)"],
        lato: ["var(--font-lato)"],
        osans: ["var(--font-osans)"],
      },
    },
  },
  plugins: [],
};
export default config;
