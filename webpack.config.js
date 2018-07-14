var path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    compress: false,
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
