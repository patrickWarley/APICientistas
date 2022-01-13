const path= require('path');
const HtmlWebpackPlugin =  require("html-webpack-plugin");

module.exports= {
    mode : "development",
    entry : "./index.js",
    output: {
        path : path.resolve(__dirname, "dist"),
        filename : 'blunder.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader : "babel-loader"
            }
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template : "./index.html",
            filename : "./index.html"     
    })
    ]   
};