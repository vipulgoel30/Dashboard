import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#05adff",
        "dark-grey": "#4a4a4a",
        "medium-grey": "#8a9094",
        "light-grey": "#e1e1e1",
      },
    },
  },
  plugins: [],
};
export default config;
