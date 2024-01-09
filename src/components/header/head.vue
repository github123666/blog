<template>
  <div class="topbar position_fixed ">
    <nav class="topnav">
      <router-link to="/home" class="top_Side">BreakMe</router-link>
      <div class="top_Tool">
        <ul>
          <li><router-link to="/home" :class="{'current':currentRoute == 'home'}">BreakMe</router-link></li>
          <li><router-link to="/tool" :class="{'current':currentRoute == 'tool'}">Tool</router-link></li>
          <li><router-link to="Author" :class="{'current':currentRoute == 'author'}">Author</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name:'top',
  data() {
    return {
      currentRoute:''
    }
  },
  watch:{
    "$route.name"(newvalue){
      this.currentRoute = newvalue
      }
  },
}
</script>

<style scoped>
ul li{
  float: left;
  margin-left: 20px;
  font: bold 18px/60px sans-serif;
}
.current{
  border-bottom: 4px solid black !important;
}
.topnav{
  width: 960px;
  margin: 0 auto;
}
.topbar{
  top: 0;
  left: 0;
  width: 100vw;
  line-height: 60px;
  padding-left: 25px;
  padding-right: 20px;
  background-color: rgba(255, 255, 255, .8);
}
.top_Tool{
  float: right;
}
.top_Side{
  font: bold 20px/60px serif;
}
ul li>a:hover{
  border-bottom: 4px solid skyblue;
}
</style>