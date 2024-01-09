<template>
  <div id="info">
    <section>&#127795; InFo</section>
    <ul class="author">
      <li>I'm rsp Soon to be 19 years old boy This first item</li>
      <li>Now date:{{ nowday }}</li>
    </ul>
    <section class="margintop">🏄‍♀️ SNS</section>
    <ul class="author">
      <li>
        <span>e-mail: </span>
        <a href="mailto:mabaoguo@163.com">3288892500@qq.com</a>
        <svg
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          style="color: blue"
        >
          <path
            d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
          />
          <path
            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
          />
        </svg>
      </li>
      <li>
        <span>github: </span>
        <a href="https://github.com/github123666">github123666</a>
        <svg
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          style="color: blue"
        >
          <path
            d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
          />
          <path
            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
          />
        </svg>
      </li>
      <li>
        <span>telegram: </span>
        <a href="https://t.me/rsping" target="_black">rsping</a>
        <svg
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          style="color: blue"
        >
          <path
            d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
          />
          <path
            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
          />
        </svg>
      </li>
    </ul>
    <section class="margintop">💻 Interested Scoped</section>
    <p class="author">Ctrl C Ctrl V Engineer</p>
  </div>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      nowday: "",
      timer: "",
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      let time = new Date();
      this.nowday = time.toLocaleDateString() + time.toLocaleTimeString();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
section {
  margin-bottom: 5px;
}

.author {
  padding-left: 20px;
  margin-bottom: 5px;
}
</style>