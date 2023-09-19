module.exports = {
  '/api': {
    target: '',
    pathRewrite: { '^/api': '' },
    changeOrigin: true, // 控制服务器接收到的请求头中 host 字段的值
    secure: false,
  },
};
