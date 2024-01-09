<template><div><h1>登山赛车2国服版</h1>
<p>tip:一些逻辑写在java层所以才成功,so层没思路
<code>起因在某app里面下载试玩了一下,抓包的时候发现抓不了(安卓5)???，看来是做了效验,直接trustme + burp 看有个加密的包,直接算法助手('冲冲冲👿')无果,就有接下来这些,庆幸没加固</code></p>
<h2>准备工具</h2>
<blockquote>
<p>1.frida-server包 \
2.模拟器一台</p>
</blockquote>
<h2>准备环境</h2>
<blockquote>
<p>1.模拟器中安装frida_server(区分64位和32位) \
2.安装python \
3.python中安装frida(最好和安卓模拟器一样版本) ,frida-tools
<img alt="version" src="./static/version.png" /></p>
</blockquote>
<h2>启动 ! ! !</h2>
<ol>
<li>打开安卓模拟器目录顶部输入cmd并回车
<img alt="cmd" src="./static/openCmd.png" />  </li>
<li>执行以下命令将下好的frida-server包导入到模拟器中<blockquote>
<p>adb push frida包的路径 /data/local/tmp 或/data/local/temp 
</p>
</blockquote>
</li>
<li>进入shell,cd到刚刚放frida-server的目录下<blockquote>
<p>adb shell \<br />
cd /data/local/tmp  \<br />
chmod 777 firda-server包名 \<br />
./frida-server包名称   # 开启服务
</p>
</blockquote>
</li>
<li>重复一步骤打开cmd,进行端口转发<blockquote>
<p>adb forward tcp:27042 tcp:27042
</p>
</blockquote>
</li>
<li>打开pycharm 输入frida-ps -u 命令行会打印很多进程信息(基本配置已完成)</li>
</ol>
<h2>反编译</h2>
<p>直接无脑使用工具 </p>
<blockquote>
<p>apk_tool + dex2 + jd-gui \</p>
</blockquote>
<h2>开始Hook 👊</h2>
<ol>
<li>打开pycharm 
```
import sys</li>
</ol>
<p>import frida</p>
<p>def on_message(message, data):
    print(message)</p>
<h1>查找usb设备并附加目标进程</h1>
<p>device = frida.get_remote_device()
pid = device.spawn(["com.fingersoft.hcr2"])  # 因为要在启动期间hook，所以要先执行device.spawn(),该方法有一个参数是进程名
session = device.attach(pid)
with open('./hook_pay_api/index.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
script = session.create_script(js_code)  # 在目标进程创建脚本
script.on("message", on_message)  # 注册消息回调
print('111')
device.resume(pid)
script.load()  # 加载创建好的js脚本
print('111111')</p>
<p>sys.stdin.read()  # 读取系统输入</p>
<p>```</p>
<blockquote>
<p>自己内部对bs64进行二次加密,原本到这里应该是结束了 \
抱着玩的态度,对该游戏进行嘿嘿嘿🖕</p>
</blockquote>
<h3>Hook mainActivety 😠</h3>
<ul>
<li>查看调用支付时会请求的接口</li>
<li>直接调用支付成功的回调 👿</li>
</ul>
<h3>coin gems vehicle</h3>
<ul>
<li>无脑改</li>
</ul>
<h3>不同接口解密算法也不同</h3>
<p>解密失败
<img alt="dectypt" src="./static/decrypt.png" /></p>
<h2>最后</h2>
<p>还是太<strong>菜</strong>😭,so层代码看不懂</p></div></template>