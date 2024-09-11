/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Update this path to match your project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img": "url('/tailwind-sandbox-starter/assets/img/img2.jpg')",
      },
    },
  },
  plugins: [],
};
