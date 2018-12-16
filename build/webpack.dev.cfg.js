const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.cfg.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {

    mode: 'development',

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].min.js',
        publicPath: '/'
    },

    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        port: 8080
    },

    plugins: [
        new CleanWebpackPlugin('dist', {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

})
