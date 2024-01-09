<template>
  <div id="app">
    <Head></Head>
    <TopBg></TopBg>
    <div id="main">
      <transition name="fade" mode="out-in">
        <router-view
          class="left_sidebar float_left img_limit"
          :istemplate="istemplate"
        >
        </router-view>
      </transition>
      <RightSide></RightSide>
    </div>
    <sns></sns>
    <Foot></Foot>
    <div
      v-show="istemplate"
      class="position_fixed_max"
      @click.stop="istemplate = !istemplate"
    ></div>
  </div>
</template>

<script>
//引入必要的组件
import Head from "@/components/header/head";
import Foot from "@/components/foot/foot";
import TopBg from "@/components/topBg/topBg.vue";
import RightSide from "@/components/rightSide/rightSide.vue";
//decrypt encrypt库
import Crypto from "crypto-js";
export default {
  name: "App",
  components: { Head, Foot, TopBg, RightSide },
  data() {
    return {
      istemplate: false,
      imgElement: "",
      keyWord: "",
    };
  },
  watch: {
    istemplate() {
      if (this.istemplate) {
        this.imgElement.classList.add("extent");
      } else {
        this.imgElement.classList.remove("extent");
        document.body.style.overflow = "";
      }
    },
  },
  methods: {
    isfocus() {
      let title;
      return () => {
        setInterval(() => {
          if (document.hasFocus()) {
            if (title) {
              document.title = title;
              title = "";
            }
          } else {
            //执行一次
            if (!title) {
              title = document.title;
              document.title = "找bug中····";
            }
          }
        }, 500);
      };
    },
    selectWord() {
      this.$router.push({ name: "xxs", query: { keyWord: this.keyWord } });
    },
  },
  mounted() {
    this.$bus.Crypto = Crypto;
    //copy到clipboard
    this.$bus.Copy = function copy(content) {
      navigator.clipboard.writeText(content);
    };
    this.$bus.istemplate = (element) => {
      this.istemplate = !this.istemplate;
      this.imgElement = element.target;
      document.body.style.overflow = "hidden";
    };
    //获取文章信息
    // this.$store.dispatch("getarticles");
    //离开当前页标题改变
    let isfocus = this.isfocus();
    isfocus();
    //应为freedomain这个网站的cdn会改icon
    //test
    let encryptData = this.$bus.Crypto.AES.encrypt(
      "123456",
      "23DbtQHR2UMbH6mJ"
    );
  },
};
</script>

<style>
/* public css */
* {
  box-sizing: border-box;
}

body,
ul,
p,
blockquote,
h3,
h4,
td,
pre {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

/* 过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0 !important;
}

/* id */
#main {
  width: 960px;
  margin: 0 auto;
  margin-bottom: 20px;
  overflow: hidden;
}
#app {
  position: absolute;
  top: 0;
  width: 100vw;
  /* overflow: hidden; */
}
/* 伪类 */
/* ::-webkit-scrollbar{
  width: 0;
} */
:root {
  overflow-y: auto;
  overflow-x: hidden;
}
/*类存放地方*/
.article {
  line-height: 40px;
}

.cursor {
  cursor: pointer;
}

.copy {
  color: rgb(214, 210, 210);
  cursor: pointer;
}

.copy:hover {
  color: rgb(135, 131, 131);
}

/* imgae放大 */
.extent {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 0;
  /* right: 0; */
  transform: translate(0, -50%);
  /* top: 0; */
  /* bottom: 0; */
  /* margin: auto; */
}

.left_sidebar {
  width: 600px;
  padding: 10px;
  border: 1px solid rgb(206, 238, 250);
  border-radius: 10px;
  background-color: rgb(206, 238, 250);
}

.img_limit img {
  width: 100%;
}

.position_fixed {
  position: fixed;
  z-index: 2;
}

.position_fixed_max {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 255);
}

.float_left {
  float: left;
}

.float_right {
  float: right;
}

/* flex左右布局 */
.display_flex {
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  margin-left: 20px;
  padding-left: 10px;
  background-color: white;
}

.transition_ease {
  transition: all 1s ease;
}
</style>
