/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    screens: {
      base: '0px',
      sm: "480px",
      md: "768px",
      lg: '976px',
      xl: "1440px",
      xxl: "1600px"
    },
    extend: {
      colors: {
        footercolor: "#528F2D",
         grayColor: '#FAFAFA'
      },
    },
    fontFamily: {
      secondary: "Cherry Swash",
    },
  },
  plugins: [],
}