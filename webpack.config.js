const path = require('path');

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist/bundle.js'
      },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['../node_modules/babel-preset-env']
                }
            }
            }
        ]
    }
};