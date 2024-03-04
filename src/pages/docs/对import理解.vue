<template>  <MarkdownToVue markdown="## import
+ 两种导入方式  
  1. import pack as alias
  2. from pack import *
   
from pack import *   
不会导入以下划线开头的变量。尽量不要使用`*`，应为它会导入许多其他变量，容易与你的命名空间发生冲突。除非你定义__all__,来修改默认导出。* 也也可是其他内容,如包,模块，变量，函数。  
import packname or modulename   
import时最后一项可以为包名或模块名,但不能是上一个包的变量或函数。

## 对import理解
就是在当前命名空间里面加一个全局字典" /> </template>