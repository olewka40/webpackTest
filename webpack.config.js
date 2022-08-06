const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("path");
const {
  babelLoader,
  styleLoader,
  tsLoader,
  imageLoader,
  fontsLoader,
} = require("./webpack/loaders");

const production = process.env.NODE_ENV === "production";

module.exports = {
  entry: { myAppName: path.resolve(__dirname, "./src/index.tsx") },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: production ? "[name].[contenthash].js" : "[name].js",
  },
  module: {
    rules: [babelLoader, styleLoader, tsLoader, imageLoader, fontsLoader],
  },

  resolve: {
    alias: {
      assets: resolve(__dirname, "assets"),
    },
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx", ".css"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack & React",
      template: "./src/index.html",
      favicon: "./public/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: production ? "[name].[contenthash].css" : "[name].css",
    }),
  ],
  devServer: {
    port: 3001,
    hot: false,
  },
  mode: production ? "production" : "development",
};
