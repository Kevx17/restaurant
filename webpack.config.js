const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getRandomValues } = require('crypto');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'src/index.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
 module: {
   rules: [
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
   ],
 },
};