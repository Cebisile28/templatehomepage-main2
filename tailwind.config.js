/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFDF4F',
          dark: '#D4AF37',
        },
        silver: {
          DEFAULT: '#C0C0C0',
          light: '#E6E6E6',
          dark: '#A9A9A9',
        },
      },
    },
  },
  plugins: [],
};