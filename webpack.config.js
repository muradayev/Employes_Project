const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", './src/index.js'],
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "bundles"),
    filename: "bundled.js"
  },
  mode: "production",
  devtool: "source-map",
  devServer: {
    port: 5050,
    static: {
      directory: path.join(__dirname, "/")
    },
    hot: true,
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
};