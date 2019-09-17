<template>
  <div>
    <div class="imgTop">
      <!-- <img src="" alt="" srcset=""> -->
      <div class="moneyTotal">
        <p class="tx1">可提现余额</p>
        <p class="tx2">{{pageData.ketixian}}</p>
        <p
          class="tx3"
        >（累计总返佣¥{{pageData.fanyongzhong+pageData.yifanyong}}，已提现¥{{pageData.yifanyong}}）</p>
      </div>
    </div>
    <div class="showMoneLine">
      <div>
        <p class="leftTX">
          <span></span>已返佣
        </p>
        <p class="leftTXMone">
          <span>￥</span>
          {{pageData.yifanyong}}
        </p>
      </div>
      <div>
        <p class="rightTX">
          <span></span>返佣中
        </p>
        <p class="rightTXMone">
          <span>￥</span>
          {{pageData.fanyongzhong}}
        </p>
      </div>
    </div>
    <div class="listMe">
      <div class="lmImgCo">
        <div class="lmImg">
          <img
            src="https://cmspic-10004025.image.myqcloud.com/980e6140-e943-11e8-aec5-f70f55dc7de2_size_135x135"
            alt
            srcset
          />
        </div>
      </div>
      <div class="lmCont">收益明细</div>
      <div class="lmRightCo">
        <div class="lmRight">
          <img
            src="https://cmspic-10004025.image.myqcloud.com/940c32c5-ffea-4030-8c23-6ca9a18280a0"
            alt
            srcset
          />
        </div>
      </div>
    </div>
    <div class="listMe" @click="totRecord">
      <div class="lmImgCo">
        <div class="lmImg">
          <img
            src="https://cmspic-10004025.image.myqcloud.com/980e6140-e943-11e8-aec5-f70f55dc7de2_size_135x135"
            alt
            srcset
          />
        </div>
      </div>
      <div class="lmCont">提现记录</div>
      <div class="lmRightCo">
        <div class="lmRight">
          <img
            src="https://cmspic-10004025.image.myqcloud.com/940c32c5-ffea-4030-8c23-6ca9a18280a0"
            alt
            srcset
          />
        </div>
      </div>
    </div>
    <div>
      <i-panel>
        <i-input
          :value="wechatNubmer"
          title="微信号"
          autofocus
          placeholder="请输入微信号"
          maxlength="50"
          @change="getWechatNubmer"
        />
      </i-panel>
      <form @submit="formSubmit" report-submit="true">
        <button formType="submit" class="denglu" @click="getCommission">全部提现</button>
      </form>
      <p class="intuSao">提现申请后，1-7个工作日到账</p>
    </div>
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
      pageData: "",
      wechatNubmer: null //微信号
    };
  },
  created() {},
  methods: {
    totRecord() {
      // debugger;
      wx.navigateTo({
        url: "/pages/mine/commission/comdetail/main" //登录页面
      });
    },
    getWechatNubmer(event) {
      this.wechatNubmer = event.mp.detail.detail.value;
    },
    getCommission() {
      if (!this.wechatNubmer) {
        wx.showToast({
          title: "请输入微信号",
          icon: "none",
          duration: 1000
        });
        return false;
      }
      this.$api.user
        .bonusApply({
          weChat: this.wechatNubmer
        })
        .then(res => {
          debugger;
          wx.showToast({
            title: "提交申请成功",
            icon: "success",
            duration: 1000
          });
          
          // wx.hideToast();
          // debugger
          // this.addressDefut2 = res.addressUserReceive;
          // this.addressId2 = res.addressUserReceive.id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    formSubmit(e) {
      const formlist = [];
      formlist.push(e.mp.detail.formId);
      const parms = {
        formIds: formlist
      };
      this.$api.user
        .doAddFormIds(parms)
        .then(res => {
          debugger;
          // wx.hideToast();
          // debugger
          // this.addressDefut2 = res.addressUserReceive;
          // this.addressId2 = res.addressUserReceive.id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async pyramidUserHistory() {
      wx.showToast({ title: "", icon: "loading", duration: 1000 });
      await this.$api.user
        .pyramidUserHistory()
        .then(res => {
          wx.hideToast();
          // debugger
          this.pageData = res.pyramidUserHistoryCount;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  onShow() {
    this.pyramidUserHistory();
  }
};
</script>

<style scoped>
.imgTop {
  width: 100%;
  height: 275px;
  background: #fe647e;
  border-radius: 0px 0px 20px 20px;
  /* position: relative */
}
.showMoneLine {
  width: 93%;
  margin: -40px auto 0 auto;
  height: 90px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 50px 0px rgba(58, 118, 206, 0.1);
  border-radius: 15px;
  z-index: 999999;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding: 10px; */
}
.leftTX {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  /* line-height:26px; */
}
.leftTX span {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: rgba(248, 29, 68, 1);
  border-radius: 50%;
  margin-right: 5px;
}
.leftTXMone,
.rightTXMone {
  font-size: 22px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  padding-top: 5px;
}
.leftTXMone span,
.rightTXMone span {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
}
.rightTX {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
.rightTX span {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: rgba(247, 169, 50, 1);
  border-radius: 50%;
  margin-right: 5px;
}
.moneyTotal {
  /* position: absolute; */
  
  /* left: 0;
  right: 0;
  bottom: 0;
  margin: auto; */
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 60px;
}
.tx1 {
  font-size: 17px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
.tx2 {
  font-size: 48px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  /* line-height:26px; */
}
.tx3 {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  opacity: 0.5;
}

.listMe {
  width: 90%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  top: 200px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  z-index: 9999999
  /* border-bottom: 1rpx solid rgba(153, 153, 153, 0.3); */
}
.listMe .lmImgCo {
  flex: 0 0 8%;
}
.listMe .lmImg {
  margin-left: 0px;
  width: 30px;
  height: 30px;
}
.listMe .lmImg img {
  width: 100%;
  height: 100%;
}
.lmCont {
  flex: 0 0 86%;
  font-size: 17px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  padding: 5px;
  color: rgba(34, 34, 34, 1);
  text-align: left;
  margin-left: 5px;
}
.lmRightCo {
  flex: 0 0 6%;
}
.lmRight {
  margin-right: 0px;

  width: 9px;
  height: 18px;
}
.lmRight img {
  width: 100%;
  height: 100%;
}
.denglu {
  /* position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto; */
  margin-bottom: 50px;
  z-index: 999;
  background-color: #fe647e;
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  font-family: Noto Sans S Chinese;
  text-align: center;
  height: 50px;
  width: 80%;
  margin: 0 auto;
  box-shadow: 0px 8px 20px 0px rgba(236, 154, 175, 0.2);
  border-radius: 49px;
  line-height: 50px;
  margin-top: 120px;
}
.intuSao {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 46px;
  text-align: center;
}
</style>
