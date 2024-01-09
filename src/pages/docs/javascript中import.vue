<template><div><h2>import,require</h2>
<p>javascript的import与python大致相同,模块只会载入一次</p>
<h2>javascript中动态导入</h2>
<blockquote>
<p>javascript中动态载入 es6 () =&gt; import(), commonjs () =&gt; require()</p>
</blockquote>
<p>在es6中import函数里面不能是变量,如果是变量则会报错,可以是字符串或模板字符串。
使用模板字符串也要注意路径,尽量把公共路径写出来import(<code>@pages${path}</code>)</p></div></template>