const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  mode: "production",
  entry: ["./app/scss/style.scss"],
  output: {
    path: path.resolve(__dirname, "app/test"),
    publicPath: "./css",
    filename: "./app.js"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => () => [
                postcssPresetEnv({
                  browsers: [">1%"]
                }),
                require("cssnano")()
              ]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "../images",
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../../dist/style.min.css"
    })
  ]
};
