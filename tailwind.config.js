/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Стежить за всіма файлами в папці pages
    './components/**/*.{js,ts,jsx,tsx}',  // Стежить за всіма файлами в папці components
    './app/**/*.{js,ts,jsx,tsx}',  // Для Next.js 13+ зі структурою /app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};