<template>
  <div>
    <div class="showWl">
      <p>运单号：<span>{{deliverySn}}</span></p>
      <p>国内承运人：<span>{{deliveryCompany}}</span></p>
    </div>
    <div class="wuliuList">
    <i-steps :current="wuLiList.length" direction="vertical">
      <i-step v-for="item in wuLiList" :key="item">
        <view slot="title">{{item.time}}</view>
        <view slot="content">{{item.status}}</view>
      </i-step>
      <!-- <i-step>
        <view slot="title">进行中</view>
        <view slot="content">这里是该步骤的描述信息</view>
      </i-step>
      <i-step>
        <view slot="title">错误</view>
        <view slot="content">这里是该步骤的描述信息</view>
      </i-step> -->
    </i-steps>
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
      verticalCurrent: 2,
      wuLiList:[],
      deliveryCompany:'',//承运人
      deliverySn:'' //快递号

    };
  },
  created() {
    // let key_token=this.$store.getters.user.token
  },
  methods: {
    getWl(no,type) {
      const that=this
      wx.showToast({ title: "查询中", icon: "loading", duration: 1000 });
      wx.request({
        url: `https://wuliu.market.alicloudapi.com/kdi?no=${no}&type=${type}`, //仅为示例，并非真实的接口地址
        header: {
          "Authorization": "APPCODE 3563dc03949841a882b747ae4def59e3" // 默认值
        },
        success: function(res) {
          if(+res.data.status===0){
             wx.hideToast();
          that.wuLiList=res.data.result.list
          console.log(res.data);
        }else{
           wx.hideToast();
           wx.showToast({ title:res.data.msg, icon: "none", duration: 2000 });
           setTimeout(() => {
              wx.hideToast();
           }, 2000);
        }

          }
        
      });
    }
  },
  onShow() {
    if(this.$root.$mp.query.deliverySn){
      this.deliveryCompany=this.$root.$mp.query.deliveryCompany
      this.deliverySn=this.$root.$mp.query.deliverySn
        this.getWl(this.$root.$mp.query.deliverySn,'')
    }
    
  }
};
</script>

<style>
.wuliuList{
  width: 95%;
  margin:20px auto 0 auto

}
.showWl{
  width: 90%;
  margin:10px auto 0 auto;
  font-size: 14px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.6);
  padding: 5px 0px 

}
.showWl span{
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 0.6);
 padding: 5px 0px 
}
</style>
