<template>
  <div class="" id="admin">
    <h1>我的后台系统</h1>
    <div class="center">
        <form action="#">
        <section>账户:</section>
        <input type="text" id="account">
        <section>密码:</section>
        <input type="password" id="pwd">
        <div class="submit_button" @click="login">
            登录
        </div>
    </form>
    </div>
  </div>
</template>

<script>
export default {
    name:"admin",
    methods:{
        login(){
            this.$router.push({name:'admin'})
        }
    }
}
</script>

<style scoped>
#admin{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100vw;
    height: 100vh;
    background-color: white;
}
#pwd,#account{
    width: 280px;
    line-height: 25px;
    border-radius: 3px;
    margin-top: 7px;
    border: 1px solid skyblue;
    margin-bottom: 5px;
}
/*元素选择器*/
h1{
    width: 370px;
    margin: 100px auto 0 auto;
    text-align: center;
    font: 20px serif;
}
/* 类选择器 */
.center{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 370px;
    height: 370px;
    padding: 45px;
    background-color: rgb(206, 238, 250);
    transform: translate(-50%,-50%);
    border-radius: 10px;
    color:rgb(142, 140, 140);
}
.submit_button{
    margin-top: 10px;
    text-align: center;
    line-height: 30px;
    color: black;
    cursor: pointer;
    border-radius: 10px;
    background-color: #2da44e;
}
</style>