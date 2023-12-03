const config = {
  mode: "production",
  devtool: "source-map",
  entry: {
    index: "./src/js/index.js",
    gallery: "./src/js/gallery.js",
    // contacts: './src/js/contacts.js',
  },
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};

module.exports = config;
