module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },
  output: {
    path: `${__dirname }/dist`,
    filename: "bundle.js"
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".ts"],
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        
      },
    ],
  },
};