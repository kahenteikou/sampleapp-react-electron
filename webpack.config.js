const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js'
    },
  
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx']
    },
  
    devtool: 'source-map',
    devServer:{
        port:3000,
        historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/
        },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] }, 
      ]
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename:"./index.html"
      })
    ]
  };