const styleLoader = {
  test: /\.(css)$/,
  use: ["style-loader", "css-loader"],
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
// const babelLoader = {
//   test: /\.(js|jsx)$/,
//   exclude: /node_modules/,
//   use: ["babel-loader"],
// };
const imageLoader = {
  test: /\.(png|jpe?g|gif|jp2|webp)$/,
  loader: "file-loader",
  options: {
    name: "images/[name].[ext]",
  },
};const fontsLoader = {
  test: /\.(woff|woff2|ttf|eot)$/,
  use: "file-loader",
};

module.exports = {
  babelLoader,
  styleLoader,
  tsLoader,
  imageLoader,
  fontsLoader,
};
