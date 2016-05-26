var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/Main.js',
    output: {path: __dirname, filename: 'bundle.js'},
    cache: true,
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.glsl/,
                loader: 'webpack-glsl'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
