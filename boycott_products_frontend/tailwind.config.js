/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'red-to-green-rtl-gradient': 'linear-gradient(92.86deg, #E4312B 1.91%, #149954 97.78%)',
      },
    },
  },
  plugins: [],
}

