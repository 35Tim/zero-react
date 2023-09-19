const { merge } = require('webpack-merge');

const base = require('./webpack.base.js');
const proxy = require('../config/proxy.js');

module.exports = merge(base, {
  mode: 'development', // 开发模式
  devServer: {
    open: false, // 编译完自动打开浏览器
    port: 8080, // 端口号
    proxy,
    static: ['template'],
    compress: true,
    historyApiFallback: true,
    client: {
      logging: 'error',
      progress: true,
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/, // 排除 node_modules 目录
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              // 它可以帮助我们将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或运行时环境添加所需的 polyfill；
              // 也包括会自动帮助我们添加 autoprefixer
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },
});
