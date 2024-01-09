<template>
  <div class="article" ref="gonxueyun">
    <div>
      项目地址:
      <a href="https://github.com/github123666/gonxueyun" style="color: blue"
        >https://github.com/github123666/gonxueyun</a
      >
    </div>
    <h3>下载</h3>
    <p>进入目录,打开cmd执行如下命令:</p>
    <blockquote class="display_flex">
      pip install -r requirement.txt
      <span @click.stop="copy($event)" class="copy">复制</span>
    </blockquote>
    <p>
      安装完毕后,配置basic_info下的user.txt(配置信息前往项目地址查看),然后执行local_clock.py就行
    </p>
    <h3>自动打卡</h3>
    <h4>本地配置</h4>
    <p>win + r 输入control 右上角输入计划任务,点击计划任务</p>
    <img
      src="./img/operation.png"
      alt="窗口截图"
      @click.stop="$bus.istemplate($event)"
      class="transition_ease"
    />
    <p>
      1. 点击创建基本任务,点击浏览找到python.exe路径或直接在cmd中执行如下命令
    </p>
    <blockquote class="display_flex">
      where python <span class="copy" @click="copy">复制</span>
    </blockquote>
    <p>参数写你要运行的脚本</p>
    <p>2.或直接写一个运行文件的bat脚本,放入计划程序中不用带参数</p>
    <encryptdata :data="$route.query.data"></encryptdata>
    <span
      >下一篇:<router-link to="/break" style="color: blue"
        >使用代理来实现在服务器上运行</router-link
      ></span
    >
  </div>
</template>
  
<script>
export default {
  name: "gonxueyun",
  methods: {
    copy(event) {
      this.$bus.Copy(event.target.parentNode.firstChild.nodeValue);
    },
  },
};
</script>
  
<style>

</style>