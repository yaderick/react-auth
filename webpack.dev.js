const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack.common')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack')
const path = require('path')





const config = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    compress: true,
    historyApiFallback: true,
    port: 9090,
    open: true,
    // inline:false, //开启iframe
    hot: true,
    overlay: true,
    noInfo:false //开启打包信息
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
   
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              modules: false, //开启css modules 模式
              localIdentName: '[name]__[local]--[hash:base64:5]',
              getLocalIdent: (context, localIdentName, localName, options) => {
                return 'whatever_random_class_name'
              },
              camelCase: true,
              sourceMap: true,
            }
          }
        ]
      },
      
    ],
  },

}


module.exports = webpackMerge(webpackCommon, config)