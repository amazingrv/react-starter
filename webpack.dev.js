const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    main: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client',
      './src/index.js',
    ],
  },
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new SimpleProgressWebpackPlugin({
      format: 'minimal',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
});
