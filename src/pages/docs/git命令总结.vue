<template>  <MarkdownToVue markdown="# git命令总结
## 查看当前远程的链接
    git remote -v
## 删除远程连接
git remote rm name
## clone远程仓库到当前文件夹
    git clone git@github.com:username/name.git
## 新建分支并切换
git checkout -b branchname
## 创建分支
git branch main
## 切换分支
git checkout main
## 合并不相关历史的分支
git pull origin main --allow-unrelated-histories
## 删除分支
git branch -d branchname
## 版本回退
git reset --hard [commitMd5]
## 查看日志
git log
## 查看提交
git status
## 撤销修改
git checkout -- filename
## 与远程库关联
git push -u origin main 
-u之后后面可以直接push
## 查看暂存区文件
git ls-files
## 问题一
一步小心将master分支提交到远程,并将本地和远程的分支删除了。创建了新的分支main让后像提交master之前提交的内容发现add不了" /> </template>