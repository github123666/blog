"use strict";(self["webpackChunkdiary"]=self["webpackChunkdiary"]||[]).push([[7647],{7647:function(n,e,r){r.r(e),r.d(e,{default:function(){return a}});var t=function(){var n=this,e=n._self._c;return e("MarkdownToVue",{attrs:{markdown:"# 总结逆向miniprogress\n## 抓包\n+ 1: 存在设备限制,如:只能在移动端打开网页\n## 分析\n+ 1: 存在F12检测\n## 验证过程\n+ 微信有几种验证\n+ 1：第三方网页\n+ 2: 公众号\n+ 3: 小程序\n> 对第三方网页验证过程有基本的了解  \n> 大概是这样一个链接\n\n```\n https://open.weixin.qq.com/connect/qrconnect?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STAT\n```\n> 点击后跳转到 redirect指定的url上并且携带param参数\n> code和state,让后客户端将该code发到服务器中并且,服务器将code携带请求微信服务器,以获取用户的信息,让后服务器返回生成的token,至此已完成\n"}})},c=[],o=r(1001),s={},u=(0,o.Z)(s,t,c,!1,null,null,null),a=u.exports}}]);
//# sourceMappingURL=7647.f1041934.js.map