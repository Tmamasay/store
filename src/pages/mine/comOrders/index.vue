<template>
  <div class="contain">
    <i-tabs-d :current="current" color="#eb6c73" @change="handleChange">
      <i-tab-d key="待付款" title="待付款"></i-tab-d>
      <i-tab-d key="待发货" title="待发货"></i-tab-d>
      <i-tab-d key="已发货" title="已发货"></i-tab-d>
      <i-tab-d key="已完成" title="已完成"></i-tab-d>
      <i-tab-d key="已关闭" title="已关闭"></i-tab-d>
    </i-tabs-d>
    <div v-if="orderList.length">
    <div class="orderList" v-for="item in orderList" :key="item.id">
    <!-- <div class="orderList" > -->
      <div class="delCart">
        <img src="../../../../static/images/del.png" alt srcset />
      </div>
      <div class="contentOrder">
        <div class="orderLeft">
          <img :src="item.orderItemList[0].productInfo.pic" alt srcset />
        </div>
        <p class="middleT">{{item.orderItemList[0].productInfo.subTitle}}</p>
        <p class="showMo">{{item.payAmount}}</p>
      </div>
      <div class="playFor">
      <p class="playBtn" v-if="current=='待付款'" @click="payTwo(item.id)">立即付款</p>
      <p class="playBtn" v-else-if="current=='待发货'">提醒发货</p>
      <p class="playBtn" v-else-if="current=='已发货'" @click="makeOrder(item.id)">确认收货</p>
      <!-- <p class="playBtn" v-else-if="current=='已完成'">删除订单</p>
      <p class="playBtn" v-else-if="current=='已关闭'">删除订单</p> -->
      <p class="playBtn" v-if="current=='已发货'||current=='已完成'" style="margin-left:5px" @click="findWuLiu(item)">查看物流</p>
      </div>
      
    </div>
    </div>
    <div v-else>
      <div class="noneImg">
        <!-- <img src="../../../../static/images/none.png" alt=""> -->
        <img :src="noneimg" alt="">
      </div>
      <p class="titNone">您暂时没有订单哟～</p>
    </div>
    <!-- <i-load-more v-if="!isBottom" tip="加载中" :loading="true" />
     <i-load-more v-if="isBottom" tip="暂无更多数据" :loading="!isBottom" /> -->
     
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
      current: "待付款",
      page:1,
      pageSize:10,
      isBottom:false,
      orderList:[],
      noneimg:''
    };
  },
  created() {
    // let key_token=this.$store.getters.user.token
  },
  mounted() {
    this.noneimg=`http://${ this.$store.getters.options.attachment_aliyunoss_bucketname}.${this.$store.getters.options.attachment_aliyunoss_endpoint}/attachment/20190911/1597d857129d4d288de6773a0c26e401.png`
  },
  methods: {
    makeOrder(id){
       wx.showToast({ title: "确认中", icon: "loading", duration: 1000 });
       this.$api.user
            .doReceive({
              id:id
            })
            .then(res => {
              wx.hideToast();   
              wx.showToast({ title: "操作成功", icon: "success", duration: 1000 });        
              setTimeout(() => {
                wx.hideToast(); 
                this.orderList=[]
                this.findOrder(this.page,this.pageSize,"已发货") 
              }, 1000);
              
            })
            .catch(err => {
              console.log(err);
            });

    },
    findWuLiu(e){
      debugger
      wx.navigateTo({
        url: `/pages/mine/comOrders/logistics/main?deliveryCompany=${e.deliveryCompany}&deliverySn=${e.deliverySn}` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });

    },
   payTwo(e){   
     wx.showToast({ title: "支付中", icon: "loading", duration: 1000 });
          const oderLine = {
            id: e
          };
          this.$api.user
            .weChatUnifiedorder(oderLine)
            .then(res => {
              wx.hideToast();           
              wx.requestPayment({
                timeStamp: res.map.timeStamp,
                nonceStr: res.map.nonceStr,
                package: res.map.package,
                signType: "MD5",
                paySign: res.map.paySign,
                success: function(res) {
                  console.log(res);
                  wx.redirectTo({
                  	url: '/pages/learn/success/main'
                  })
                  // that.defult = 0;
                  // that.isdisabled = false;
                },
                fail: function(res) {
                  wx.redirectTo({
                  	url: '/pages/learn/fail/main'
                  })
                  // that.isdisabled = false;
                },
                complete: function(res) {
                  // console.log(res);
                  // that.defult = 0;
                  // that.isdisabled = false;
                }
              });
              
              debugger;
              // this.addressDefut = res.addressUserReceive;
            })
            .catch(err => {
              console.log(err);
            });
          // this.addressDefut = res.addressUserReceive;
        
      

    },
    findOrder(page,pageSize,sign) {
       wx.showToast({ title: "加载中", icon: "loading", duration: 1000 });
      this.$api.user
        .findOrder({
           page: page,
            pageSize: pageSize,
            status: sign
        })
        .then(res => {
          wx.hideToast();
          if(!res.page.list.length){
            // debugger
            this.page--
            this.isBottom=true
            return
          }
          res.page.list.forEach(element => {
            element.orderItemList[0].productInfo.pic=`http://${
            this.$store.getters.options.attachment_aliyunoss_bucketname
          }.${this.$store.getters.options.attachment_aliyunoss_endpoint}${
            element.orderItemList[0].productInfo.pic
          }` 
          this.orderList.push(element)
          });
          // this.orderList=res.page.list
          // debugger
          

        })
        .catch(err => {
          console.log(err);
        });
    },
    handleChange(e) {
      // debugger
       this.page=1
      this.current = e.mp.detail.key;
      this.findOrder(this.page,this.pageSize,e.mp.detail.key)
      this.orderList=[]
    },
    switch1Change(e) {
      console.log(e);
      if (e.mp.detail.value) {
      }
    }
  },
   onReachBottom() {
    console.log("触底了");
    // if(this.isBottom){
    //   return
    // }else{
       this.findOrder(++this.page,this.pageSize,this.current)
    // }
   
  },
  onShow() {
    this.findOrder(this.page,this.pageSize,"待付款")
  }, 
   onHide() {
    // debugger
          this.current= "待付款"
          this.orderList=[]
          this.isBottom=false
  },
  onUnload() {
this.current= "待付款"
this.orderList=[]
this.isBottom=false
    // debugger
  }
};
</script>

