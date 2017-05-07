var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
             {
                  test: /\.(jpe?g|png|gif|svg)$/i,
                  use: [
                         {
                           loader: 'file-loader',
                           options: {
                               name:'[name].[ext]',
                               outputPath: 'img/'
                           }
                         }]

              }
        ]
    },
    plugins: [
        extractPlugin
    ]
};