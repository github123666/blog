const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath: process.env.NODE_ENV === 'production'
  ? './'
  : './',
  // assetsDir:'static',
  //代理
  devServer:{
    proxy: {
      "api":{
        target:'http://127.0.0.1:8000/',
        changOrigin:true,
        pathRewrite:{
          '^/api':"/"
        }
      }
    }
  }
})
