/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Add all relevant paths here
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),  // Enable daisyUI as a plugin
  ],
}
