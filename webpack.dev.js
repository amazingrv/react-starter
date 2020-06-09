const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    main: [
      'webpack-hot-middleware/client?quiet=true&path=/__webpack_hmr&timeout=20000',
      './src/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'source-map',
  plugins: [
    new SimpleProgressWebpackPlugin({
      format: 'minimal',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
