const path = require("path");

module.exports = {
  // Tells Webpack which built-in optimizations to use
  // If you leave this out, Webpack will default to 'production'
  mode: "development",

  // Webpack needs to know where to start the bundling process,
  // so we define the Sass file under './Styles' directory
  entry: ["./app/app.js"],

  // This is where we define the path where Webpack will place
  // a bundled JS file. Webpack needs to produce this file,
  // but for our purposes you can ignore it
  output: {
    path: path.resolve(__dirname, "app/test"),

    // Specify the base path for all the styles within your
    // application. This is relative to the output path, so in
    // our case it will be ./app/css
    publicPath: "./css",

    // The name of the output bundle. Path is also relative
    // to the output path, so './app/js'
    filename: "./app.js"
  },
  devServer: {
    host: "localhost",
    port: 3000,
    contentBase: "./app/test",
    index: "index.html"
  }
};
