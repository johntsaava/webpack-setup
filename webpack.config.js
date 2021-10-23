const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.STATS || "disabled",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
};
