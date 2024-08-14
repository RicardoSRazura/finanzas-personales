/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#153448',
        'secondary': '#FFF2E1',
        'cafe': '#948979',
        'bar': '#3C5B6F'
        
      },
    },
  },
  plugins: [],
};
