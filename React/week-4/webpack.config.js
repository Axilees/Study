const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: ["file-loader", {
                    loader: "image-webpack-loader",
                    options: {byrassOnDebug: true, disable: true}
                }]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin()]
};
