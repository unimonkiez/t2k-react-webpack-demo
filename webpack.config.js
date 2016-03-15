var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require("path");

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      // 'webpack/hot/only-dev-server',
      'webpack/hot/dev-server',
      "./src/main.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
