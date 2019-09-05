<template>
  <div style=" overflow: hidden;">
    <div>
      <swiper
        class="swiper ptContImg"
        circular="true"
        indicator-dots="false"
        autoplay="false"
        interval="5000"
        duration="1000"
      >
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item>
            <!-- <navigator :url="'../../'+item.jumpUrl" open-type="navigate"> -->
            <!-- <navigator url='../../pages/index/chaihb/main' open-type="navigate"> -->
            <!-- <navigator > -->
            <!-- <image :src="item.imageUrl" v-bind:style="{height:height+'px'}" @click="navjumps(item.jumpUrl)"/> -->
            <img :src="item" />
            <!-- </navigator> -->
          </swiper-item>
        </block>
      </swiper>

      <!-- <img src="http://pmspic-10004025.image.myqcloud.com/05be1989-8b8d-4510-b6cc-05ad4cb6426a" alt="" srcset=""> -->
    </div>
    <div class="ptPriATimCont">
      <div class="ptPriATim">
        <div class="leftPic">
          <p>
            <span style="font-size:16px !important">¥</span>
            {{commodDetail.price||0}}
            <span class="peoplePr">¥99</span>
            <!-- <span class="peopleT">2人团</span> -->
          </p>
        </div>
        <div class="leftTime">
          <!-- <div class="cTCont">
            剩余
            <span class="ctH">{{cth}}</span>:
            <span class="ctF">{{ctm}}</span>:
            <span class="ctM">{{cts}}</span>
          </div>-->
        </div>
      </div>
    </div>
    <div class="pTTitle">
      <!-- <p>大王短裤式纸尿裤XL48片加大号尿不湿号尿不湿（12kg-17kg）（维E系列）</p> -->
      <p>{{commodDetail.subTitle}}</p>
      <div class="shareImg">
        <img src="../../../../static/images/share.png" alt srcset />
      </div>
    </div>
    <div class="baoZCont">
      <div class="baoZ">
        <div class="baoZIm"></div>
        <p>不支持无理由退换货</p>
      </div>
      <div class="baoZ">
        <div class="baoZIm"></div>
        <p>100%正品保证</p>
      </div>
      <div class="baoZ">
        <div class="baoZIm"></div>
        <p>PICC承保</p>
      </div>
    </div>

    <div class="zhanwei"></div>
    <div class="dzCont">
      <div class="GroupDz2">
        <p class="leftP2">送至</p>
        <!-- <p class="leftM2">重庆市南岸区时代星光协信城7栋重庆市南岸区时代星光协信城7栋</p> -->
        <p
          class="leftM2"
        >{{addressDefut.province}}{{addressDefut.city}}{{addressDefut.district}}{{addressDefut.detailAddress}}</p>
        <div class="leftR2" @click="goCheckAdr">
          <div class="leftRImg2">
            <img src="../../../../static/images/more.png" alt srcset />
          </div>
        </div>
      </div>
      <div class="GroupDz2">
        <p class="leftP2">已选</p>
        <!-- <p class="leftM2">3段900克，1件</p> -->
        <p class="leftM2">{{beginYX}}， {{numPic}}件</p>
        <div class="leftR2" @click="pickGG">
          <div class="leftRImg2">
            <img src="../../../../static/images/more.png" alt srcset />
          </div>
        </div>
      </div>
      <div class="GroupDz2">
        <p class="leftP2">运费</p>
        <p class="leftM2">包邮</p>
        <div class="leftR2">
          <div class="leftRImg2">
            <!-- <img src="../../../../static/images/more.png" alt srcset /> -->
          </div>
        </div>
      </div>
      <div class="zhanwei"></div>
    </div>
    <div class="tuWen">
      <p class="twJs">图文介绍</p>
      <div>
        <wxParse :content="detailData" />
      </div>
    </div>
    <div class="pTFooter"> 
    <button open-type="contact" :send-message-title="commodDetail.subTitle" :send-message-img="imgUrls[0]" show-message-card="true" :send-message-path="sharePath" style="background-color: #fff">
      <div class="tfLeft">
        <div class="tfLeftImg">
          <img src="../../../../static/images/kf.png" alt srcset />
        </div>
        <p>客服</p>
      </div>
      </button>
      <div class="tfLeft">
        <div class="tfLeftImg">
          <img src="../../../../static/images/sc.png" alt srcset />
        </div>
        <p>商城</p>
      </div>
      <div class="tfLeft">
        <div class="tfLeftImg">
          <img src="../../../../static/images/guw.png" alt srcset />
        </div>
        <p>购物车</p>
      </div>
      <div class="tfMiddle" @click="pickGG">
        <!-- <p class="f1">¥249</p> -->
        <p class="f2">加入购物车</p>
      </div>
      <div class="tfRight" @click="pickGG">
        <!-- <p class="p1">¥249</p> -->
        <p class="p2">立即购买</p>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="shadow" v-if="chooseSize" @tap="hideModal"></div>
    <!-- 上滑高度 -->
    <div class="choosen" v-if="chooseSize" :animation="animationData">
      <!-- 内容 -->
      <div class="container-box">
        <div class="topGG">
          <div class="ggImg">
            <img :src="picImg" alt srcset />
          </div>
          <p>
            <span style="font-size:16px !important">¥</span>
            {{picPric}}
          </p>
        </div>
        <div class="guiG" v-if="guiGTit.sp1">
          <p class="gGTit">{{guiGTit.sp1}}</p>
          <div class="ggList">
            <p
              :class="{active:sign==index,PicList:true}"
              v-for="(item,index) in arrAlSp1"
              :key="index"
              @click="pickSp1(index)"
            >{{item}}</p>
          </div>
        </div>
        <div class="guiG" v-if="guiGTit.sp2">
          <p class="gGTit">{{guiGTit.sp2}}</p>
          <div class="ggList">
            <p
              :class="{active:sign1==index,PicList:true}"
              v-for="(item,index) in arrAlSp2"
              :key="index"
              @click="pickSp2(index)"
            >{{item}}</p>
          </div>
        </div>
        <div class="guiG" v-if="guiGTit.sp3">
          <p class="gGTit">{{guiGTit.sp3}}</p>
          <div class="ggList">
            <p
              :class="{active:sign2==index,PicList:true}"
              v-for="(item,index) in arrAlSp3"
              :key="index"
              @click="pickSp3(index)"
            >{{item}}</p>
          </div>
        </div>
        <div class="numberPi">
          <p>数量</p>
          <i-panel>
            <view style="padding: 16px">
              <i-input-number :value="numPic" min="1" :max="stock" @change="handleChange1" />
            </view>
          </i-panel>
        </div>
        <div class="pickButton">
          <!-- <button @click="subPic">提交</button> -->
          <div class="pTFooter2">
            <div class="tfMiddle2" @click="pushGWC">
              <!-- <p class="f1">¥249</p> -->
              <p class="f2">加入购物车</p>
            </div>
            <div class="tfRight2" v-if="!isdisable" @click="playBill">
              <!-- <p class="p1">¥249</p> -->
              <p class="p2">立即购买</p>
            </div>
            <div class="tfRight3" v-else>
              <!-- <p class="p1">¥249</p> -->
              <p class="p2">立即购买</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import card from '@/components/card' #61D2FC dbdbdb
