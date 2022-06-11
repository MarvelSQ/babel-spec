/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /(t|j)sx?$/,
        loader: "babel-loader",
      },
    ],
  },
};
