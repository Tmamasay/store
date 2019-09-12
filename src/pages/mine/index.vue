<template>
  <div>
    <div class="contain">
      <div class="topMe">
        <img
          src="https://cmspic-10004025.image.myqcloud.com/444fc11d-1d66-452f-b059-2755a391b9f1"
          alt
          srcset
        />
      </div>
      <div class="userDetail" v-if="isLogin">
        <div class="userPic">
          <img
            :src="userInfo.avatarUrl"
            alt
            srcset
          />
        </div>
        <p>{{userInfo.nickName}}</p>
      </div>
      <div class="userDetail2" v-else>
        <div class="userPic" @click="login">
          <!-- <img
            src="http://pmspic-10004025.image.myqcloud.com/8cac1bc7-cf53-48dd-8be1-9ab2acc54f1c"
            alt
            srcset
          /> -->
          <p>立即登录</p>
        </div>
        
      </div>
      <div class="quickIcon">
        <div class="iconList" @click="goBill">
          <div class="iconImg">
            <img
              src="https://cmspic-10004025.image.myqcloud.com/ef9be030-60b4-11e8-b556-75e8438acf09_size_54x54"
              alt
              srcset
            />
          </div>
          <p>商品订单</p>
        </div>
        <div class="iconList">
          <div class="iconImg">
            <img
              src="https://cmspic-10004025.image.myqcloud.com/9e833590-752c-11e8-a8eb-f350fcff26cc_size_54x54"
              alt
              srcset
            />
          </div>
          <p>拼团订单</p>
        </div>
        <div class="iconList">
          <div class="iconImg">
            <img
              src="https://cmspic-10004025.image.myqcloud.com/9118c2d0-752c-11e8-a8eb-f350fcff26cc_size_54x54"
              alt
              srcset
            />
          </div>
          <p>育儿订单</p>
        </div>
        <div class="iconList">
          <div class="iconImg">
            <img
              src="https://cmspic-10004025.image.myqcloud.com/24e3b100-752d-11e8-a8eb-f350fcff26cc_size_54x54"
              alt
              srcset
            />
          </div>
          <p>兰熙客服</p>
        </div>
      </div>
      <div class="bgImg">
        <img
          src="https://cmspic-10004025.image.myqcloud.com/432d92d9-8802-4af1-9ae0-e6872eb2fd64"
          alt
          srcset
        />
      </div>
      <div class="listContent">
        <div class="listMe" @click="goInoculation">
          <div class="lmImgCo">
            <div class="lmImg">
              <img
                src="https://cmspic-10004025.image.myqcloud.com/ff355920-79e8-11e8-a26b-c724f1832d34_size_40x40"
                alt
                srcset
              />
            </div>
          </div>
          <div class="lmCont">我的孕育信息</div>
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
        <div class="listMe" @click="goAdress">
          <div class="lmImgCo">
            <div class="lmImg">
              <img
                src="https://cmspic-10004025.image.myqcloud.com/24dfcfdf-6fa6-494b-a33a-a7869fd185bd"
                alt
                srcset
              />
            </div>
          </div>
          <div class="lmCont">我的收获地址</div>
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
        <div class="listMe">
          <div class="lmImgCo">
            <div class="lmImg">
              <img
                src="https://cmspic-10004025.image.myqcloud.com/17b4ce10-ff4d-11e8-8341-a96c4c0829b1_size_60x60"
                alt
                srcset
              />
            </div>
          </div>
          <div class="lmCont">客服</div>
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
          <div class="lmCont">平台公示</div>
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
      </div>
    </div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
import { getToken,getUserinfo} from '@/utils/auth'
export default {
  components: {
    // card
  },

  data() {
    return {
      isLogin:getToken()?1:0,
      userInfo:getUserinfo()
    };
  },
  created() {
    // let key_token=this.$store.getters.user.token
  },
  methods: {
    goBill(){
      if(getToken()){
         wx.navigateTo({
        url: "/pages/mine/comOrders/main" //订单界面
      });
      }else{
        this.loginIn()

      }
     

    },
    login(){
         wx.navigateTo({
        url: "/pages/login/main" //登录页面
        });
    },
    loginIn(){
       wx.showToast({ title: "未登录", icon:"none", duration: 1000 });
       setTimeout(() => {
         wx.navigateTo({
        url: "/pages/login/main" //登录页面
        });
       }, 1000);
  
    },
    goAdress() {
      if(getToken()){
      wx.navigateTo({
        url: "/pages/mine/address/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
      }else{
        this.loginIn()
      }
    },
    goInoculation(){
        if(getToken()){
       wx.navigateTo({
        url: "/pages/mine/inoculation/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
    }else{
      this.loginIn()
    }
    }
  },
  onShow() {
    this.isLogin=getToken()?1:0
    this.userInfo=getUserinfo()
    // debugger
    console.log("0000000000000000000000000");
    console.log(getUserinfo());
  }
};
</script>

<style>
.contain {
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 600px;
}
.topMe {
  width: 100%;
  height: 150px;
  position: relative;
}
.topMe img {
  width: 100%;
  height: 100%;
}
.userDetail {
  position: absolute;
  width: 100%;
  top: 20px;
  left: 5%;
  display: flex;
  align-items: center;
}
.userDetail2 {
  position: absolute;
  width: 100%;
  top: 20px;
  /* left: 5%; */
  display: flex;
  align-items: center;
}
.userDetail p {
  font-size: 22px;
  /* width: 60px; */
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: #fff;
  margin-left: 10px;
}
.userDetail2 p {
  position: absolute;
  font-size: 13px;
  width: 60px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #fe647e;
  line-height: 60px;
  padding-left: 4px
  /* margin-left: 10px; */
}
.userDetail .userPic {
  width: 60px;
  height: 60px;
  border: 2px solid rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 35px 0px rgba(141, 141, 186, 0.24);
  border-radius: 50%;
  z-index: 99;
  overflow: hidden;
}
.userPic img{
  width: 100%;
  height: 100%;
}
.userDetail2 .userPic {
  width: 60px;
  height: 60px;
  border: 2px solid rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 35px 0px rgba(141, 141, 186, 0.24);
  border-radius: 50%;
  z-index: 99;
  /* position: absolute; */
   left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: #fff
}
.quickIcon {
  width: 90%;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 70px;
  border-radius: 5px;
  top: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 20px 0px 10px 0px;
  justify-content: space-around;
  /* align-self: center */
  /* background-color: aquamarine */
}
.iconList {
  display: flex;
  flex-direction: column;
  align-items: center;

  /* justify-content: center */
}
.iconList p {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  padding: 5px;
  color: rgba(34, 34, 34, 1);
  /* display: flex;
  flex-direction: row;
  padding: 10px; */
}
.iconImg {
  width: 30px;
  height: 30px;

  /* border-radius: 50%; */
}
.iconImg img {
  width: 100%;
  height: 100%;
}
.bgImg {
  width: 90%;
  height: 84px;
  margin: 60px auto 0 auto;
}
.bgImg img {
  width: 100%;
  height: 100%;
}
.listContent {
  margin: 20px auto 0 auto;
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
  border-bottom: 1rpx solid rgba(153, 153, 153, 0.3);
}
.listMe .lmImgCo {
  flex: 0 0 8%;
}
.listMe .lmImg {
  margin-left: 0px;
  width: 25px;
  height: 25px;
}
.listMe .lmImg img {
  width: 100%;
  height: 100%;
}
.lmCont {
  flex: 0 0 86%;
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  padding: 5px;
  color: rgba(34, 34, 34, 1);
  text-align: left;
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
</style>
