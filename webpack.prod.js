const webpackMerge = require('webpack-merge');
const webpackCommon=require('./webpack.common')
const path =require('path')
//tree shaking && uglify
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//从js中提取css到单独文件而非再head标签的style中
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//清除dist文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
//webpack4中有bug被MiniCssExtractPlugin替换
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//css的压缩插件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



const config={
  mode: 'production',
 
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
      //   js: {
      //     test: /\.js$/,
      //     name: "commons",
      //     chunks: "all",
      //     minChunks: 7,
      //   },
      // css: {
      //     test: /\.(css|less)$/,
      //     name: "commons",
      //     chunks: "all",
      //     minChunks: 2,
      //   },
      
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendors",
        chunks: "all"
    }
      }
    },
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module:{
    rules:[
      {
        test:/\.(css|less)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, './src/universal')
        ],
        use :[ 
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
      chunkFilename: "css/[id].css"
    }),
    
    
  ]
}

module.exports=webpackMerge(webpackCommon,config)