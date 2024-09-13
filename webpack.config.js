const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/setup.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'setup.js',
    library: 'unix',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.css$/,  
        use: ['style-loader', 'css-loader', 'postcss-loader'],  
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },  
};
