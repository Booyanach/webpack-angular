var webpack = require('webpack'),
    devMode = process.argv.indexOf('--dev') > -1;

console.log('dev mode running', devMode);

module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    loaders: [
        { test: /\.html$/, loader: "ngtemplate!html" },
        { test: /\.css$/, loader: "style-loader!css-loader" }
    ],
    plugins: devMode ? [] : [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};