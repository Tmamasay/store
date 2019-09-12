<template>
  <div>
    <div v-bind:style="{height:height+'px',}">
      <img :src="bgimg" alt srcset />
    </div>
    <div class>
      <!-- <button class="denglu" @getuserinfo="onGotUserInfo" open-type="getUserInfo">授权微信用户信息</button> -->
      <form @submit="subFormId" report-submit="true">
        <!-- <button type='primary' class="confirm" formType="submit" size='mini'>{{btnmsg}}</button> -->
        <button
          formType="submit"
          class="denglu"
          @getuserinfo="onGotUserInfo"
          open-type="getUserInfo"
        >微信登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import { setUserId } from '@/utils/auth'
export default {
  data() {
    return {
      height: "240",
      // listDt:['','','']
      bgimg:''
    };
  },
  computed: {},
  components: {},
  mounted() {
    this.bgimg=this.noneimg=`http://${ this.$store.getters.options.attachment_aliyunoss_bucketname}.${this.$store.getters.options.attachment_aliyunoss_endpoint}/attachment/20190911/4cbc12c15a654b85baf36620aff3758a.jpg`
  },
  methods: {
    imageLoad() {
      // var h = 750/300;
      var that = this;
      wx.getSystemInfo({
        success: function(res) {
          console.log(res);
          // debugger
          that.height = res.screenHeight;
        }
      });
    },
    onGotUserInfo: function(e) {
      if (!e.target.userInfo) {
        console.log("用户拒绝授权");
        return false;
      }
      // debugger;
      //换取token
      // console.log(e.target.userInfo)
      // this.$store.dispatch("putUserInfo", e.target).then(res => {
      //   console.log("用户信息保存成功------>");
      // });
      console.log(e.target);
      
      this.$store.dispatch("LoginByWX", e.target).then(res => {
        console.log("token保存成功------>");
        // debugger
        setUserId(res.userId)
      //      wx.switchTab({
      //   url: "/pages/mine/main" //我的页面
      // });
      wx.navigateBack({
          delta: 2
        });
        // that.sharekey = mpvue.getStorageSync("Admin-Token");
      });
      //   debugger
      

      //   this.$api.user
      //     .putuserinfo(e.target.userInfo)
      //     .then(res => {
      //       console.log(res);
      //       if (+res.code === 0) {
      //         wx.navigateBack({
      //           delta: 2
      //         });
      //       } else {
      //         wx.showToast({
      //           title: res.message,
      //           icon: "none",
      //           duration: 1000
      //         });
      //       }
      //     })
      //     .catch(error => {
      //       wx.showToast({
      //         title: "网络异常",
      //         icon: "none",
      //         duration: 1000
      //       });
      //     });
    }
  },

  created() {
    this.imageLoad();
    // let app = getApp()
  },

  onShow() {}
};
</script>

<style>
img {
  width: 100%;
  height: 100%;
}
.denglu {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 40px;
  z-index: 999;
  background-color: rgb(54, 156, 25);
  color: #fff;
  font-size: 15px;
  font-family: PingFang SC;
  text-align: center;
  height: 40px;
  width: 80%;
  line-height: 40px;
  border-radius: 8px;
  margin-top: 50px;
}
</style>
