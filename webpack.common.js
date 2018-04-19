const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


const config = {
  entry: {
   rise:'./src/universal'
  },
  output: {
    filename: '[name].[hash:16].bundle.js',
    chunkFilename:'[name].[chunkhash].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/',
    libraryTarget: 'umd',
  },
  module:{
    rules:[
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: false,
            collapseWhitespace: true
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test:/\.js?$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, './src/universal')
        ],
        use: [{
            loader: "babel-loader",
            options: { presets: ["react","es2015"] }
        }],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, './src/universal')
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true
            }
          },


        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/universal/index.html',
      title: 'Rise Online',
      inject: true,
      favicon: './src/universal/assets/fac.ico'
    }),
  ],
  resolve:{
    alias:{'@':path.resolve(__dirname,'./src/universal')},
    extensions: ['.js', '.jsx', '.less', '.css', '.json'],
    modules: [path.resolve(__dirname, "./src/universal"), "node_modules"]
  },
  externals:{
    //cdn接口
  }
 
}
module.exports = config
