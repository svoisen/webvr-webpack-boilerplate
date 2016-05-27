var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webvr-polyfill/build/webvr-polyfill',
        './src/Main.js'
    ],
    output: {path: __dirname, filename: 'bundle.js'},
    cache: true,
    debug: true,
    devtool: 'source-map',
    module: {
        noParse: /node_modules\/webvr-polyfill\/build/,
        loaders: [
            {
                test: /\.glsl$/,
                loader: 'webpack-glsl',
                include: [
                    path.resolve(__dirname, 'src', 'shaders')
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ],
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'THREE': 'three',
            'THREE.VRControls': 'imports?THREE=three!exports?THREE.VRControls!../node_modules/three/examples/js/controls/VRControls',
            'THREE.VREffect': 'imports?THREE=three!exports?THREE.VREffect!../node_modules/three/examples/js/effects/VREffect',
            'WebVRPolyfill': 'webvr-polyfill/build/webvr-polyfill',
            'WebVRManager': 'exports?WebVRManager!webvr-boilerplate'
        })
    ]
};