<style scoped>
.contain {
  width: 95%;
  margin: 0 auto;
}
.delCart {
  width: 20px;
  height: 20px;
  align-self:flex-end;
  margin-right: 10px
}
.delCart img {
  width: 100%;
  height: 100%;
}
.orderList {
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  padding: 15px 5px;
  box-shadow: 0px 0px 5px 0px rgba(240, 206, 223, 0.5);
  margin: 10px 0px;
  border-radius: 5px;
}
.contentOrder {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
  flex: 1
}
.orderLeft {
  width: 80px;
  height: 70px;
  background-color: bisque;
  flex:0 0 20%
}
.orderLeft img{
  width: 100%;
  height: 100%;
}
.middleT {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 300;
  color: rgba(34, 34, 34, 0.9);
  margin: 0px 8px;
  flex:0 0 60%
}
.showMo{
  flex:0 0 20%;
   font-size: 17px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: rgba(34, 34, 34, 0.9);
  text-align: center
}
.playBtn {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  background-color: #eb6c73;
  padding: 6px 10px;
  border-radius: 20px;
  color: #fff;
  align-self:flex-end
  /* color: rgba(34, 34, 34, 0.9); */
}
.noneImg{
  width: 215px;
  height: 215px;
  margin: 100px auto 30px auto

}
.noneImg img{
  width: 100%;
  height: 100%;
}
.titNone{
  font-size:17px;
font-family:Noto Sans S Chinese;
font-weight:400;
color:rgba(34,34,34,1);
text-align: center

}
.playFor{
  display: flex;
  justify-content: flex-end;
  align-items: center
}
</style>
