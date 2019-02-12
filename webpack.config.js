const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'self'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }, 
      { test: /robotoLight.ttf$/, loader: 'file-loader?prefix=fonts/' },
      { test: /ubuntuMedium.ttf$/, loader: 'file-loader?prefix=fonts/' }
    ]
  },
  plugins: [new CleanPlugin(['dist']), htmlPlugin],
  devServer: {
    historyApiFallback: true
  }
}