// import countdown from "@/components/countdown";
import wxParse from "mpvue-wxparse";
export default {
  data() {
    return {
      commodityId: "", //课程id
      commodDetail: null,
      addressDefut: "",
      detailData: `<p><img src="http://pmspic-10004025.image.myqcloud.com/7380bd9e-b36b-4447-84e3-1a5cb7722139" title="http://pmspic-10004025.image.myqcloud.com/7380bd9e-b36b-4447-84e3-1a5cb7722139"/><img src="http://pmspic-10004025.image.myqcloud.com/448ee3fa-9bf3-4a3d-8f19-4e5c4d2f5718" title="http://pmspic-10004025.image.myqcloud.com/448ee3fa-9bf3-4a3d-8f19-4e5c4d2f5718"/><img src="http://pmspic-10004025.image.myqcloud.com/75c8efea-1d9e-4a04-af30-0aebe42fe726" title="http://pmspic-10004025.image.myqcloud.com/75c8efea-1d9e-4a04-af30-0aebe42fe726"/><img src="http://pmspic-10004025.image.myqcloud.com/a95dacc8-bf89-4ef7-a7a3-2710ecbfccf6" title="http://pmspic-10004025.image.myqcloud.com/a95dacc8-bf89-4ef7-a7a3-2710ecbfccf6"/><img src="http://pmspic-10004025.image.myqcloud.com/16ad6a26-1d79-4d6c-a7ec-77bbddd5870f" title="http://pmspic-10004025.image.myqcloud.com/16ad6a26-1d79-4d6c-a7ec-77bbddd5870f"/><img src="http://pmspic-10004025.image.myqcloud.com/95a11f91-1428-482b-ad8a-8686776f62e4" title="http://pmspic-10004025.image.myqcloud.com/95a11f91-1428-482b-ad8a-8686776f62e4"/><img src="http://pmspic-10004025.image.myqcloud.com/1f635bce-4cac-421a-93c9-5e7c2d93faf7" title="http://pmspic-10004025.image.myqcloud.com/1f635bce-4cac-421a-93c9-5e7c2d93faf7"/><img src="http://pmspic-10004025.image.myqcloud.com/49bd0f10-ccee-4fd7-a042-ab5719e8b070" title="http://pmspic-10004025.image.myqcloud.com/49bd0f10-ccee-4fd7-a042-ab5719e8b070"/><img src="http://pmspic-10004025.image.myqcloud.com/ad6ef7e9-3194-4d85-8e9e-e0db68d8da12" title="http://pmspic-10004025.image.myqcloud.com/ad6ef7e9-3194-4d85-8e9e-e0db68d8da12"/><img src="http://pmspic-10004025.image.myqcloud.com/64486a8f-33fc-4bd6-b3c8-4a8e9b81eb0b" title="http://pmspic-10004025.image.myqcloud.com/64486a8f-33fc-4bd6-b3c8-4a8e9b81eb0b"/><img src="http://pmspic-10004025.image.myqcloud.com/509ab8f5-d346-423d-8549-847207607248" title="http://pmspic-10004025.image.myqcloud.com/509ab8f5-d346-423d-8549-847207607248"/></p>`,
      setInt: null,
      imgUrls: [],
      chooseSize: false,
      animationData: null,
      beginYX: "", //初始的默认的选择
      guigeName: ["包装", "段位", "颜色"],
      guiGList: null,
      guiGTit: {},
      sign: 0,
      sign1: 0,
      sign2: 0,
      arrAlSp1: [],
      arrAlSp2: [],
      arrAlSp3: [],
      pickSp: [],
      signInt: 0,
      pickID: null,
      stock: null,
      picImg: null,
      picPric: null,
      numPic: 1,
      addressId: "",
      isdisable: false, //是否禁用
      sharePath:''
    };
  },
  computed: {},
  mounted() {
    // this.countTime();
  },
  components: {
    // countdown
    wxParse
  },

  methods: {
    async pushGWC() {
      wx.showToast({ title: "加入中", icon: "loading", duration: 1000 });
      const param = {
        productId: this.commodityId,
        productSkuId: this.pickID,
        quantity: this.numPic
      };
      await this.$api.user
        .doAddShopCart(param)
        .then(res => {
          wx.hideToast();
          // debugger
          // this.addressDefut = res.addressUserReceive;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async playBill() {
      // this.isdisable = true;
      // wx.navigateTo({
      //   url: `/pages/learn/pay/main` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      // });
      wx.showToast({ title: "支付中", icon: "loading", duration: 1000 });
      const param = {
        payType: "微信",
        sourceType: "微信小程序",
        addressUserReceiveId: this.addressId,
        note: "",
        invoiceId: "",
        shopOrderItemList: [
          {
            productId: this.commodityId,
            productSkuId: this.pickID,
            num: this.numPic
          }
        ]
      };
      await this.$api.user
        .shopOrder(param)
        .then(res => {
          // wx.hideToast();
          // debugger;
          const oderLine={
            orderSn:res.shopOrder.orderSn
          }
          this.$api.user
            .weChatUnifiedorder(oderLine)
            .then(res => {
              wx.hideToast();
              wx.requestPayment({
							'timeStamp': res.map.timeStamp,
							'nonceStr': res.map.nonceStr,
							'package': res.map.package,
							'signType': 'MD5',
							'paySign': res.map.paySign,
							'success': function(res) {
								console.log(res);
								// wx.redirectTo({
								// 	url: '/pages/storefk/paySuccess/main?paysign=1'
								// })
                // that.defult = 0;
                	this.isdisable = false;

							},
							'fail': function(res) {
								// wx.redirectTo({
								// 	url: '/pages/storefk/payfailure/main'
								// })
								this.isdisable = false;

							},
							'complete': function(res) {
								// console.log(res);
                // that.defult = 0;
                	this.isdisable = false;

							}
						})
              debugger;
              // this.addressDefut = res.addressUserReceive;
            })
            .catch(err => {
              console.log(err);
            });
          // this.addressDefut = res.addressUserReceive;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleChange1(e) {
      // debugger
      this.numPic = e.mp.detail.value;
    },
    subPic() {
      console.log(this.pickSp);
      const that = this;
      that.guiGList.forEach(element => {
        that.signInt = 0;
        let a = 0;
        let b = 0;
        let c = 0;
        if (element.sp1 == that.pickSp[0]) {
          a = 1;
        } else {
          a = 0;
        }
        if (element.sp2 == that.pickSp[1]) {
          b = 1;
        } else {
          b = 0;
        }
        if (element.sp3 == that.pickSp[2]) {
          c = 1;
        } else {
          c = 0;
        }
        that.signInt = a + b + c;
        // debugger
        if (that.signInt == 3) {
          that.pickID = element.id;
          that.stock = element.stock;
          that.picImg = `http://${
            that.$store.getters.options.attachment_aliyunoss_bucketname
          }.${that.$store.getters.options.attachment_aliyunoss_endpoint}${
            element.pic
          }`;
          that.picPric = element.price;
          that.beginYX = that.pickSp.join(" ");
          // debugger
        }
      });
    },
    pickSp1(index) {
      this.sign = index;
      this.pickSp[0] = this.arrAlSp1[index];
      this.subPic();
    },
    pickSp2(index) {
      this.sign1 = index;
      this.pickSp[1] = this.arrAlSp2[index];
      this.subPic();
    },
    pickSp3(index) {
      this.sign2 = index;
      this.pickSp[2] = this.arrAlSp3[index];
      this.subPic();
    },

    pickGG() {
      if (!this.chooseSize) {
        this.chooseSezi();
      } else {
        this.hideModal();
      }
    },
    chooseSezi() {
      // 用that取代this，防止不必要的情况发生
      var that = this;
      // 创建一个动画实例
      var animation = wx.createAnimation({
        // 动画持续时间
        duration: 500,
        // 定义动画效果，当前是匀速
        timingFunction: "ease"
      });
      // 将该变量赋值给当前动画
      that.animation = animation;
      // 先在y轴偏移，然后用step()完成一个动画
      animation.translateY(1000).step();
      // 用setData改变当前动画
      that.animationData = animation.export();
      that.chooseSize = true;
      // that.setData({
      //   // 通过export()方法导出数据
      //   animationData: animation.export(),
      //   // 改变view里面的Wx：if
      //   chooseSize: true
      // })
      // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动 滑动时间
      setTimeout(function() {
        animation.translateY(0).step();
        that.animationData = animation.export();
        // that.setData({
        //   animationData: animation.export(),
        //   clearcart: false
        // })
      }, 10);
    },
    hideModal() {
      var that = this;
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: "ease"
      });
      that.animation = animation;
      animation.translateY(700).step();
      that.animationData = animation.export();
      // that.setData({
      //   animationData: animation.export()
      // })
      setTimeout(function() {
        animation.translateY(0).step();
        that.animationData = animation.export();
        that.chooseSize = false;
        // that.setData({
        //   animationData: animation.export(),
        //   chooseSize: false
        // })
      }, 500);
    },
    goCheckAdr() {
      wx.navigateTo({
        url: "/pages/mine/address/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
    },
    async getDefaultAddress() {
      wx.showToast({ title: "", icon: "loading", duration: 1000 });
      await this.$api.user
        .getDefaultAddress()
        .then(res => {
          wx.hideToast();
          // debugger
          this.addressDefut = res.addressUserReceive;
          this.addressId = res.addressUserReceive.id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async findByProductId(id) {
      //规格
      const param = {
        productId: id
      };
      await this.$api.user
        .findByProductId(param)
        .then(res => {
          // const arrAlIn=[]
          // const arrAlSp1=[]
          // const arrAlSp2=[]
          // const arrAlSp3=[]
          // debugger
          var that = this;
          this.guiGList = res.list;
          this.guiGTit = res.shopSkuStockSp;
          // debugger
          res.list.forEach(el => {
            if (el.sp1) {
              that.arrAlSp1.push(el.sp1);
            }
            if (el.sp2) {
              that.arrAlSp2.push(el.sp2);
            }
            if (el.sp3) {
              that.arrAlSp3.push(el.sp3);
            }
          });
          if (that.arrAlSp1.length) {
            that.arrAlSp1 = that.dedupe(that.arrAlSp1);
            that.pickSp.push(that.arrAlSp1[0]);
          }
          if (that.arrAlSp2.length) {
            that.arrAlSp2 = that.dedupe(that.arrAlSp2);
            that.pickSp.push(that.arrAlSp2[0]);
          }
          if (that.arrAlSp3.length) {
            that.arrAlSp3 = that.dedupe(that.arrAlSp3);
            that.pickSp.push(that.arrAlSp3[0]);
          }
          this.subPic();

          // that.arrAlSp2=that.dedupe(that.arrAlSp2)
          // that.arrAlSp3=that.dedupe(that.arrAlSp3)
          // that.pickSp=[arrAlSp1[0],]
        })
        .catch(err => {
          console.log(err);
        });
    },
    dedupe(array) {
      return Array.from(new Set(array));
    },
    async findByIdDetail(id) {
      //详情
      const param = {
        id: id
      };
      await this.$api.user
        .findByIdDetail(param)
        .then(res => {
          // debugger
          const imgBeg = res.shopProduct.albumPics.split(",");
          var that = this;
          imgBeg.forEach(element => {
            that.imgUrls.push(
              `http://${
                that.$store.getters.options.attachment_aliyunoss_bucketname
              }.${
                that.$store.getters.options.attachment_aliyunoss_endpoint
              }${element}`
            );
          });
          this.commodDetail = res.shopProduct;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  onHide() {
    this.imgUrls = [];
    this.beginYX = "";
    this.pickSp = [];
  },
  onUnload() {
    this.imgUrls = [];
    this.beginYX = "";
    this.pickSp = [];
  },
  created() {},

  onShow() {
    this.commodityId = this.$root.$mp.query.id;
    if (this.$root.$mp.query.id) {
      this.sharePath=`/pages/learn/comdetail/main?id=${this.$root.$mp.query.id}`
      this.findByProductId(this.$root.$mp.query.id);
      this.findByIdDetail(this.$root.$mp.query.id);
      this.getDefaultAddress();
    }
  }
};
</script>

<style scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
.ptContImg {
  width: 100%;
  height: 375px;
  /* border: 1rpx solid rgba(218, 218, 218, 1); */
  background-color: bisque;
}
.ptContImg img {
  width: 100%;
  height: 100%;
}
.ptPriATimCont {
  width: 100%;
  height: 45px;
  /* background-color: #fe647e; */
}
.ptPriATim {
  width: 95%;
  margin: 0 auto;
  height: 45px;
  /* height: 50px; */
  /* border: 1rpx solid rgba(218, 218, 218, 1); */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.leftTime {
  /* width: 100px;
  height: 20px; */
  /* background-color: aquamarine; */
  margin-left: 20px;
}
.cTCont {
  font-size: 12px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  line-height: 10px;
  vertical-align: middle;
  color: #fff;
}
.cTCont span {
  display: inline-block;
  width: 23px;
  height: 23px;
  border: 1rpx solid #fff;
  margin: 5px;
  vertical-align: middle;
  line-height: 23px;
  text-align: center;
  color: #fe647e;
}
.leftPic p {
  font-size: 20px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: #fe647e;
}
.leftPic .peoplePr {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #fe647e;
  text-decoration: line-through;
}
.peopleT {
  font-size: 12px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  padding: 1px 2px;
  background-color: #fff;
  color: #fe647e !important;
  margin-left: 7px;
}
.pTTitle {
  width: 95%;
  margin: 5px auto 15px auto;
  display: flex;
  flex: 1;
  flex-direction: row;
  /* justify-content:space-between; */
  align-items: center;
}
.pTTitle p {
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: rgba(34, 34, 34, 1);
  flex: 0 0 90%;
}

.shareImg {
  width: 30px;
  height: 30px;
  overflow: hidden;
}
.shareImg img {
  width: 100%;
  height: 100%;
}
.baoZCont {
  width: 95%;
  margin: 5px auto 10px auto;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  /* justify-content:space-between; */
  align-items: center;
  border-top: 1rpx solid rgba(34, 34, 34, 0.1);
}
.baoZ {
  display: flex;
  align-items: center;
  margin-top: 7px;
}
.baoZ p {
  font-size: 12px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  padding-left: 5px;
}
.baoZIm {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fe647e;
}
.pTListShow {
  width: 95%;
  margin: 0 auto;
}
.pTShow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
.pTShowLeft {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ShowLeftImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: bisque;
}
.ShowLeftImgR {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: -5px;
  background-color: #d9d8dd;
}
.ShowLeftImg img {
  width: 100%;
  height: 100%;
}
.ShowLeftName {
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ShowLeftName .t1 {
  font-size: 14px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}

.ShowLeftName .t2 {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.5);
  margin-top: -20px;
}
.ShowLeftName .t1 span {
  color: rgb(228, 65, 65);
}
.pTShowRight button {
  background-color: #fe647e;
  height: 30px;
  color: #fff;
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  line-height: 30px;
}
.pTListShow > p {
  padding: 5px 0;
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.6);
}
.zhanwei {
  width: 100%;
  height: 10px;
  margin: 0 auto;
  background-color: #f2f2f2;
}
.GroupPlay {
  width: 95%;
  margin: 15px auto 5px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 40px;
  border-top: 1rpx solid rgba(153, 153, 153, 0.4);
}

.leftP {
  flex: 0 0 20%;
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 30px;
}
.leftM {
  flex: 0 0 75%;
  font-size: 13px;
  line-height: 30px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.5);
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
}
.leftR {
  flex: 0 0 5%;
  height: 16px;
}
.leftP2 {
  flex: 0 0 12%;
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 30px;
}
.leftM2 {
  flex: 0 0 80%;
  font-size: 13px;
  line-height: 30px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
}
.leftR2 {
  flex: 0 0 8%;
  /* height: 16px; */
  display: flex;
  justify-content: center;
  justify-content: center;
}
.leftRImg {
  width: 16px;
  height: 16px;
}
.leftRImg2 {
  width: 25px;
  height: 25px;
}
.leftRImg img,
.leftRImg2 img {
  width: 100%;
  height: 100%;
}
.GroupDz {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 50px;
  /* border-top: 1rpx solid rgba(153, 153, 153, 0.4); */
}
.GroupDz2 {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 50px;
  border-bottom: 1rpx solid rgba(153, 153, 153, 0.4);
}
.dzCont {
  /* margin-top: 10px; */
}
.tuWen {
  width: 95%;
  margin: 0 auto;
}
.showDt img {
  display: block;
  /* vertical-align:middle; */
  /* float:left; */
  margin-top: -5px;
}
.twJs {
  font-size: 16px;
  line-height: 30px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  text-align: center;
  padding: 10px;
}
.wxParse-img {
  display: flex;
}
.pTFooter {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  flex: 1;
}
.pTFooter2 {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  flex: 1;
  left: 0;
}

.tfLeft {
  flex: 0 0 15%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tfLeft p {
  font-size: 11px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.5);
}

.tfLeftImg {
  width: 26px;
  height: 26px;
  overflow: hidden;
  z-index: 99;
  /* margin-top:5px */
}
.tfLeftImg img {
  width: 100%;
  height: 100%;
}
.tfMiddle {
  flex: 0 0 27.5%;
  background-color: #f7dde6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tfMiddle2 {
  flex: 0 0 50%;
  background-color: #f7dde6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.f1 {
  font-size: 14px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: #eb6c73;
}
.f2 {
  font-size: 12px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #eb6c73;
}

.tfRight {
  flex: 0 0 27.5%;
  background-color: #eb6c73;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tfRight2 {
  flex: 0 0 50%;
  background-color: #eb6c73;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tfRight3 {
  flex: 0 0 50%;
  background-color: #8f8f8f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.p1 {
  font-size: 14px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: #fff;
}
.p2 {
  font-size: 12px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #fff;
}

/* 遮罩 */
.shadow {
  width: 100%;
  height: 100%;
  z-index: 80;
  position: absolute;
  top: 0;
  background-color: #000;
  opacity: 0.1;
}
/* 上滑高度 */
.choosen {
  width: 100%;
  height: 80%;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top-left-radius: 20rpx;
  border-top-right-radius: 20rpx;
  z-index: 98;
}
/* 内容 */
.container-box {
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 90%;
  border-radius: 15px;
  margin: 15px auto 0 auto;
  z-index: 98;
}
.topGG {
  display: flex;
  align-items: flex-end;
}
.topGG .ggImg {
  width: 120px;
  height: 140px;
  background-color: #eb6c73;
}
.topGG .ggImg img {
  width: 100%;
  height: 100%;
}
.topGG p {
  font-size: 20px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: #fe647e;
  margin-left: 20px;
}
.guiG .gGTit {
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  padding: 15px 0px;
}
.ggList {
  display: flex;
  flex-wrap: wrap;
}
.PicList {
  display: inline-block;
  font-size: 12px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  padding: 5px 15px;
  color: rgba(34, 34, 34, 0.35);
  border-radius: 20px;
  background-color: rgba(155, 154, 154, 0.1);
  margin-right: 8px;
}
.active {
  border: #eb6c73 solid 1rpx;
  color: #eb6c73;
  background-color: #fff;
}
.numberPi {
  display: flex;
  justify-content: space-between;
}
.numberPi p {
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  padding: 16px 0px;
}

button::after{
border:none;

}
input{
outline:none;
border:none;
list-style: none;
}

</style>
