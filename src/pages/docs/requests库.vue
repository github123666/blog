<template>  <MarkdownToVue markdown="## 理解requests库中的stream
> requests.get('xxxx',stream=True)
+ 使用stream和不使用的区别：
  - 不使用：会等待视频下载完后才将响应体加载到内存中
  - 使用：会向服务一块一块读取   

使用stream可以尽早的处理数据,不用等全部视频下载完" /> </template>