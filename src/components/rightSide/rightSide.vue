<template>
  <div class="info float_right">
    <div class="info_bg">
        <div class="lazy_img">
            <img src="http://q1.qlogo.cn/g?b=qq&nk=3288892500&s=640" alt="img" style="width:100px;height: 100px;">
        </div>
    </div>
    <div class="info_card">
        <section class="name">Rsp</section>
        <section>Too mary ideas,Too little action</section>
        <section style="cursor: grab">
            <svg  width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            Hu Bei
        </section>
        <section> 
            <svg  width="16" height="16" fill="currentColor" class="bi bi-envelope-fill bottomalign marginseparation" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg>
            <a href="mailto:3288892500@qq.com">3288892500@qq.com</a>
        </section>
    </div>
    <sns></sns>
  </div>
</template>

<script>
export default {
    name:'info'
}
</script>

<style scoped>
    .info{
    width: 300px;
    padding-bottom: 20px;
    border-radius: 15px;
    overflow: hidden;
    background-color: rgb(206, 238, 250);
    }
    .info_bg{
        height: 150px;
        margin-bottom: 50px;
        text-align: center;
        background:url('./img/cloud.jpg') no-repeat center/cover;
    }
    .info_card{
        line-height: 25px;
        margin-bottom:15px ;
        text-align: center;
    }
    .lazy_img{
        display: inline-block;
        height:100px ;
        width: 100px;
        border-radius: 50px;
        background: url('./img/lazy.jpg');
        transform: translate(0,100px);
        overflow: hidden;
    }
    .name{
        font: bold 20px/40px sans-serif;
    }
</style>