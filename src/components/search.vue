<template>
  <div>
   <div class="search" @click="goSearch">
      <div class="imgCont">
        <img src="../../static/images/index/search.png" alt />
      </div>
      <p>万千商品，正品保障</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // listDt:['','','']
    }
  },
 computed:{
  },
  methods: {
    goSearch(){
 wx.navigateTo({
            url: '/pages/searchshow/main',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
        })
    
    }
   
  },

  created () {
    // let app = getApp()
  },
  
  onShow(){
  }
}
</script>

<style>
.search {
  width: 90%;
  height: 34px;
  margin: 0 auto;
  border-radius: 34px;
  border: 1rpx solid rgba(218, 218, 218, 1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.imgCont {
  width: 17px;
  height: 18px;
}
.imgCont img {
  width: 100%;
  height: 100%;
}
.search p {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgb(168, 164, 164);
  line-height: 16px;
  text-align: left;
  margin-left: 10px;
}
</style>
