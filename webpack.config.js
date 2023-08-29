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
          from: "./src/assets/images/home-photos/home-deserts/*",
          to: "assets/images/home-photos/home-deserts/[name][ext]",
        },
        {
          from: "./src/assets/images/home-photos/home-forets/*",
          to: "assets/images/home-photos/home-forets/[name][ext]",
        },
        {
          from: "./src/assets/images/home-photos/home-plages/*",
          to: "assets/images/home-photos/home-plages/[name][ext]",
        },
        {
          from: "./src/assets/images/home-photos/home-villes/*",
          to: "assets/images/home-photos/home-villes/[name][ext]",
        },
        {
          from: "./src/assets/images/form-photos/form-deserts/*",
          to: "assets/images/form-photos/form-deserts/[name][ext]",
        },
        {
          from: "./src/assets/images/form-photos/form-forets/*",
          to: "assets/images/form-photos/form-forets/[name][ext]",
        },
        {
          from: "./src/assets/images/form-photos/form-plages/*",
          to: "assets/images/form-photos/form-plages/[name][ext]",
        },
        {
          from: "./src/assets/images/form-photos/form-villes/*",
          to: "assets/images/form-photos/form-villes/[name][ext]",
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
