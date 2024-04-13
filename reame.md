<!-- for vite: -->
npm create vite@latest
<!-- Tailwindcss -->
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
    <!-- tailwind.config.js -->
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    <!-- index.css -->
    @tailwind base;
    @tailwind components;
    @tailwind utilities;