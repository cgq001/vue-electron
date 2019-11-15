<template>
  <div class="home">
    <!-- 顶部状态栏 -->
        <!-- <div class="home-title">
            <div class="home-title-name">
              <img src="../assets/logo.png" >
              <span>客服系统</span>
            </div>
            <div class="home-title-move">

            </div>
            <div class="home-title-icon">
                  <i class="el-icon-minus"></i>
                  <i class="el-icon-copy-document"></i>
                  <i class="el-icon-close"></i>
            </div>
        </div> -->
      <!-- 功能区域 -->
        <div class="home-centent">
          <!-- 左侧一 -->
              <div class="home-centent-left">
                  <div class="home-centent-left-imgs">
                     <img src="../assets/logo.png" >
                  </div>
                  <div class="home-centent-left-icons">
                     <div>
                        <i class="iconfont icon-xiaoxi"></i>
                        <i class="iconfont icon-renyuanguanli-copy"></i>
                        <i class="iconfont icon-shoucang-copy"></i>
                        <i class="iconfont icon-wenjian-copy"></i>
                     </div>
                     <div class="home-centent-left-icons-move"></div>
                     <div>
                        <i class="iconfont icon-shezhi"></i>
                     </div>
                  </div>
              </div>
          <!-- 左一 的下一级 -->
              <div class="home-centent-centent">
                  <router-view />
              </div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
  
  },
  created(){
    console.log(this.$electron)
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
  position: relative;
}
/* 顶部状态栏 */
.home-title{
  width: 100%;
  height: 30px;
  background: #F4F3F3;
  display: flex;
  -webkit-user-select: none;
}
.home-title-name{
  width: 120px;
  height: 30px;
  font-size: 14px;
  color: #000000;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
}
.home-title-name img{
  width: 20px;
  height: 20px;
  border-radius: 2px;
  margin-right: 5px;
}
.home-title-move{
  flex: auto;
  -webkit-app-region: drag;
}
.home-title-icon{
  width: 165px;
  height: 30px;
}
.home-title-icon i{
  display: inline-block;
  width: 45px;
  height: 30px;
  margin-right: 5px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  color: #000000 !important;
}
.home-title-icon i:hover{
  color: #1BDDDF;
  background: #D4D5D5;
}

/* 内容区域 calc(100% - 30px); */
.home-centent{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
.home-centent-left{
  width: 64px;
  height: 100%;
  overflow: hidden;
  background: #1E1F22;
  padding: 15px;
  box-sizing: border-box;
  
}
.home-centent-left-imgs{
  width: 34px;
  height: 34px;
  border-radius: 3px;
  overflow: hidden;
}
.home-centent-left-imgs img{
  width: 34px;
  height: 34px;
}
.home-centent-left-icons {
  width: 34px;
  height: calc(100% - 34px);
  padding: 25px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.home-centent-left-icons i{
  width: 34px;
  height: 34px;
  display: inline-block;
  text-align: center;
  line-height: 34px;
  color: #8C8C8C;
  font-size: 26px;
  margin-bottom: 15px;
  cursor: pointer;
}
.home-centent-left-icons-move{
  flex: auto;
  -webkit-app-region: drag;
}
/* 左一的下一级 */
.home-centent-centent{
  width: calc(100% - 64px);
  height: 100%;
  overflow: hidden;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
}
</style>
