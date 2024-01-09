<template>
    <div class="article">
        <h3>工具</h3>
        <ul>
            <li>1.黄鸟(注入用)</li>
            <li>2.hook软件(解密用)</li>
            <li>3.一个该软件的vip账号</li>
        </ul>
        注意:还有几个包中数据的作用没弄清楚
        <section>步骤</section>
        <p>1.打开黄鸟选择要抓取软件</p>
        <img src="./img/catch_pack.png" alt="img" @click.stop="$bus.istemplate($event)" class="transition_ease">
        2.打开对应的软件抓取登录包,也就是带有login的包(返回加密后的Base64),
        <section><img src="./img/login_package.png" alt="登录包" title="加密了" @click.stop="$bus.istemplate($event)" class="transition_ease"></section>
        <section>vip用户解密后几个重要的数据,还有个没截出来,endtime是指vip结束的时间(普通用户为0),将其该为任意时间的时间戳,level表示会员等级(普通为1)</section>
        <img class='maxwidth transition_ease' src="./img/decode_text.png" alt="decode" @click.stop="$bus.istemplate($event)">
        <section>反加加密</section>
        <p>将普通用户数据替换为vip后进行反加密,将其静态注入,这里有个坑人点,源数据解密后会有中文乱码(可带可不带)用jdk
            cipher组件加密会报错(字节不够),这里可用javascript的CryptoJS组件加密,虽然加密后的Base64和源数据的最后几位不同,但是app会解密出来</p>
        <section>登录成功后截图</section>
        <img src="./img/login_img.png" alt="" @click.stop="$bus.istemplate($event)" class="transition_ease">
        <section>第二个包(userinfo)</section>
        <p>直接静态注入改一下数据,time_remain数据指多久跳广告</p>
        <section>第三个包(nodelist)</section>
        <p>这个包是最重要的,应为请求还会验证是否为vip的信息将其注入为vip用户返回的包就行了</p>
        <encryptdata :data="$route.query.data"></encryptdata>
    </div>
</template>

<script>
export default {
    name: 'breakvpn',
}
</script>

<style scoped>

</style>