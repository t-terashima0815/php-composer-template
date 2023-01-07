const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.(scss|sass|css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    entry: './main/ts/main.ts',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        })
    ],
    output: {
        filename: 'js/index.js',
        path: path.join(__dirname, './public')
    }
}
