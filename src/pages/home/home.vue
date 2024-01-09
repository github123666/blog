<template>
  <div>
    <ul>
      <li v-for="i of data" :key="i.name" class="bottom_border article_list">
        <a
          @click="changeTitle(i.path, encrypt('2022 - 10 - 14'))"
          style="cursor: pointer"
          >{{ i.meta.title }}</a
        >
        <!-- <p>
          <span>create: {{ i.createDate }}</span
          >&nbsp;&nbsp; <span>update: {{ i.update }}</span>
        </p> -->
      </li>
    </ul>
  </div>
</template>

<script>
import data from "@/assets/blog.json";
// import { getArticle } from "@/api/api";
export default {
  name: "home",
  data() {
    return {
      data,
    };
  },
  methods: {
    encrypt(data) {
      return encodeURI(this.$bus.Crypto.AES.encrypt(data, "23DbtQHR2UMbH6mJ"));
    },
    // 改变标签页标题，并实现跳转
    changeTitle(path, query) {
      this.$router.push({ path, query: { data: query } });
    },
  },
  mounted() {
    //   getArticle()
    //     .then((resolve) => {
    //       console.log(resolve);
    //     })
    //     .catch((reject) => {
    //       console.log("失败了"), reject;
    //     });
  },
};
</script>

<style scoped>
.bottom_border {
  border-bottom: 1px solid white;
}

.article_list {
  font: 18px/30px Georgia;
}
</style>