const path = require("path");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: "./dist",
  },
};
