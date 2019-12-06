module.exports = function(MiniCssExtractPlugin) {
  return {
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
            "postcss-loader"
          ]
        },
      ],
    },
  };
};