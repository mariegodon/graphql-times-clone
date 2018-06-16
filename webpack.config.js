var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      }
    ]
  },
  devServer: {
    proxy: {
      '/graphql': 'http://localhost:3001'
    }
  }
}