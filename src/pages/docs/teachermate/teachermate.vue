<template>
    <div class="article">
        <div>项目地址: <a href="https://github.com/github123666/teachermate"
                style="color:blue;">https://github.com/github123666/teachermate</a></div>
        <h3>微助教打卡</h3>
        <p>1.openid获取(关键),有了openid就可以实现签到,获取方法在微信公众号里面
            点击签到按钮,在页面未加载完成前点击右上角的三个点，然后复制链接
            <img src="./img/demonstration2.jpg" alt="" @click.stop="$bus.istemplate($event)" class="transition_ease">
            <img src="./img/copylink.jpg" alt="" @click.stop="$bus.istemplate($event)" class="transition_ease">
            将链接直接复制到运行窗口中
        </p>
        <encryptdata :data="$route.query.data"></encryptdata>
    </div>
</template>

<script>
export default {
    name: 'teachermate',
}
</script>
<style scoped>

</style>