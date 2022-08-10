const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");
const {
  babelLoader,
  styleLoader,
  tsLoader,
  imageLoader,
  fontsLoader,
  svgLoader,
} = require("./webpack/loaders");

const production = process.env.NODE_ENV === "production";

module.exports = {
  entry: { myAppName: path.resolve(__dirname, "./src/index.tsx") },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: production ? "[name].[contenthash].bundle.js" : "[name].js",
    chunkFilename: production ? "[name].[contenthash].bundle.js" : "[name].js",
    assetModuleFilename: "assets/[contenthash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      babelLoader,
      styleLoader,
      tsLoader,
      imageLoader,
      svgLoader,
      fontsLoader,
    ],
  },

  resolve: {
    alias: {
      assets: resolve(__dirname, "./src/assets"),
      components: resolve(__dirname, "./src/components"),
    },
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx", ".css"],
  },
  plugins: [
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
    hot: true,
  },
  performance: {
    hints: false,
  },
  mode: production ? "production" : "development",
};
