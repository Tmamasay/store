<template>
  <div>
   <div class="comListCont" v-for="item in splist" :key="item" @click="goComDetail(item.id)">
     <div class="comListLeft">
       <div class="listLeftImg">
         <img src="http://pmspic-10004025.image.myqcloud.com/9ce04793-4c63-4416-bbf0-3182b49d04c4" alt="" srcset="">
       </div>
     </div>
     <div class="comListMiddle">
       <p class="cLTitle">{{item.name}}</p>
       <div class="comPric">
         <p><span>¥</span>{{item.price}}</p>
         <div class="GWC">
           <div class="GW">
           <img src="../../static/images/gw.png" alt="">
           <!-- <img :src="item.pic" alt=""> -->
          </div>        
         </div>
       </div>
       <div class="Vlog">
         <span>自营</span>
         <span class="fangXin">放心购</span>
       </div>
     </div>
     <div class="comListRight"></div>
   </div>
    
  </div>
</template>

<script>

export default {
   props: ['splist'],
  data () {
    return {
      // listDt:['','']
    }
  },
 computed:{
  },
  components: {
    // search
  },

  methods: {
    goComDetail(id){
       wx.navigateTo({
            url: `/pages/learn/comdetail/main?id=${id}`,
        })
    }
    
  },

  created () {
    // let app = getApp()
  },
  
  onShow(){
    console.log(this.splist)
    debugger
  }
}
</script>

<style scoped>
.comListCont{
  width: 95%;
  margin: 10px auto;
  display: flex;
  flex: 1;
  /* align-items: center; */
}
.comListLeft{
  flex: 0 0 30%;
  display: flex;
  justify-content:space-between;
  align-items: center
}
.listLeftImg{
  width: 120px;
  height: 140px;
  background-color: blanchedalmond;
  border-radius: 5px;
  overflow: hidden;
}
.comListMiddle{
  flex: 0 0 65%;
   font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content:space-around
  
}
.comPric{
   font-size: 19px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: #EB6C73;
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-top: 30px
}
.comPric span{
  font-size: 13px !important;
}
.GWC{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color:#e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color:(34, 34, 34, .8)  */

}
.GW{
  width: 15px;
  height: 15px; 
  margin-top:-10px;
}
.GW img{
  width: 100%;
  height: 100%;
}
.Vlog{
  /* align-self:flex-end; */
}

.Vlog span{
  display:inline-block;
  font-size: 12px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #fff;
  padding: 1px 3px; 
  border-radius: 3px;
  background-color: #EB6C73;  

}
.fangXin{
  background-color: #fff !important;  
  border: 1rpx solid #91AFE7;
  color: #91AFE7 !important;
  margin-left: 8px;

}
.comListRight{
  flex: 0 0 5%;

}
</style>
