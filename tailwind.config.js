/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {},
    colors: {
      "light-red": "hsl(0, 100%, 67%)",
      "orange-yellow": "hsl(39, 100%, 56%)",
      "green-teal": "hsl(166, 100%, 37%)",
      "cobal-blue": "hsl(234, 85%, 45%)",
      "white": "hsl(0, 0%, 100%)",
      "pale-blue": "hsl(221, 100%, 96%)",
      "light-lavender":"hsl(241, 100%, 89%)",
      "dark-gray-blue": "hsl(224, 30%, 27%)",
      "l-s-blue": "hsl(252, 100%, 67%)",
      "l-r-blue": "hsl(241, 81%, 54%)",
      "violet-blue": "hsla(256, 72%, 46%, 1)",
      "persian-blue": "hsla(241, 72%, 46%, 0)"
    },
    fontFamily: {
      "body": "'Hanken Grotesk', sans-serif"
    }
  },
  plugins: [],
}

