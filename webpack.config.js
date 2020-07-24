const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


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
          process.env.MODE_ENV === 'production' ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          } : 'style-loader',
          'css-loader',
          // 将scss文件转换成css文件
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico)$/,
        // url-loader 依赖于 file-loader
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[contenthash:8].[ext]',
              outputPath:'images'
            }
          },
          {
            loader: 'image-webpack-loader',// 压缩图片
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ],
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
      favicon: "./src/images/favicon.ico",
      template: "./src/index.html",
      minify: false
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'css/app.[contenthash:8].css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],

  devServer: {
    contentBase: __dirname + '/build',
    port: 3000,
    compress: true,
  },
  devtool: process.env.MODE_ENV === 'production' ? false : 'inline-source-map',
};
