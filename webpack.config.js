/* global module */

module.exports = {
  mode: "development",
  entry: "./examples/index.js",
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
};
