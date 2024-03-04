const { defineConfig } = require('@vue/cli-service')
const { options } = require('marked')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './',
  // assetsDir:'static',
  // 关闭名称带hash
  filenameHashing: false,
  //代理
  devServer: {
    proxy: {
      "api": {
        target: 'http://127.0.0.1:8000/',
        changOrigin: true,
        pathRewrite: {
          '^/api': "/"
        }
      }
    }
  },
})
