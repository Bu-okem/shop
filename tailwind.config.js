/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        'familjen-grotesk': ['Familjen Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
