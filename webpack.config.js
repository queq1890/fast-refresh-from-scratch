const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"],
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
    new WorkerPlugin()
  ],
};
