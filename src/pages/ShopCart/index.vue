<template>
  <div>
    <checkbox-group @change="checkboxChange"  >
      <div class="checkbox contAll" v-for="item in shopCartList" :key="item.id">
        <checkbox :value="item.id"  color="#fe647e" />
        <!-- {{item.value}} -->
        <!-- <div class="cartRight"> -->
          <div class="stroeOrder">
      <div class="orderList">
        <div class="orderImg">
          <img :src="item.shopProduct.pic" alt srcset />
        </div>
        <div class="pricOrder">
          <div class="firstLine">
          <span class="orderTit">{{item.shopProduct.subTitle}}</span>
          <!-- <p class="orderTit">发生地方的说法发生地方的说法发生的发生的佛挡杀佛收到范德萨</p> -->
          <div class="delCart"><img src="../../../static/images/del.png" alt="" srcset=""></div>
          </div>
          <!-- <span class="orderTit">萨达撒多大电商阿达撒大电商阿达萨达啊大的</span> -->
          <p class="guig">{{item.shopSkuStock.sp1}}{{item.shopSkuStock.sp2}}{{item.shopSkuStock.sp3}}</p>
          <div class="pricLi">
            <p class="orderPic">
              <span style="font-size:16px !important">¥</span>
              {{item.shopProduct.price||0}}
            </p>
            <p class="shul">x {{item.quantity}}</p>
          </div>
          <!-- <p class="primOrder">不支持7天无理由退款</p> -->
        </div>
      </div>
    </div>
        <!-- </div> -->
        
      </div>
    </checkbox-group>
    <div class="fooet"></div>
   <div class="goPayCart">
     <p>合计：<span style="font-size:18px">{{sumPromotionPrice}}</span></p>
     <div class="goPayNum">
     <form @submit="formSubmit" report-submit="true">
          <button form-type="submit" @click="payMoney" :disabled="isdisabled">去结算({{num}})</button>
          </form>

     </div>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: "240",
      isdisabled:false,
    //  imgPre:`http://${ this.$store.getters.options.attachment_aliyunoss_bucketname}.${this.$store.getters.options.attachment_aliyunoss_endpoint}`,
      // listDt:['','','']
      shopCartList:null,
      addressId:null,
      checkList:[],
      sumPrice:0,//总价
      sumPromotionPrice:0,//实际给的钱
      num:0,
    };
  },
  computed: {},
  components: {},
  methods: {
    getDefaultAddress() {
      wx.showToast({ title: "", icon: "loading", duration: 1000 });
       this.$api.user
        .getDefaultAddress()
        .then(res => {
          wx.hideToast();
          // debugger
          // this.addressDefut2 = res.addressUserReceive;
          this.addressId = res.addressUserReceive.id;
        })
        .catch(err => {
          console.log(err);
        });
    },
      async payMoney() {   
      this.isdisabled = true;
      const that=this
      wx.showToast({ title: "支付中", icon: "loading", duration: 1000 });
      const param = {
        payType: "微信",
        sourceType: "微信小程序",
        addressUserReceiveId: this.addressId,
        note: this.note,
        invoiceId: "",
        shopOrderItemList: this.checkList
      };
      await this.$api.user
        .shopOrder(param)
        .then(res => {
          if(res.state=='ok'){ 
          // wx.hideToast();
          // debugger;
          const oderLine = {
            // orderSn: res.shopOrder.orderSn
             id: res.shopOrder.id
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
                  	url: '/pages/learn/commlist/main'
                  })
                  // that.defult = 0;
                  that.isdisabled = false;
                },
                fail: function(res) {
                  // wx.redirectTo({
                  // 	url: '/pages/storefk/payfailure/main'
                  // })
                  that.isdisabled = false;
                },
                complete: function(res) {
                   wx.redirectTo({
                  	url: '/pages/learn/commlist/main'
                  })
                  that.isdisabled = false;
                }
              });
              
              debugger;
              // this.addressDefut = res.addressUserReceive;
            })
            .catch(err => {
              console.log(err);
            });
          // this.addressDefut = res.addressUserReceive;
          }else{
                debugger
                wx.showToast({ title: res.message+'', icon: "", duration: 1500 });

              }
        })
        .catch(err => {
          console.log(err);
        });
    
      

    },
     checkboxChange: function(e) {
       console.log('checkbox发生change事件，携带value值为：', e.mp.detail.value)
       console.log([...e.mp.detail.value])
       this.doPrice([...e.mp.detail.value])
  },
  doPrice(list){
    this.$api.user
       .doPrice(
          {
            ids:list
          }
        )
        .then(res => {
          const that=this
      that.checkList=[]
      that.sumPrice=res.price;
      that.sumPromotionPrice=res.promotionPrice;
      that.num=res.shopCartItemList.length;
       res.shopCartItemList.forEach(el => {  
        //  debugger
         const param={
           productId:el.productId,
           productSkuId:el.productSkuId,
           num:el.quantity,      
         }
         that.checkList.push(param)
      });
          
          
        })
        .catch(err => {
          console.log(err);
        });

  },
  shopCartItem() {
      //详情
      const param={
        page: 1,
        pageSize: 10
      }
      this.$api.user
        .shopCartItem(param)
        .then(res => {
          // debugger
          
          res.page.list.forEach(element => {
            element.shopProduct.pic=`http://${
            this.$store.getters.options.attachment_aliyunoss_bucketname
          }.${this.$store.getters.options.attachment_aliyunoss_endpoint}${
            element.shopProduct.pic
          }` 
          });
          this.shopCartList=res.page.list
          // const imgBeg = res.shopProduct.albumPics.split(",");
          // var that = this;
          // that.imgUrls = `http://${
          //   that.$store.getters.options.attachment_aliyunoss_bucketname
          // }.${that.$store.getters.options.attachment_aliyunoss_endpoint}${
          //   imgBeg[0]
          // }`;
          // this.commodDetail2 = res.shopProduct;
          // debugger
        })
        .catch(err => {
          console.log(err);
        });
    },
    // imageLoad() {
    //   // var h = 750/300;
    //   var that = this;
    //   wx.getSystemInfo({
    //     success: function(res) {
    //       console.log(res);
    //       // debugger
    //       that.height = res.screenHeight;
    //     }
    //   });
    // },
  },

  created() {
    
  },

  onShow() {
    this.shopCartItem();
    this.getDefaultAddress()
  }
};
</script>

