<template>  <MarkdownToVue markdown="## 相同点
都是充当中间人来  
系统代理和vpn处于osi模型不同层，系统代理一般在osi模型最上层,vpn一般处于网络层,vpn能够拦截大部分包。系统代理就像某些水课考试一样(睁一只眼闭一只眼),app可以绕过系统代理直接与网关通信。
## 关于系统证书和用户证书
**证书链**  
证书颁发过程:  
当web服务器向颁发证书机构(中间机构用来协助根证书机构颁发)请求一个证书时,该证书机构会将中间证书和用户证书一同给用户,由此产生了一个证书链。    
> root CA -> middle CA ->  user CA   

浏览器会一层一层检测颁发机构是否信任,不信任则会将https标红
## 通信过程
> 先进行3次握手 -> 协商加密 -> 服务器发送CA和公钥 -> 客户端公钥加密会话加密密钥 -> 服务器私钥解密 -> 客户端发送数据

## 用户证书 系统证书
在android 5 app信任用户证书   
android 7(包括)+以上不在信任用户证书
## 抓包
有部分app不适配android 5(闪退),此时要将用户证书转成系统证书,导入系统证书列表中。" /> </template>