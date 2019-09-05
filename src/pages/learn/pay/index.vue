<template>
  <div>
  <div class="billAdr">
        <div class="topAdr">
          <p>{{addressDefut.name}}</p>
          <p>{{addressDefut.phone}}</p>
        </div>
        <div class="bomAdr">
          <p>{{addressDefut.province}}{{addressDefut.city}}{{addressDefut.district}}{{addressDefut.detailAddress}}</p>
          <div>
            <img src="../../../../static/images/xg.png" alt srcset />
          </div>
        </div>
  </div>
  <div class="zhanwei"></div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      // listDt:['','','']
      addressDefut:null,
      addressId:null

    }
  },
 computed:{
  },
  components: {
 
  },

  methods: {
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
    
  },

  created () {
    // let app = getApp()
  },
  
  onShow(){
    this.getDefaultAddress()
    
  }
}
</script>

<style scoped>
.billAdr{
  width: 95%;
  margin: 0 auto;
  border-top: 1rpx solid rgba(153, 153, 153, 0.31);
  border-bottom: 1rpx solid rgba(153, 153, 153, 0.31);
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
.zhanwei{
  width: 100%;
}
</style>
