const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js',
        style: './src/style.js',
        date: './src/js/date-dropdown.js',
        dateru: './src/js/date-dropdown-ru.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Form Elements',
            template: path.resolve(__dirname, './src/pages/Form Elements.html'), // шаблон
            filename: 'Form Elements.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'Cards',
            template: path.resolve(__dirname, './src/pages/Cards.html'), // шаблон
            filename: 'Cards.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'Landing Page',
            template: path.resolve(__dirname, './src/pages/Landing Page.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'Registration',
            template: path.resolve(__dirname, './src/pages/Registration.html'), // шаблон
            filename: 'Registration.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'Room details',
            template: path.resolve(__dirname, './src/pages/Room details.html'), // шаблон
            filename: 'Room details.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'Searh room',
            template: path.resolve(__dirname, './src/pages/Searh room.html'), // шаблон
            filename: 'Searh room.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'Sign in',
            template: path.resolve(__dirname, './src/pages/Sign in.html'), // шаблон
            filename: 'Sign in.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: "[path][name].[ext]"
                    }
                }]


            },
            {
                test: /\.(eot|woff|ttf|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: "[path][name].[ext]"
                    }
                }]
            }



        ],
    },



}