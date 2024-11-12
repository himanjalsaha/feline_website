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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'helvetica-neue': ['var(--font-helvetica-neue)', 'Arial', 'sans-serif'],
        'helvetica-neue-bold': ['var(--font-helvetica-neue-bold)', 'Arial', 'sans-serif'],
        'asgard': ['var(--font-asgard)', 'var(--font-helvetica-neue)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
