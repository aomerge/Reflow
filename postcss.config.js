const { getConfig } = require("./packages/utils/config.json");

const colors = require('./packages/utils/config.json').color;

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
