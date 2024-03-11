/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#2f2105",
        secondary: "#f6ebda",
        accent: "#ffcb7c",
        accent2: "#ff902a",
        foreground: "#7e7d7a",
      },
      backgroundImage: {
        coffeeImage: "url('../../assets/images/bg-aboutus.png')",
        newsletterImage: "url('../../assets/images/bg-newsletter.png')",
      },
    },
  },
  plugins: [],
}

