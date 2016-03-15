var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require("path");

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      "./src/main.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-webpack-demo'
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react', 'react-hmre']
      }
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0']
      }
    }]
  }
};
