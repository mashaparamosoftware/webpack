const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',

    output:{
        clean: true
    },

    module: {
        rules: [
            {
               test: /\.html$/,
               loader: 'html-loader',
               options: {
                sources: false
               }
               //expresion regular
               
            },

            {
                test:  /\.css$/,
                exclude: /style.css$/,
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /style.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'Mi webpack App',
            // filename: 'index.html'
            template:  './src/index.html'  //es el archivo por el cual quiero que se base esto
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets/"}
            ],
        }),
    ],

}

