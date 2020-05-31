const webpack = require('webpack');
module.exports = {
  entry: {
    smoothScroll: ['smooth-scroll'],
    scrollreveal:['scrollreveal']
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/build/dll",
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]_[hash]",
      path: __dirname + "/build/dll/manifest.json"
    })
  ],
  mode: "production"
};
