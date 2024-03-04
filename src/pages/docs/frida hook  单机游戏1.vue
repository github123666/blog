<template>  <MarkdownToVue markdown="# 登山赛车2国服版
tip:一些逻辑写在java层所以才成功,so层没思路
```
 起因在某app里面下载试玩了一下,抓包的时候发现抓不了(安卓5)???，看来是做了效验,直接trustme + burp 看有个加密的包,直接算法助手('冲冲冲👿')无果,就有接下来这些,庆幸没加固
```
## 准备工具 
>1.frida-server包 \
>2.模拟器一台
## 准备环境
>1.模拟器中安装frida_server(区分64位和32位) \
>2.安装python \
>3.python中安装frida(最好和安卓模拟器一样版本) ,frida-tools
![version](./img/version.png)
## 启动 ! ! !
1. 打开安卓模拟器目录顶部输入cmd并回车
![cmd](./img/openCmd.png)  
1. 执行以下命令将下好的frida-server包导入到模拟器中
> adb push frida包的路径 /data/local/tmp 或/data/local/temp 
> 
1. 进入shell,cd到刚刚放frida-server的目录下
> adb shell \  
> cd /data/local/tmp  \  
> chmod 777 firda-server包名 \  
> ./frida-server包名称   # 开启服务
>
1. 重复一步骤打开cmd,进行端口转发
> adb forward tcp:27042 tcp:27042
>
1. 打开pycharm 输入frida-ps -u 命令行会打印很多进程信息(基本配置已完成)
## 反编译
直接无脑使用工具 
> apk_tool + dex2 + jd-gui \
## 开始Hook 👊
1. 打开pycharm 
```
import sys

import frida


def on_message(message, data):
    print(message)


# 查找usb设备并附加目标进程
device = frida.get_remote_device()
pid = device.spawn([&quot;com.fingersoft.hcr2&quot;])  # 因为要在启动期间hook，所以要先执行device.spawn(),该方法有一个参数是进程名
session = device.attach(pid)
with open('./hook_pay_api/index.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
script = session.create_script(js_code)  # 在目标进程创建脚本
script.on(&quot;message&quot;, on_message)  # 注册消息回调
print('111')
device.resume(pid)
script.load()  # 加载创建好的js脚本
print('111111')

sys.stdin.read()  # 读取系统输入

```
> 自己内部对bs64进行二次加密,原本到这里应该是结束了 \
> 抱着玩的态度,对该游戏进行嘿嘿嘿🖕
### Hook mainActivety 😠
- 查看调用支付时会请求的接口
- 直接调用支付成功的回调 👿
### coin gems vehicle
- 无脑改
### 不同接口解密算法也不同
解密失败
![dectypt](./img/decrypt.png)
## 最后
还是太**菜**😭,so层代码看不懂" /> </template>