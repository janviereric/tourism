const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js"),
    form: path.join(__dirname, "src/form/form.js"),
    header: path.join(__dirname, "src/assets/javascripts/header.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/images/*",
          to: "assets/images/[name][ext]",
        },
        {
          from: "./src/assets/images/home-photos/animaux/*",
          to: "assets/images/home-photos/animaux/[name][ext]",
        },
        {
          from: "./src/assets/images/home-photos/iles/*",
          to: "assets/images/home-photos/iles/[name][ext]",
        },
        {
          from: "./src/assets/images/home-photos/natures/*",
          to: "assets/images/home-photos/natures/[name][ext]",
        },
        {
          from: "./src/assets/images/home-photos/neutres/*",
          to: "assets/images/home-photos/neutres/[name][ext]",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: path.join(__dirname, "./src/index.html"),
      chunks: ["main", "header"],
    }),
    new HtmlWebpackPlugin({
      filename: "./form.html",
      template: path.join(__dirname, "./src/form/form.html"),
      chunks: ["form", "header"],
    }),
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: true,
    static: path.resolve(__dirname, "./dist"),
    watchFiles: ["./src/**"],
    port: 4000,
    hot: true,
  },
};
