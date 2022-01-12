const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: path.resolve(__dirname, './src/pages/Landing Page.html'), // шаблон
            filename: 'Landing Page.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
    ],
}