"use strict";

var _require = require("ipfs/dist/src/path"),
    path = _require.path;

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify")
    }
  },
  devServer: {
    historyApiFallback: true
  }
};