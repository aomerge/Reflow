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
        test: /\.css$/,  // Para archivos CSS
        use: ['style-loader', 'css-loader', 'postcss-loader'],  // Cargadores que procesan CSS
      },
      {
        test: /\.(js|jsx)$/,  // Procesar archivos JS y JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Utilizar Babel para transpilación
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']  // Presets de Babel para React
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
    port: 8080,  // Puerto en el que se ejecutará el servidor
    // open: true  // Abrir el navegador automáticamente
  }
};

