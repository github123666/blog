<template>
  <div class="article">
    <p>MD5加密</p>
    <label for="encrypt">请输入要加密的数据: </label>
    <input
      type="text"
      id="encrypt"
      style="width: 270px"
      autocomplete="off"
      placeholder="请输入要加密的数据"
      v-model="encryptData"
    />
    <div class="tool">
      <button @click.stop=" throttle(inputEncrypt, 1000)">加密</button>
      <button @click.stop="userValue">复制加密结果</button>
      <button @click.stop="closeOutput">清空结果</button>
      <button @click.stop="gettimes" class="cursor">对时间戳加密</button>
      <button @click.stop="throttle(1, 1000)">节流</button>
    </div>
    <div>
      <textarea
        cols="32"
        rows="10"
        ref="inputbar"
        class="outputbar"
        readonly="readonly"
      ></textarea>
    </div>
    <div class="template_black" v-show="timecList">
      <table class="table_style">
        <thead>
          <tr>
            <th>前10s时间戳(前10位)</th>
            <th>加密结果</th>
            <td @click="throttle(updata,1000)" class="cursor">更新</td>
          </tr>
        </thead>
        <tr v-for="i of timecList" :key="i">
          <th scope="row">{{ i }}</th>
          <td>{{ encrypt(i) }}</td>
          <td class="cursor" @click.stop="copyResult(i)">复制</td>
        </tr>
        <tfoot>
          <td></td>
          <td></td>
          <td class="close_button cursor" @click.stop="close">关闭</td>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import throttle from "@/throttle/throttle"
export default {
  name: "tool",
  data() {
    return {
      encryptData: "",
      timecList: "",
    };
  },
  computed:{
    throttle
  },
  methods: {
    //加密函数
    encrypt(data) {
      return this.$bus.Crypto.MD5(data.toString());
    },
    //输出加密的值
    inputEncrypt() {
      let result = this.encrypt(this.encryptData);
      this.$refs.inputbar.textContent = result;
    },
    gettimes() {
      let nowday = +new Date();
      let timecList = [];
      for (let i = 0; i < 10; i++) {
        timecList.push(nowday.toString().slice(0, 10) - i);
      }
      this.timecList = timecList;
    },
    //更新时间戳
    updata() {
      this.gettimes();
    },
    //关闭时间戳页面
    close() {
      this.timecList = "";
    },
    //复制用户输入加密后的值
    userValue() {
      if (this.$refs.inputbar.textContent) {
        this.$bus.Copy(this.$refs.inputbar.textContent);
      }
    },
    //复制加密后时间戳的值
    copyResult(content) {
      this.$bus.Copy(this.encrypt(content));
    },
    //清除加密的值
    closeOutput() {
      this.$refs.inputbar.textContent = "";
    },
    //节流
  },
  mounted(){
  }
};
</script>

<style scoped>
.close_button {
  margin-top: 1px;
  vertical-align: bottom;
  border-radius: 3px;
  text-align: center;
  background: skyblue;
}
.outputbar {
  width: 100%;
  height: 221px;
  padding-left: 20px;
  font-size: 20px;
  resize: none;
}
.tool button {
  height: 35px;
  margin-right: 10px;
  background-color: #fff;
  border: 1px solid #757575;
}
.tool button:active {
  font-weight: bold;
}
table td {
  border-top: 2px solid #f0f0f0;
}
.template_black {
  position: fixed;
  z-index: 2;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.table_style {
  position: relative;
  width: 750px;
  z-index: 3;
  margin: 150px auto;
  color: rgba(0, 0, 0, 0.85);
  border-radius: 5px;
  background-color: white;
}
</style>