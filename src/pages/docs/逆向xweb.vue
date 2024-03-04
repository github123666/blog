<template>  <MarkdownToVue markdown="## 具体过程
目标:cdr
## 抓包
### 抓移动端的包(无果)。
       
`第一次尝试`   
准备环境:夜神模拟器,安卓7,xposed,trustme  
电脑环境:burp   
在这个环境下wx能接受到信息,但是打不开小程序(应该是证书不行,浏览器也打不开)。这里就换了一种思路用安卓5(安卓5默认是认可系统证书)  
`第二次尝试`   
安卓5环境,cdr应该做了限制,可以抓到另一个网页的包,但是目标网页抓取不到(头大)  
### 抓pc端包
准备环境:burp   
win + r 输入 inetcpl.cpl 连接 -> 局域网设置,填写目标burp代理的端口
![img](./img/proxy_evn.png)
打开xweb就可以抓到目标网页
## pc班级任务访问不了" /> </template>