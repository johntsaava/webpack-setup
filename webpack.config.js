const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");

const common = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    debug: true,
                    useBuiltIns: "usage",
                    corejs: "3.19",
                  },
                ],
                [
                  "@babel/preset-react",
                  {
                    runtime: "automatic",
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
};

module.exports = [
  {
    ...common,
    target: "node",
    entry: "./src/server/index.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "server.js",
    },
    plugins: [
      new NodemonPlugin({
        watch: path.resolve(__dirname, "./dist"),
      }),
    ],
  },
  {
    ...common,
    entry: "./src/client/index.js",
    output: {
      path: path.resolve(__dirname, "./dist/assets"),
      filename: "client.js",
    },
  },
];
