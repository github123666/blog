<template>  <MarkdownToVue markdown="# 总结逆向miniprogress
## 抓包
+ 1: 存在设备限制,如:只能在移动端打开网页
## 分析
+ 1: 存在F12检测
## 验证过程
+ 微信有几种验证
+ 1：第三方网页
+ 2: 公众号
+ 3: 小程序
> 对第三方网页验证过程有基本的了解  
> 大概是这样一个链接

```
 https://open.weixin.qq.com/connect/qrconnect?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STAT
```
> 点击后跳转到 redirect指定的url上并且携带param参数
> code和state,让后客户端将该code发到服务器中并且,服务器将code携带请求微信服务器,以获取用户的信息,让后服务器返回生成的token,至此已完成
" /> </template>