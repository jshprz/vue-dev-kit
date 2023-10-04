/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    media: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};