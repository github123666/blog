<template><div><h2>具体过程</h2>
<p>目标:cdr</p>
<h2>抓包</h2>
<h3>抓移动端的包(无果)。</h3>
<p><code>第一次尝试</code> <br />
准备环境:夜神模拟器,安卓7,xposed,trustme<br />
电脑环境:burp <br />
在这个环境下wx能接受到信息,但是打不开小程序(应该是证书不行,浏览器也打不开)。这里就换了一种思路用安卓5(安卓5默认是认可系统证书)<br />
<code>第二次尝试</code> <br />
安卓5环境,cdr应该做了限制,可以抓到另一个网页的包,但是目标网页抓取不到(头大)  </p>
<h3>抓pc端包</h3>
<p>准备环境:burp <br />
win + r 输入 inetcpl.cpl 连接 -&gt; 局域网设置,填写目标burp代理的端口
<img alt="img" src="./static/proxy_evn.png" />
打开xweb就可以抓到目标网页</p></div></template>