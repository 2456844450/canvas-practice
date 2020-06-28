const path = require('path')


const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test',
      filename: 'index.html',
      template: 'public/index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{loader:'url-loader',
        options: {
          limit: 50,
          outputPath: 'assets/'
        }}]
    },
    {
      test: /\.(htm|html)$/i,
      use: ['html-loader']
    }]
  }
}