const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  devtool: false,
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    removeAvailableModules: false,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new TerserPlugin({ minify: TerserPlugin.swcMinify, parallel: false }),
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cssoMinify,
        parallel: false,
      }),
    ],
  },
  plugins: [
    new ESLintPlugin({ extensions: ['js', 'jsx'], quiet: false }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  ],
});
