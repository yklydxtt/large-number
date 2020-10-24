const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'none',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            include: /\.min\.js/,
          })],
    },
    entry: {
        'large-number': './src/index.js',
        'large-number.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'largeNumber',
        libraryTarget: 'commonjs',
        libraryExport: 'default'
    }
}