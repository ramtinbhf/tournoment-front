/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sadritennis: [
        'sadritennis',
        {
          fontFeatureSettings: '"cv11", "ss01"'
        },
      ],
    },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1260px',
      },
      extend: {},
    },
    plugins: [],
  }

