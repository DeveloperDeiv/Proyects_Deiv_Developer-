/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Esto asegura que Tailwind procese tus archivos en src
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Roboto Mono"', 'monospace'], // Agrega la fuente monoespaciada
      },
    },
  },
  plugins: [],
};
