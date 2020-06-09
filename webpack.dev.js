const merge = require('webpack-merge');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const common = require('./webpack.common');

const config = merge(common, {
  mode: 'development',
  devServer: {
    port: 9060,
    quiet: true,
  },
  devtool: 'source-map',
  plugins: [
    new SimpleProgressWebpackPlugin({
      format: 'minimal',
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
});

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return config;
};
