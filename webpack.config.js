const path = require("path");
// Watch Plugin. It watches all the files other than the index.js and triggers the browserSync

const WatchExternalFilesPlugin = require("webpack-watch-external-files-plugin");
// BrowserSync plugin to reload browser
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },

  watch: true,
  plugins: [
    new WatchExternalFilesPlugin({
      files: ["./dist/**/*.html"],
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served

      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] },
    }),
  ],
  mode: "development",
  target: "web",
};
