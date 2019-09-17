<template>
  <div class="containCom">
   <div class="comLine" v-for="item in TxList" :key="item.id">
     <div>
       <p class="co1" v-if="item.status=='已提现'">已提现</p>
       <p class="co1" v-else-if="item.status=='申请提现'" style="color:#FE4542">提现中</p>
       <p class="co2">{{item.createTime}}</p>
       </div>
       <div class="co3">+{{item.price}}</div>
   </div>
   <i-load-more v-if="!isBottom" tip="暂无更多数据" :loading="isBottom" />
    <i-load-more v-if="isBottom" tip="加载中" :loading="!isBottom" />
   
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

export default {
  components: {
    // card
  },

  data() {
    return {
      page:1,
      pageSize:20,
      isBottom:false,
      TxList:[]
    }
  },
  created() {
   
  },
  mounted() {},
  onReachBottom() {
    console.log("触底了");
    // if(this.isBottom){
    //   return
    // }else{
       this.pyramidUserOrder(this.page++,this.pageSize)
    // }
   
  },
  methods: {
    pyramidUserOrder(page,pageSize) {
      this.$api.user
        .pyramidUserOrder({
          page:page,
          pageSize:pageSize
        })
        .then(res => {
          // debugger;
          if(!res.page.list.length){
            // debugger
            this.page--
            this.isBottom=true
            return
          }
         this.TxList=res.page.list
          
          // wx.hideToast();
          // debugger
          // this.addressDefut2 = res.addressUserReceive;
          // this.addressId2 = res.addressUserReceive.id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    
  },
  onShow() {
    this.pyramidUserOrder(this.page,this.pageSize)
    
  },
  onHide() {
    
  },
  onUnload() {
   
  }
};
</script>

<style>
.comLine{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center

}
.co1{
  font-size:15px;
font-family:Noto Sans S Chinese;
font-weight:500;
color:rgba(34,34,34,1);
line-height:40px;

}
.co2{
  font-size:13px;
font-family:Arial;
font-weight:400;
color:rgba(153,153,153,1);

}
.co3{
  font-size:23px;
font-family:Noto Sans S Chinese;
font-weight:400;
color:rgba(34,34,34,1)

}
</style>
