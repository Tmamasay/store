<template>
  <div>
    <div class="billAdr" v-if="addressId">
      <div class="topAdr" >
        <p>{{addressDefut2.name||0}}</p>
        <p>{{addressDefut2.phone||0}}</p>
      </div>
      <div class="bomAdr">
        <p>{{addressDefut2.province}}{{addressDefut2.city}}{{addressDefut2.district}}{{addressDefut2.detailAddress}}</p>
        <div @click="goCheckAdr">
          <img src="../../../../static/images/xg.png" alt srcset />
        </div>
      </div>
    </div>
    <div class="zhanwei"></div>
    <div class="stroeOrder">
      <div class="orderList">
        <div class="orderImg">
          <img :src="imgUrls" alt srcset />
        </div>
        <div class="pricOrder">
          <span class="orderTit">{{commodDetail2.subTitle}}</span>
          <div class="pricLi">
            <p class="orderPic">
              <span style="font-size:16px !important">¥</span>
              {{commodDetail2.price||0}}
            </p>
            <p class="shul">x {{num}}</p>
          </div>
          <p class="primOrder">不支持7天无理由退款</p>
        </div>
      </div>
    </div>
    <div class="zhanwei"></div>
    <div class="jinE">
      <p class="y1">商品金额</p>
      <p class="y2">{{commodDetail2.price*num}}</p>
    </div>
    <div class="jinE1">
      <p class="y1">运费</p>
      <p class="y3">+ ¥0.00</p>
    </div>
    <div class="jinE2">
      <p class="y11">备注</p>
      <textarea
        class="RemarksWEbTXT"
        v-model="note"
        style="margin-left:15px"
        v-model.lazy="beizhu"
        maxlength="1000"
        placeholder="请输入留言信息"
      ></textarea>
    </div>
    <div class="footerCont">
      <div class="footerOrder">
        <p class="orderPic">
          <span style="font-size:16px !important">¥</span>
          {{commodDetail2.price*num}}
        </p>
        <div class="gobtn">
          <form @submit="formSubmit" report-submit="true">
          <button form-type="submit" @click="payMoney" :disabled="isdisabled">提交订单</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressDefut2:{
        name:''
      },
      addressId: null,
      productId: null, //商品id
      productSkuId: null, //规格id
      num: null, //数量
      note: null,
      isdisabled: false,
      imgUrls: null,
      commodDetail2:{
        subTitle:''
      }
    };
  },
  computed: {},
  onShow() {
    if (
      this.$root.$mp.query.productId &&
      this.$root.$mp.query.productSkuId &&
      this.$root.$mp.query.num
    ) {
      // debugger
      this.productId = this.$root.$mp.query.productId;
      this.productSkuId = this.$root.$mp.query.productSkuId;
      this.num = this.$root.$mp.query.num;
      this.findByIdDetail(this.$root.$mp.query.productId);
      this.getDefaultAddress();
    }
  },
  components: {},

  methods: {
    goCheckAdr() {
      wx.navigateTo({
        url: "/pages/mine/address/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
    },
    formSubmit(e){
      const formlist=[];
      formlist.push(e.mp.detail.formId)
      const parms={
        formIds:formlist
      }
      this.$api.user
        .doAddFormIds(parms)
        .then(res => {
          debugger
          // wx.hideToast();
          // debugger
          // this.addressDefut2 = res.addressUserReceive;
          // this.addressId2 = res.addressUserReceive.id;
        })
        .catch(err => {
          console.log(err);
        });

    },
    
    findByIdDetail(id) {
      //详情
      const param = {
        id: id
      };
      this.$api.user
        .findByIdDetail(param)
        .then(res => {
          const imgBeg = res.shopProduct.albumPics.split(",");
          var that = this;
          that.imgUrls = `http://${
            that.$store.getters.options.attachment_aliyunoss_bucketname
          }.${that.$store.getters.options.attachment_aliyunoss_endpoint}${
            imgBeg[0]
          }`;
          this.commodDetail2 = res.shopProduct;
          debugger
        })
        .catch(err => {
          console.log(err);
        });
    },
     getDefaultAddress() {
      wx.showToast({ title: "", icon: "loading", duration: 1000 });
       this.$api.user
        .getDefaultAddress()
        .then(res => {
          wx.hideToast();
          // debugger
          this.addressDefut2 = res.addressUserReceive;
          this.addressId = res.addressUserReceive.id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async payMoney() {
      if(this.addressId){
      this.isdisabled = true;
      const that=this
      wx.showToast({ title: "支付中", icon: "loading", duration: 1000 });
      const param = {
        payType: "微信",
        sourceType: "微信小程序",
        addressUserReceiveId: this.addressId,
        note: this.note,
        invoiceId: "",
        shopOrderItemList: [
          {
            productId: this.productId,
            productSkuId: this.productSkuId,
            num: this.numPic
          }
        ]
      };
      await this.$api.user
        .shopOrder(param)
        .then(res => {
          if(res.state=='ok'){ 
          // wx.hideToast();
          debugger;
          const oderLine = {
            // orderSn: res.shopOrder.orderSn
            id: res.shopOrder.id
          };
          this.$api.user
            .weChatUnifiedorder(oderLine)
            .then(res => {
              wx.hideToast();
                      debugger
              
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
                  that.isdisabled = false;
                },
                fail: function(res) {
                  wx.redirectTo({
                  	url: '/pages/learn/fail/main'
                  })
                  that.isdisabled = false;
                },
                complete: function(res) {
                  // console.log(res);
                  // that.defult = 0;
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
                // debugger
                wx.showToast({ title: res.message+'', icon: "", duration: 1500 });
                setTimeout(() => {
                  wx.hideToast();
                }, 1000);
              }
        })
        .catch(err => {
          console.log(err);
        });
        }else{
          var that=this
          wx.showToast({ title: "请填写默认地址", icon: "none", duration: 1000 });
          setTimeout(() => {
            that.goCheckAdr()
            wx.hideToast();
            
          }, 1000);
    }
    

    }
  },

  created() {
    
    // let app = getApp()
  }
};
</script>

<style scoped>
.billAdr {
  width: 95%;
  margin: 5px auto;
  /* border-top: 1rpx solid rgba(153, 153, 153, 0.31);
  border-bottom: 1rpx solid rgba(153, 153, 153, 0.31); */
}
.topAdr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  margin-top: 5px;
}
.bomAdr {
  display: flex;
  /* justify-content:space-between;
   */
  flex: 1;
  align-items: center;
  font-size: 14px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.6);
  margin-top: 10px;
  margin-bottom: 10px;
}
.bomAdr p {
  flex: 0 0 90%;
}
.bomAdr div {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.bomAdr img {
  width: 100%;
  height: 100%;
}
.zhanwei {
  width: 100%;
  height: 15px;
  background-color: #efefef;
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
  height: 110px;
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
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis !important; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
}
.pricOrder p {
  margin-top: 8px;
}
.orderTit {
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 0.7);
}
.pricLi {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shul {
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 0.7);
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
.jinE {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;
}
.jinE1 {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
}
.jinE2 {
  width: 95%;
  margin: 0 auto;
  display: flex;
  /* justify-content: space-between; */
  padding: 5px 0px 15px 0px;
}
.y1 {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.y11 {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  margin-top: 2px;
}
.jinE2 textarea {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.6);
}
.y2 {
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: rgba(34, 34, 34, 1);
}
.y3 {
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: #eb6c73;
}
.footerCont {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  box-shadow: 0px 0px 5px 0px rgba(240, 206, 223, 0.3);
}
.footerOrder {
  width: 95%;
  margin: 6px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button::after {
  border: none;
}
input {
  outline: none;
  border: none;
  list-style: none;
}
.gobtn button {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #fff;
  border-radius: 20px;
  background-color: #eb6c73;
}
</style>
