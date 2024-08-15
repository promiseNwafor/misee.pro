import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: '#0a0a0a',
      //   primary: '#ff3e00',
      //   secondary: '#ffffff',
      //   accent: '#40E0D0',
      // },
      // fontFamily: {
      //   sans: ['Montserrat', 'sans-serif'],
      //   display: ['Playfair Display', 'serif'],
      // },
      colors: {
        background: '#0F172A',
        primary: '#38BDF8',
        secondary: '#94A3B8',
        accent: '#F472B6',
      },
    },
  },
  plugins: [],
};
export default config;
