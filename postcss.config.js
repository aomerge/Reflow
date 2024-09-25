const { getConfig } = require("./src/utils/config");

const colors = require('./src/utils/config.json').color;

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars')({
      variables: colors
    }),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
};
