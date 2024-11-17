const path = require('path');

module.exports = {
  entry:{
    app: './app/src/app.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),  
    filename: '[name].bundle.js' 
  },
  mode: 'development',  // Modo de desarrollo
  module: {
    rules: [
      {
        test: /\.(png|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,  // Para archivos CSS
        use: ['style-loader', 'css-loader', 'postcss-loader'],  
      },
      {
        test: /\.(js|jsx)$/,  
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']  
          }
        },
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
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  // Servir archivos estáticos desde 'public'
    },
    compress: true,
    port: 8080,    
  }
};

