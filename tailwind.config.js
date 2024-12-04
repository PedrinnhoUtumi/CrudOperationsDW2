/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azulEscuro': '#0e0d21',
        'roxoClaro': '#bb8dff',
        'lavanda': '#f5eeff',
        'azulMedio': '#1c1a3f',
        'verde': '#36b04c',
        'roxo': '#211f48',
      }
    },
  },
  plugins: [],
}