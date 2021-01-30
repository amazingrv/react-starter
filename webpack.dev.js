const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    target: 'browserslist',
    output: {
        filename: '[name].js',
    },
    devtool: 'source-map',
    devServer: {
        dev: {
            publicPath: '/',
        },
        port: 9060,
        open: true,
        historyApiFallback: true,
        host: 'localhost',
    },
    infrastructureLogging: {
        level: 'none',
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
    ],
});
