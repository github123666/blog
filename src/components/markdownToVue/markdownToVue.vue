<template>
  <div ref="markdown"></div>
</template>

<script>
import { marked } from "marked";
export default {
  name: "MarkdownToVue",
  props: ["markdown"],
  data() {
    return {
      marked,
    };
  },
  mounted() {
    this.$refs.markdown.innerHTML = marked.parse(this.markdown);
  },
};
</script>

<style>
</style>