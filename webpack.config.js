const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const webpack = require('webpack');
// const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output:{
    filename:'app.[contenthash:8].js',
    path:__dirname+'/dist'
  },
  module: {
    rules:[
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: '../',
          //   }
          // },
          'css-loader',
          // 将scss文件转换成css文件
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico)$/,
        // url-loader 依赖于 file-loader
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[contenthash:8].[ext]',
          outputPath:'images'
        },
      },
      {
        //处理HTML里面的图片(引入src里面的图片，交给url-loader处理)
        test: /\.html/,
        loader: 'html-loader'
      },
      {
        exclude: /\.(html|css|js|scss|jpeg|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[contenthash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: false
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'css/app.[contenthash:8].css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    // new webpack.DllReferencePlugin({
    //   manifest: __dirname + '/build/dll/manifest.json'
    // }),
    // new AddAssetHtmlWebpackPlugin([
    //   {
    //     filepath: './build/dll/*.js',
    //     outputPath:'./js/',
    //     hash: true,
    //     publicPath:'./js/'
    //   }
    // ])
  ],
  // mode: 'production',
  mode: "development",
  devServer: {
    contentBase: __dirname + '/build',
    port: 3000,
    compress: true,
    // host:'172.16.3.173',
    // host: '192.168.1.101'
  },
  devtool: 'eval-source-map',
};
