const development = process.env.NODE_ENV === "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const styleLoader = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    development ? "style-loader" : MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [["postcss-preset-env", {}]],
        },
      },
    },
    "sass-loader",
  ],
};

const tsLoader = {
  test: /\.(ts|tsx)$/,
  use: "ts-loader",
  exclude: /node_modules/,
};
const babelLoader = {
  test: /\.m?ts$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: "babel-loader",
  },
};

const imageLoader = {
  test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  type: "asset/resource",
};

const fontsLoader = {
  test: /\.(woff(2)?|eot|ttf|otf|)$/,
  type: "asset/inline",
};
const svgLoader = {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
    },
  ],
};

module.exports = {
  babelLoader,
  styleLoader,
  tsLoader,
  imageLoader,
  fontsLoader,
  svgLoader,
};
