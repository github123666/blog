<template>
  <div>
    <div class="position_fixed top">
      <span>我的后台</span>
    </div>
    <div class="centent">
        <div class="float_left">
            <ul>
                <li>添加新的文章</li>
                <li>后台访问数据</li>
                <li>文章阅读数据</li>
            </ul>
        </div>
        <div>内容</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'admin'
};
</script >

<style scoped>
.top{
    background-color: rgb(206, 238, 250);
}
.centent{
    margin-top: 50px;
}
</style>