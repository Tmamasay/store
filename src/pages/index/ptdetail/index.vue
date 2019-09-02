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
            <span>¥</span>
            49/件
            <span class="peoplePr">¥99</span>
            <span class="peopleT">2人团</span>
          </p>
        </div>
        <div class="leftTime">
          <div class="cTCont">
            剩余
            <span class="ctH">{{cth}}</span>:
            <span class="ctF">{{ctm}}</span>:
            <span class="ctM">{{cts}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pTTitle">
      <p>大王短裤式纸尿裤XL48片加大号尿不湿号尿不湿（12kg-17kg）（维E系列）</p>
      <div class="shareImg">
        <img src="../../../../static/images/share.png" alt srcset />
      </div>
    </div>
    <div class="zhanwei"></div>
    <div class="pTCont">
      <div class="pTListShow">
        <p>1160人正在拼团，可以直接参团享受折扣~</p>
        <div class="pTShow">
          <div class="pTShowLeft">
            <div class="ShowLeftImg">
              <!-- <img src="../../../../static/images/share.png" alt="" srcset=""> -->
            </div>
            <div class="ShowLeftImgR">
              <!-- <img src="../../../../static/images/share.png" alt="" srcset=""> -->
            </div>
            <div class="ShowLeftName">
              <p class="t1">
                还差
                <span>1人</span>成团
              </p>
              <span class="t2">
                <i-count-down :target="targetTime" :clear-timer="clearTimer"></i-count-down>
              </span>
              <!-- <p class="t2"><i-count-down :target="targetTime" :clear-timer="clearTimer"></i-count-down></p> -->
            </div>
          </div>
          <div class="pTShowRight">
            <button>去参团</button>
          </div>
        </div>
        <div class="pTShow">
          <div class="pTShowLeft">
            <div class="ShowLeftImg">
              <!-- <img src="../../../../static/images/share.png" alt="" srcset=""> -->
            </div>
            <div class="ShowLeftImgR">
              <!-- <img src="../../../../static/images/share.png" alt="" srcset=""> -->
            </div>
            <div class="ShowLeftName">
              <p class="t1">
                还差
                <span>1人</span>成团
              </p>
              <span class="t2">
                <i-count-down :target="targetTime" :clear-timer="clearTimer"></i-count-down>
              </span>
              <!-- <p class="t2"><i-count-down :target="targetTime" :clear-timer="clearTimer"></i-count-down></p> -->
            </div>
          </div>
          <div class="pTShowRight">
            <button>去参团</button>
          </div>
        </div>
        
      </div>
      <div class="GroupPlay">
        <p class="leftP">拼团玩法</p>
        <p class="leftM">支付成功并且邀请一人参团，即可享受限时优惠</p>
        <div class="leftR">
          <div class="leftRImg">
            <img src="../../../../static/images/next.png" alt srcset />
          </div>
        </div>
      </div>
    </div>
    <div class="zhanwei"></div>
    <div class="dzCont">
    <div class="GroupDz2">
        <p class="leftP2">送至</p>
        <p class="leftM2">重庆市南岸区时代星光协信城7栋重庆市南岸区时代星光协信城7栋</p>
        <div class="leftR2">
          <div class="leftRImg2">
            <img src="../../../../static/images/more.png" alt srcset />
          </div>
        </div>
      </div>
      <div class="GroupDz2">
        <p class="leftP2">规格</p>
        <p class="leftM2">750ml*2瓶洗手液125g</p>
        <div class="leftR2">
          <div class="leftRImg2">
            <!-- <img src="../../../../static/images/more.png" alt srcset /> -->
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
      <div class="GroupDz2">
        <p class="leftP2">数量</p>
        <p class="leftM2">1</p>
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
        <div >
          <wxParse  :content="detailData" />
        </div>
      </div>
      <div class="pTFooter">
        <div class="tfLeft">
          <div class="tfLeftImg">
            <img src="../../../../static/images/mpt.png" alt="" srcset="">
          </div>
          <p>更多拼团</p>
        </div>
        <div class="tfMiddle">
          <p class="f1">¥249</p>
          <p class="f2">原价购买</p>
        </div>
        <div class="tfRight">
          <p class="p1">¥249</p>
          <p class="p2">2人团</p>
        </div>
        
      </div>

  </div>
</template>

<script>
// import card from '@/components/card' #61D2FC dbdbdb
// import countdown from "@/components/countdown";
import wxParse from 'mpvue-wxparse'
export default {
  data() {
    return {
      ctd: 0,
      cth: 0,
      ctm: 0,
      cts: 0,
      detailData:`<p><img src="http://pmspic-10004025.image.myqcloud.com/7380bd9e-b36b-4447-84e3-1a5cb7722139" title="http://pmspic-10004025.image.myqcloud.com/7380bd9e-b36b-4447-84e3-1a5cb7722139"/><img src="http://pmspic-10004025.image.myqcloud.com/448ee3fa-9bf3-4a3d-8f19-4e5c4d2f5718" title="http://pmspic-10004025.image.myqcloud.com/448ee3fa-9bf3-4a3d-8f19-4e5c4d2f5718"/><img src="http://pmspic-10004025.image.myqcloud.com/75c8efea-1d9e-4a04-af30-0aebe42fe726" title="http://pmspic-10004025.image.myqcloud.com/75c8efea-1d9e-4a04-af30-0aebe42fe726"/><img src="http://pmspic-10004025.image.myqcloud.com/a95dacc8-bf89-4ef7-a7a3-2710ecbfccf6" title="http://pmspic-10004025.image.myqcloud.com/a95dacc8-bf89-4ef7-a7a3-2710ecbfccf6"/><img src="http://pmspic-10004025.image.myqcloud.com/16ad6a26-1d79-4d6c-a7ec-77bbddd5870f" title="http://pmspic-10004025.image.myqcloud.com/16ad6a26-1d79-4d6c-a7ec-77bbddd5870f"/><img src="http://pmspic-10004025.image.myqcloud.com/95a11f91-1428-482b-ad8a-8686776f62e4" title="http://pmspic-10004025.image.myqcloud.com/95a11f91-1428-482b-ad8a-8686776f62e4"/><img src="http://pmspic-10004025.image.myqcloud.com/1f635bce-4cac-421a-93c9-5e7c2d93faf7" title="http://pmspic-10004025.image.myqcloud.com/1f635bce-4cac-421a-93c9-5e7c2d93faf7"/><img src="http://pmspic-10004025.image.myqcloud.com/49bd0f10-ccee-4fd7-a042-ab5719e8b070" title="http://pmspic-10004025.image.myqcloud.com/49bd0f10-ccee-4fd7-a042-ab5719e8b070"/><img src="http://pmspic-10004025.image.myqcloud.com/ad6ef7e9-3194-4d85-8e9e-e0db68d8da12" title="http://pmspic-10004025.image.myqcloud.com/ad6ef7e9-3194-4d85-8e9e-e0db68d8da12"/><img src="http://pmspic-10004025.image.myqcloud.com/64486a8f-33fc-4bd6-b3c8-4a8e9b81eb0b" title="http://pmspic-10004025.image.myqcloud.com/64486a8f-33fc-4bd6-b3c8-4a8e9b81eb0b"/><img src="http://pmspic-10004025.image.myqcloud.com/509ab8f5-d346-423d-8549-847207607248" title="http://pmspic-10004025.image.myqcloud.com/509ab8f5-d346-423d-8549-847207607248"/></p>`,
      targetTime: new Date().getTime() + 6430000,
      clearTimer: false,
      setInt: null,
      imgUrls: [
        "http://pmspic-10004025.image.myqcloud.com/05be1989-8b8d-4510-b6cc-05ad4cb6426a",
        "http://pmspic-10004025.image.myqcloud.com/8d42b5f5-4d01-4beb-ad4c-defcc94323a8",
        "http://pmspic-10004025.image.myqcloud.com/c465039a-1c43-4aad-93b9-c38e67617891"
      ]
    };
  },
  computed: {},
  mounted() {
    this.countTime();
  },
  components: {
    // countdown
    wxParse
  },

  methods: {
    countTime() {
      //获取当前时间
      //  debugger
      var date = new Date();
      var now = date.getTime();
      //设置截止时间--不兼容ios
      let tm = "2019-8-28 23:23:23";
      let endDate = new Date(tm.replace(/-/g, "/"));
      // var endDate = new Date("2019-10-22 23:23:23");
      console.log(endDate);
      var end = endDate.getTime();
      console.log(end);
      //时间差
      var leftTime = end - now;

      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        this.ctd = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        this.cth = Math.floor((leftTime / 1000 / 60 / 60) % 24) + this.ctd * 24;
        this.ctm = Math.floor((leftTime / 1000 / 60) % 60);
        this.cts = Math.floor((leftTime / 1000) % 60);
      }
      console.log(this.ctd);
      console.log(this.cth);
      //递归每秒调用countTime方法，显示动态时间效果
      this.setInt = setTimeout(this.countTime, 1000);
    }
  },
  onHide() {
    // debugger
    clearInterval(this.setInt);
  },
  onUnload() {
    // debugger
    clearInterval(this.setInt);
  },
  created() {
    // let app = getApp()
  },

  onShow() {}
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
  background-color: #fe647e;
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
}
.leftPic p {
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: #fff;
}
.leftPic .peoplePr {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #fff;
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
.pTShowRight button{
background-color: #fe647e;
height: 30px;
color: #fff;
font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  line-height: 30px
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
  justify-content: center
}
.leftRImg {
  width: 16px;
  height: 16px;
}
.leftRImg2 {
  width: 25px;
  height: 25px;
}
.leftRImg img,.leftRImg2 img {
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
.dzCont{
  /* margin-top: 10px; */

}
.tuWen{
  width: 95%;
  margin:0 auto;

}
.showDt img{
 display:block;
 /* vertical-align:middle; */
/* float:left; */
margin-top: -5px;
}
.twJs{
  font-size: 16px;
  line-height: 30px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
text-align: center;
padding: 10px
}
.wxParse-img{
  display: flex;
}
.pTFooter{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  flex: 1
}
.tfLeft{
  flex: 0 0 20%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}
.tfLeft p{
font-size: 11px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, .5);
}
.tfLeftImg{
  width: 26px;
  height: 26px;
  overflow: hidden;
  z-index: 99;
    /* margin-top:5px */
  
}
.tfLeftImg img{
  width: 100%;
  height: 100%;
}
.tfMiddle{
  flex: 0 0 35%;
  background-color: #F7DDE6;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}
.f1{
  font-size: 14px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: #EB6C73
}
.f2{
  font-size: 12px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #EB6C73
}

.tfRight{
  flex: 0 0 45%;
  background-color: #EB6C73;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}
.p1{
  font-size: 14px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: #fff
}
.p2{
  font-size: 12px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #fff
}
</style>
