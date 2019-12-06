module.exports = function() {
  return {
    devServer: {
      publicPath: '/bundle',
      contentBase: './assets',
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
  };
};