<template>
  <div>
    <div class="adressCont">
      <div v-if="adressList.length">
      <div class="adressList"  v-for="item in adressList" :key="item.id">
        <div class="topAdr">
          <p>{{item.name}}</p>
          <p>{{item.phone}}</p>
        </div>
        <div class="bomAdr">
          <p>{{item.province}}{{item.city}}{{item.district}}{{item.detailAddress}}</p>
          <div>
            <img src="../../../../static/images/xg.png" alt srcset @click="changeAdr(item.id)" />
          </div>
        </div>
          <i-cell title="默认地址">
         <i-switch :value="item.defaultStatus==0?true:false" @change="onChange(item.id,item.defaultStatus)" slot="footer"></i-switch>
         </i-cell>
      </div>
      </div>
      <div class="adressNone" v-else>
        <div class="adrNonImg">
          <!-- <img src="" alt="" srcset=""> -->
        </div>
        <p>你还没有收货地址，快去添加吧！</p>
      </div>
    </div>
    <div class="adressButon">
      <button class="addRess" @click="addAdress">新增加收货地址</button>
      <button class="getRess">微信添加</button>
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
      adressList:[],
      defaultStatus: false, //是否为默认地址
    };
  },
  created() {
    this.getAddressList()
    // let key_token=this.$store.getters.user.token
  },
  methods: {
    onChange(id,defaultStatus) {
      wx.showToast({title: '设置中', icon: 'loading', duration: 10000});
      // this.defaultStatus = !this.defaultStatus;
      const param={
        id:id,
        defaultStatus:!defaultStatus==0?0:1
      }
      this.$api.user
        .doDefaultStatus(param)
        .then(res => {
          wx.hideToast()
         this.getAddressList()
        })
        .catch(err => {
          console.log(err);
        });
      
    },
    addAdress() {
      wx.navigateTo({
        url: "/pages/mine/address/addup/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
    },
    changeAdr(id){
      wx.navigateTo({
        url: `/pages/mine/address/addup/main?id=${id}` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
    },
    async getAddressList() {
      wx.showToast({title: '', icon: 'loading', duration: 1000});
      await this.$api.user
        .addressUserReceive()
        .then(res => {
          wx.hideToast()
          this.adressList=res.list
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  onShow() {
    this.getAddressList()
  }
};
</script>

<style>
.adressCont {
  width: 95%;
  margin: 0 auto;
}
.adressNone {
  width: 100%;
}
.adressList {
  border-bottom: 1rpx solid rgba(153, 153, 153, 0.31);
}
.adressNone p {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  padding: 5px;
  color: rgba(34, 34, 34, 0.6);
  text-align: center;
}
.adrNonImg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: blueviolet;
}
.adressButon {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto 0 auto;
}
.addRess {
  background-color: #e61a94;
  color: #fff;
  width: 150px;
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
}
.getRess {
  background-color: #44bb5c;
  color: #fff;
  width: 150px;
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
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
</style>
