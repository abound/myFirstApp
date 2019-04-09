
const webpack = require('webpack'); //访问内置的插件
const path = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin=require('vue-loader/lib/plugin');
  const config = {
    entry: {
        app: './src/js/index.js',
        
      },
    output: {
        filename: 'js/bundle-[hash].js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase:"./public",
        inline:true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {loader:'style-loader'},
            {loader:'css-loader'},
            

          ]
         


        //   use:ExtractTextPlugin.extract({

        //     fallback:"style-loader",
        //     use:[{
        //         loader:'css-loader',
        //         options:{
        //           minimize:true
        //           //css压缩
        //         }
        //     }],
        //     publicPath:"../"
        // })
        },
        {
          test: /\.(jpg|png|jpeg)$/,
          use: [
            'file-loader?limit=1024&name=./img/[name].[ext]'
           

          ]
        },
        {
          test: /\.html$/,
          use: [
            'html-withimg-loader'
          ]
        },
        {
          test:/\.(woff|ttf|svg|eot|xttf|woff2)$/,
          use: 'file-loader?limit=1024&name=./fonts/[name].[ext]'
         },
         {test:/\.vue$/, use:'vue-loader'}
      ]
    },
    // resolve:{
    //   alies:{
    //     "vue$"
    //   }
    // }
    plugins: [  
      new VueLoaderPlugin,
      new HtmlWebpackPlugin({template: './src/index.html',
      minify:{
        removeAttributeQuotes:true,//去除引号
        removeComments:true,//去除注释
        removeEmptyAttributes:true,//去除空属性
        collapseWhitespace:true//去除空格
      }
    
    })
    ]
  };
  
  module.exports = config;
