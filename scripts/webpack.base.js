const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const common = require('../config/common.js');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    clean: true, // 在生成文件之前清空 output 目录
    path: path.resolve(__dirname, '../dist'), // 打包后的代码放在dist目录下
    filename: '[name].[hash:8].js', // 打包的文件名
  },
  module: {
    rules: [
      {
        test: /.(jsx?)|(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 如果大于或等于 25kb, 则按照相应的文件名和路径打包图片; 如果小于 25kb, 则将图片转成 base64 格式的字符串。
            maxSize: 25 * 1024, // 25kb
          },
        },
        generator: {
          // imgs: 图片打包的文件夹
          // [name].[ext]: 设定图片按照本来的文件名和扩展名打包, 不用进行额外编码
          // [hash:8]: 一个项目中如果两个文件夹中的图片重名, 打包图片就会被覆盖, 加上hash值的前八位作为图片名, 可以避免重名
          filename: 'images/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:8][ext][query]',
        },
      },
    ],
  },
  resolve: {
    // 配置 extensions 来告诉 webpack 在没有书写后缀时, 以什么样的顺序去寻找文件
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'], // 如果项目中只有 tsx 或 ts 可以将其写在最前面

    // 创建 import 的别名, 来确保模块引入变得更简单（可以直接导入别名, 而不需要写长长的地址）
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new WebpackBar(), // 显示打包进度
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: common.title,
      template: path.resolve(__dirname, '../src/index.html'), // 使用自定义模板
      favicon: path.resolve(__dirname, common.favicon),
    }),
  ],
};
