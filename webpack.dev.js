const merge = require('webpack-merge');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9060,
    quiet: true,
    contentBase: './dist',
  },
  devtool: 'source-map',
  plugins: [
    new SimpleProgressWebpackPlugin({
      format: 'compact',
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
});
