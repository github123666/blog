<template>
  <div class="article" >
    <section >软件名称:地铁跑酷直充最新版.apk</section>
    <section>软件大小:28.1Mb</section>
    <section>解锁密码:xiangyujinye888</section>
    <section>加密方式:用按位异位运算符(^)</section>
    <section>
      <span> 软件图标: </span
      ><img
        class="vertical_middle transition_ease"
        src="./img/tamplate.png"
        alt="地铁跑酷图标"
        style="width: 100px; height: 100px"
        @click.stop="$bus.istemplate($event)"
      />
    </section>
    <h3>具体过程:</h3>
    <br />
    1先用np管理器解包,找到exit函数:
    <img
      src="./img/process.png"
      alt="process"
      @click.stop="$bus.istemplate($event)"
      class="transition_ease"
    /><br />
    2将前面的if-eqz(表示比较结果相等的时候跳转到cond_1b)改成if-nez(表示比较结果不等的时候跳转到cond_1b,防止锁机)
    3在加密后的数据的后面加一个输出日志的方法(v0表示this)
    <pre
      class="language_smail"
    ><code><span class="function">invoke-static</span>{<span class="param">v0, v1</span>},<span class="method"> Landroid/util/Log;</span>->e<span class="method">(Ljava/lang/String;Ljava/lang/String;)</span>I</code></pre>
    4 利用<a
      href="https://developer.android.google.cn/studio/command-line/adb?hl=zh-cn"
      >adb调试桥</a
    >将加密后的数据输出到控制台
    <img
      src="./img/password.png"
      alt="password"
      @click.stop="$bus.istemplate($event)"
      class="transition_ease"
    />
    <h4>总结:</h4>
    <p>上述方法只针对小部分锁机软件(一般也是这种)</p>
    <encryptdata :data="$route.query.data"></encryptdata>
  </div>
</template>

<script>
export default {
  name: "break",
};
</script>

<style scoped>
.method {
  color: #9b9b37;
}
.language_smail {
  position: relative;
  padding:17px ;
  text-align: left;
  word-break: normal;
  white-space: pre;
  color: white;
  border-radius: 5px;
  background-color: #282c34;
}
.language_smail::after {
  content: "smail";
  position: absolute;
  top: 0.1em;
  right: 1em;
  color: hsla(0, 0%, 100%, 0.4);
}
.function {
  color: rgb(89, 89, 252);
}
.param {
  color: skyblue;
}
.vertical_middle {
  vertical-align: middle;
}
</style>