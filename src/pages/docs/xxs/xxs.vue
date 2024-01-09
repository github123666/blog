<template>
  <a :href="xxs">跳转</a>
</template>

<script>
export default {
    name:'xxs',
    computed:{
        xxs(){
            return this.$route.query.keyWord
        }
    }
}
</script>

<style>

</style>