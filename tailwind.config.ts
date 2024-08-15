import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        primary: '#38BDF8',
        secondary: '#94A3B8',
        accent: '#F472B6',
      },
      backgroundImage: {
        photo: "url('/me-bg.jpeg')",
      },
    },
  },
  plugins: [],
}
export default config
