<template>
  <div>
   <div class="search">
      <div class="imgCont">
        <img src="../../../static/images/index/search.png" alt />
      </div>
      <!-- <p>万千商品，正品保障</p> -->
      <p><input type="text" placeholder="万千商品，正品保障"></p>
    </div>
    <comlist></comlist>
  </div>
</template>

<script>
import comlist from "@/components/comlist";
export default {
  data () {
    return {
      // listDt:['','','']
    }
  },
 computed:{
  },
  components: {
    comlist
  },

  methods: {
    
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
  justify-content: flex-start;
  align-items: center;
}
.imgCont {
  width: 17px;
  height: 18px;
  margin-left: 15px
}
.imgCont img {
  width: 100%;
  height: 100%;
}
.search p {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgb(34, 34, 34);
  /* line-height: 17px; */
  text-align: left;
  margin-left: 10px;
  padding-top: 1px
}
</style>
