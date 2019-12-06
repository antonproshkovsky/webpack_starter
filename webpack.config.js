const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const babel = require('./webpack/babel');
const scss = require('./webpack/scss');
const devserver = require('./webpack/devserver');
const images = require('./webpack/images');

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
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new HtmlWebpackPlugin({
        template: PATHS.assets + '/index.html',
        minify: {
          collapseWhitespace: true
        }
      })
    ]
  },
  babel(),
  scss(MiniCssExtractPlugin),
  images()
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