<template>
  <div class="flex_right">update:{{update}}</div>
</template>

<script>
export default {
    name:'encryptdata',
    props:["data"],
    computed:{
        update(){
            return this.$bus.Crypto.AES.decrypt(this.data,'23DbtQHR2UMbH6mJ').toString( this.$bus.Crypto.enc.Utf8)
        }
   },
}
</script>

<style>
.flex_right{
    display: flex;
    justify-content: flex-end;
}
</style>