module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '11/12': '94.5%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
