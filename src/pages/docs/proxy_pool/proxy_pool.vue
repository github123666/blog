<template>
  <div class="article">
    <h3>免费代理配置</h3>
    <p>
      以下是windows教程,先从<a
        href="https://github.com/jhao104/proxy_pool"
        style="color: blue"
        >https://github.com/jhao104/proxy_pool</a
      >
      获取代码,进入下载好的文件执行
    </p>
    <blockquote class="display_flex">
      pip install -r requirement.txt
      <span @click.stop="copy($event)" class="copy">复制</span>
    </blockquote>
    <img
      src="./img/installerpack.png"
      alt="安装库"
      @click.stop="$bus.istemplate"
      class="transition_ease"
    />
    <p>
      接着安装redis,推荐按这个<a
        href="https://www.w3cschool.cn/redis/redis-install.html"
        style="color: blue"
        >教程</a
      >,推荐使用默认端口
    </p>
    <h3>运行</h3>
    <p>
      安装完成后到proxy_pool文件夹下执行 python proxyPool.py
      schedule(用来采集和验证代理)和 python proxyPool.py
      server(用来提供获取代理接口)，
      运行成功后就可在每个请求后面加上参数proxies来使用代理
      <img
        src="./img/updade.png"
        alt="img"
        @click.stop="$bus.istemplate"
        class="transition_ease"
      />
    </p>
    <encryptdata :data="$route.query.data"></encryptdata>
  </div>
</template>

<script>
export default {
  name: "proxy_pool",
  methods: {
    copy(event) {
      this.$bus.Copy(event.target.parentNode.firstChild.nodeValue);
    },
  },
};
</script>

<style scoped>
</style>