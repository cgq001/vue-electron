<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created(){
    this.$router.push('/')
  }
  
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
