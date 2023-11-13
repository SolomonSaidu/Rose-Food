/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        '1/3':'33.33333%',
        '2/3':'66.66667%'
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

