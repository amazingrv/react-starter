const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const ProgressPlugin = require('progress-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    output: {
        publicPath: '/',
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            },
            {
                test: /\.css$/,
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
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    performance: {
        hints: false,
    },
    stats: {
        colors: true,
    },
    plugins: [
        new ESLintPlugin({ fix: true, extensions: ['js', 'jsx'] }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            scriptLoading: 'defer',
            favicon: './src/assets/favicon.ico',
            minify: false,
        }),
        new MomentLocalesPlugin(),
        new LodashModuleReplacementPlugin(),
        new ProgressPlugin(),
    ],
};
