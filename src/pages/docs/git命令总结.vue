<template><div><h1>git命令总结</h1>
<h2>查看当前远程的链接</h2>
<pre><code>git remote -v
</code></pre>
<h2>clone远程仓库到当前文件夹</h2>
<pre><code>git clone git@github.com:username/name.git
</code></pre>
<h2>新建分支并切换</h2>
<p>git checkout -b branchname</p>
<h2>创建分支</h2>
<p>git branch main</p>
<h2>切换分支</h2>
<p>git checkout main</p>
<h2>合并不相关历史的分支</h2>
<p>git pull origin main -- allow unrelated-histories</p>
<h2>删除分支</h2>
<p>git branch -d branchname</p>
<h2>版本回退</h2>
<p>git reset --hard [commitMd5]</p>
<h2>查看日志</h2>
<p>git log</p>
<h2>查看提交</h2>
<p>git stusta</p></div></template>