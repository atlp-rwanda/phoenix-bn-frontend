require('dotenv/config.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { API_URL } = process.env;

module.exports = {
  entry: './src/index.js',
  target: 'web',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: false,
          },
        }],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: './src/style/fonts/Sansation_Bold_Italic.ttf',
            outputPath: 'fonts/',
          },
        }],
      }],
  },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images/', to: './images/' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env': { API_URL: JSON.stringify(API_URL) },
    }),
  ],
};
