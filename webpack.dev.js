const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    port: 9060,
    publicPath: '/',
    quiet: true,
  },
  plugins: [
    new SimpleProgressWebpackPlugin({
      format: 'minimal',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
});
