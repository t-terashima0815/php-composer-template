const path = require('path')


module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{
            test: /'.tsx?$/,
            use: [
                { loader: 'ts-loader' }
            ]
        }]
    },
    entry: './main/main.ts',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, './public/js')
    }
}
