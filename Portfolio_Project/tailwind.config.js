/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          primary: '#111827',
          secondary: '#E5E7EB',
        },
      },
    },
    plugins: [],
  },
};
