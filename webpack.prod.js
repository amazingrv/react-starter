const path = require('path');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

const DIST_DIR = path.join(__dirname, 'dist');
const SERVER_DIR = path.join(__dirname, 'server');

module.exports = merge(common, {
  mode: 'production',
  entry: ['./src/index.js'],
  output: {
    filename: '[name].[contenthash].js',
  },
  devtool: false,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
  plugins: [
    new SimpleProgressWebpackPlugin({
      format: 'expanded',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(SERVER_DIR, 'server.prod.js'), to: DIST_DIR },
        { from: path.join(SERVER_DIR, 'package.json'), to: DIST_DIR },
        { from: path.join(SERVER_DIR, 'package-lock.json'), to: DIST_DIR },
      ],
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  ],
});
