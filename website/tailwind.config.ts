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
        navy: '#1B2B4B',
        terracotta: '#C17A56',
        cream: '#F9F7F4',
        charcoal: '#1A1A1A',
        warmgray: '#6B6B6B',
        lightgray: '#E8E6E3',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        editorial: '72rem',
      },
      lineHeight: {
        editorial: '1.75',
      },
    },
  },
  plugins: [],
}
export default config