<style>
.contAll{
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center
}
.stroeOrder {
  width: 95%;
  margin: 0 auto;
  border-top-left-radius: 20rpx;
  border-top-right-radius: 20rpx;
}
.orderList {
  display: flex;
  /* align-items: center; */
  margin-top: 15px;
  margin-bottom: 15px;
  flex: 1;
}
.orderImg {
  width: 100px;
  height: 120px;
  background-color: bisque;
  flex: 0 0 25%;
}
.orderImg img {
  width: 100%;
  height: 100%;
}
.pricOrder {
  margin-left: 15px;
  flex: 0 0 70%;
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 0.7);
 
}
.pricOrder p {
  /* margin-top: 8px; */
}
.orderTit {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.7);
  flex: 0 0 90%
}
.pricLi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px
}
.shul {
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 0.7);
  margin-right: 10px
}
.orderPic {
  font-size: 20px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: #fe647e;
}
.primOrder {
  display: inline-block;
  font-size: 12px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #eb6c73;
  padding: 2px 4px 2px 4px;
  border-radius: 2px;
  border: #eb6c73 solid 1rpx;
}
.guig{
  font-size: 14px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.5);

}
.firstLine{
  display: flex;
  justify-content: space-between;
  flex: 1
}
.delCart{
  width: 20px;
  height: 20px;
  /* margin-top: 10px */
}
.delCart img{
  width:100%;
  height:100%;
}
.fooet{
  width: 100%;
  height: 50px;
}
.goPayCart{
  
  width: 100%;
  height: 50px;
  position: fixed !important;
  display: flex;
   flex: 1;
   align-items: center;
  bottom: 0px;
  box-shadow: 0px 0px 5px 0px rgba(240, 206, 223, 0.3);
  z-index: 9999999 !important;
  background-color: #fff;
}
.goPayCart p{
  flex: 0 0 60%;
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  padding-left: 15px
}
button::after {
  border: none;
}
input {
  outline: none;
  border: none;
  list-style: none !important;
}
.goPayNum{
flex: 0 0 40%;
background-color: #eb6c73;
padding: 0;
height: 50px
}
.goPayNum button{
  
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #fff;
  /* border-radius: 20px; */
  background-color: #eb6c73;
  border-radius: 0px;
  height: 50px;
  line-height: 50px
}
</style>
