/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,ts}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF7FE',
        deep: '#1C1040',
        coral: '#E8197A',
        'coral-light': '#FF5CAA',
        'coral-dark': '#B8005C',
        muted: '#7B6E9E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
