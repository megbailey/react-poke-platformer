const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    devtool: "none",
    devServer: {
        port: port,
        hot: true,
        open: true
    },
    entry: "./src/index.js",
    output: {
        filename: 'game.bundle.js',
        path: path.resolve(__dirname, "build")
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],        
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: [ 'url-loader', 'file-loader' ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
      ],
}