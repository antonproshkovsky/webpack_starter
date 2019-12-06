const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babel = require('./webpack/babel');
const scss = require('./webpack/scss');
const devserver = require('./webpack/devserver');

const PATHS = {
  assets: path.join(__dirname, 'assets'),
  bundle: path.join(__dirname, 'assets/bundle'),
};

const common = merge([
  {
    entry: {
      index: [PATHS.assets + '/js/index.js', PATHS.assets + '/scss/index.scss'],
    },
    output: {
      path: PATHS.bundle,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    ]
  },
  babel(),
  scss(MiniCssExtractPlugin)
]);

module.exports = function (env, argv) {
  if (argv.mode === 'production') {
    return merge([
      common
    ]);
  }
  if (argv.mode === 'development') {
    return merge([
      common,
      devserver(),
    ]);
  }
};