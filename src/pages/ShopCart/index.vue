<template>
  <div>
    <checkbox-group @change="checkboxChange">
      <div class="checkbox contAll" v-for="item in shopCartList" :key="item.id">
        <checkbox :value="item.id" :checked="item.checked" />
        <!-- {{item.value}} -->
        <!-- <div class="cartRight"> -->
          <div class="stroeOrder">
      <div class="orderList">
        <div class="orderImg">
          <img :src="item.shopProduct.pic" alt srcset />
        </div>
        <div class="pricOrder">
          <span class="orderTit">{{item.shopProduct.subTitle}}</span>
          <!-- <span class="orderTit">萨达撒多大电商阿达撒大电商阿达萨达啊大的</span> -->
          <p class="guig">{{item.shopSkuStock.sp1}}{{item.shopSkuStock.sp2}}{{item.shopSkuStock.sp3}}</p>
          <div class="pricLi">
            <p class="orderPic">
              <span style="font-size:16px !important">¥</span>
              {{item.shopProduct.price||0}}
            </p>
            <p class="shul">x 1111{{num}}</p>
          </div>
          <p class="primOrder">不支持7天无理由退款</p>
        </div>
      </div>
    </div>
        <!-- </div> -->
      </div>
    </checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: "240",
      items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
     ],
    //  imgPre:`http://${ this.$store.getters.options.attachment_aliyunoss_bucketname}.${this.$store.getters.options.attachment_aliyunoss_endpoint}`,
      // listDt:['','','']
      shopCartList:null
    };
  },
  computed: {},
  components: {},
  methods: {
     checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.mp.detail.value)
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
          debugger
          
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
</style>
