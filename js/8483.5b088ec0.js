"use strict";(self["webpackChunkdiary"]=self["webpackChunkdiary"]||[]).push([[8483],{8483:function(n,e,r){r.r(e),r.d(e,{default:function(){return o}});var s=function(){var n=this,e=n._self._c;return e("MarkdownToVue",{attrs:{markdown:"# 登山赛车2国服版\ntip:一些逻辑写在java层所以才成功,so层没思路\n```\n 起因在某app里面下载试玩了一下,抓包的时候发现抓不了(安卓5)???，看来是做了效验,直接trustme + burp 看有个加密的包,直接算法助手('冲冲冲👿')无果,就有接下来这些,庆幸没加固\n```\n## 准备工具 \n>1.frida-server包 \\\n>2.模拟器一台\n## 准备环境\n>1.模拟器中安装frida_server(区分64位和32位) \\\n>2.安装python \\\n>3.python中安装frida(最好和安卓模拟器一样版本) ,frida-tools\n![version](./img/version.png)\n## 启动 ! ! !\n1. 打开安卓模拟器目录顶部输入cmd并回车\n![cmd](./img/openCmd.png)  \n1. 执行以下命令将下好的frida-server包导入到模拟器中\n> adb push frida包的路径 /data/local/tmp 或/data/local/temp \n> \n1. 进入shell,cd到刚刚放frida-server的目录下\n> adb shell \\  \n> cd /data/local/tmp  \\  \n> chmod 777 firda-server包名 \\  \n> ./frida-server包名称   # 开启服务\n>\n1. 重复一步骤打开cmd,进行端口转发\n> adb forward tcp:27042 tcp:27042\n>\n1. 打开pycharm 输入frida-ps -u 命令行会打印很多进程信息(基本配置已完成)\n## 反编译\n直接无脑使用工具 \n> apk_tool + dex2 + jd-gui \\\n## 开始Hook 👊\n1. 打开pycharm \n```\nimport sys\n\nimport frida\n\n\ndef on_message(message, data):\n    print(message)\n\n\n# 查找usb设备并附加目标进程\ndevice = frida.get_remote_device()\npid = device.spawn([\"com.fingersoft.hcr2\"])  # 因为要在启动期间hook，所以要先执行device.spawn(),该方法有一个参数是进程名\nsession = device.attach(pid)\nwith open('./hook_pay_api/index.js', 'r', encoding='utf-8') as f:\n    js_code = f.read()\nscript = session.create_script(js_code)  # 在目标进程创建脚本\nscript.on(\"message\", on_message)  # 注册消息回调\nprint('111')\ndevice.resume(pid)\nscript.load()  # 加载创建好的js脚本\nprint('111111')\n\nsys.stdin.read()  # 读取系统输入\n\n```\n> 自己内部对bs64进行二次加密,原本到这里应该是结束了 \\\n> 抱着玩的态度,对该游戏进行嘿嘿嘿🖕\n### Hook mainActivety 😠\n- 查看调用支付时会请求的接口\n- 直接调用支付成功的回调 👿\n### coin gems vehicle\n- 无脑改\n### 不同接口解密算法也不同\n解密失败\n![dectypt](./img/decrypt.png)\n## 最后\n还是太**菜**😭,so层代码看不懂"}})},a=[],i=r(1001),d={},t=(0,i.Z)(d,s,a,!1,null,null,null),o=t.exports}}]);
//# sourceMappingURL=8483.5b088ec0.js.map