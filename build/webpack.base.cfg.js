const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {

    context: path.resolve(__dirname, '../'),

    entry: {
        app: './src/app.js',
        styles: './assets/styles/app.scss',
        polyfill: "babel-polyfill"
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].min.js',
        publicPath: './'
    },

    module: {
        rules: [{
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                interpolate: true,
            }
        },   {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.s[a|c]ss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            favicon: './assets/icons/favicon.ico',
            template: './index.html',
        }),
        new CopyWebpackPlugin([
            {from: './assets/icons', to: './assets/icons'}
        ])
    ]

}
