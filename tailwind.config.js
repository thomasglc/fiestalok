/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF7',
        deep: '#1A1A1A',
        coral: '#E8593A',
        'coral-light': '#F07355',
        'coral-dark': '#C44828',
        muted: '#6B6B6B',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
