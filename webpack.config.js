module.exports = {
    entry: './js/app.js',
    output: {
        filename: './dist/js/app-bundle.js'
    },
    module: {
        loaders: [ {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: [ 'es2015' ]
            }
        }, {
            test: /\.html$/,
            loader: 'raw'
        } ]
    }
};
