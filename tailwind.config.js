/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "media418" : "418px"
      },
      backgroundImage:{
        'Testimonial-background' : "url('./images/photo.png')",
      }
    },
  },
  plugins: [],
}

