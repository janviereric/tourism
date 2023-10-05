const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js"),
    form: path.join(__dirname, "src/form/form.js"),
    homedetail: path.join(__dirname, "src/homedetail/homedetail.js"),
    formdetail: path.join(__dirname, "src/formdetail/formdetail.js"),
    userdetail: path.join(__dirname, "src/userdetail/userdetail.js"),
    formedit: path.join(__dirname, "src/formedit/formedit.js"),
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
        {
          from: "./src/assets/images/form-small/form-deserts-small/*",
          to: "assets/images/form-small/form-deserts-small/[name][ext]",
        },
        {
          from: "./src/assets/images/form-small/form-forets-small/*",
          to: "assets/images/form-small/form-forets-small/[name][ext]",
        },
        {
          from: "./src/assets/images/form-small/form-plages-small/*",
          to: "assets/images/form-small/form-plages-small/[name][ext]",
        },
        {
          from: "./src/assets/images/form-small/form-villes-small/*",
          to: "assets/images/form-small/form-villes-small/[name][ext]",
        },
        {
          from: "./src/assets/images/form-users-small/form-users-aventure-small/*",
          to: "assets/images/form-users-small/form-users-aventure-small/[name][ext]",
        },
        {
          from: "./src/assets/images/form-users-small/form-users-exploration-small/*",
          to: "assets/images/form-users-small/form-users-exploration-small/[name][ext]",
        },
        {
          from: "./src/assets/images/form-users-small/form-users-visite-small/*",
          to: "assets/images/form-users-small/form-users-visite-small/[name][ext]",
        },
        {
          from: "./src/assets/images/form-users-small/form-users-voyage-small/*",
          to: "assets/images/form-users-small/form-users-voyage-small/[name][ext]",
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
      filename: "./homedetail.html",
      template: path.join(__dirname, "./src/homedetail/homedetail.html"),
      chunks: ["homedetail", "header"],
    }),
    new HtmlWebpackPlugin({
      filename: "./formdetail.html",
      template: path.join(__dirname, "./src/formdetail/formdetail.html"),
      chunks: ["formdetail", "header"],
    }),
    new HtmlWebpackPlugin({
      filename: "./userdetail.html",
      template: path.join(__dirname, "./src/userdetail/userdetail.html"),
      chunks: ["userdetail", "header"],
    }),
    new HtmlWebpackPlugin({
      filename: "./formedit.html",
      template: path.join(__dirname, "./src/formedit/formedit.html"),
      chunks: ["formedit", "header"],
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
