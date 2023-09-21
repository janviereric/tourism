const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js"),
    form: path.join(__dirname, "src/form/form.js"),
    detailhome: path.join(__dirname, "src/detailhome/detailhome.js"),
    detailform: path.join(__dirname, "src/detailform/detailform.js"),
    editform: path.join(__dirname, "src/editform/editform.js"),
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

        {
          from: "./src/assets/images/home-detail/home-deserts-detail/*",
          to: "assets/images/home-detail/home-deserts-detail/[name][ext]",
        },
        {
          from: "./src/assets/images/home-detail/home-forets-detail/*",
          to: "assets/images/home-detail/home-forets-detail/[name][ext]",
        },
        {
          from: "./src/assets/images/home-detail/home-plages-detail/*",
          to: "assets/images/home-detail/home-plages-detail/[name][ext]",
        },
        {
          from: "./src/assets/images/home-detail/home-villes-detail/*",
          to: "assets/images/home-detail/home-villes-detail/[name][ext]",
        },
        {
          from: "./src/assets/images/form-detail/form-deserts-detail/*",
          to: "assets/images/form-detail/form-deserts-detail/[name][ext]",
        },
        {
          from: "./src/assets/images/form-detail/form-forets-detail/*",
          to: "assets/images/form-detail/form-forets-detail/[name][ext]",
        },
        {
          from: "./src/assets/images/form-detail/form-plages-detail/*",
          to: "assets/images/form-detail/form-plages-detail/[name][ext]",
        },
        {
          from: "./src/assets/images/form-detail/form-villes-detail/*",
          to: "assets/images/form-detail/form-villes-detail/[name][ext]",
        },
        {
          from: "./src/assets/images/home-users/*",
          to: "assets/images/home-users/[name][ext]",
        },
        {
          from: "./src/assets/images/form-users/users-aventure/*",
          to: "assets/images/form-users/users-aventure/[name][ext]",
        },
        {
          from: "./src/assets/images/form-users/users-exploration/*",
          to: "assets/images/form-users/users-exploration/[name][ext]",
        },
        {
          from: "./src/assets/images/form-users/users-visite/*",
          to: "assets/images/form-users/users-visite/[name][ext]",
        },
        {
          from: "./src/assets/images/form-users/users-voyage/*",
          to: "assets/images/form-users/users-voyage/[name][ext]",
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
    new HtmlWebpackPlugin({
      filename: "./detailhome.html",
      template: path.join(__dirname, "./src/detailhome/detailhome.html"),
      chunks: ["detailhome", "header"],
    }),
    new HtmlWebpackPlugin({
      filename: "./detailform.html",
      template: path.join(__dirname, "./src/detailform/detailform.html"),
      chunks: ["detailform", "header"],
    }),
    new HtmlWebpackPlugin({
      filename: "./editform.html",
      template: path.join(__dirname, "./src/editform/editform.html"),
      chunks: ["editform", "header"],
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
