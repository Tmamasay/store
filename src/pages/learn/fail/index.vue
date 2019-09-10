<template>
  <div>
    <div class="successAll">
      <div class="successImg">
        <img src="../../../../static/images/fail.png" alt="" srcset="">
      </div>
    </div>
    <p class="paysuc">支付失败</p>
    <div class="gobtn">
      <form @submit="formSubmit" report-submit="true">
        <button form-type="submit" @click="payGo" :disabled="isdisabled">重新支付</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {},
  onShow() {

  },
  components: {},

  methods: {
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
     payGo(){
       wx.redirectTo({
                  	url: '/pages/mine/comOrders/main'
                  })
    
  }
  },
 

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.successImg{
  width: 102px;
  height: 106px;
  margin: 40px auto 30px auto

}
.successImg img{
  width: 100%;
  height:100%;
}
.paysuc{
  font-size:24px;
  font-family:Noto Sans S Chinese;
  font-weight:500;
  color:rgba(34,34,34,1);
  text-align: center

}
button::after {
  border: none;
}
input {
  outline: none;
  border: none;
  list-style: none;
}
.gobtn{
  width: 120px;
  margin: 50px auto 20px auto;
}
.gobtn button {
  font-size: 17px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #fff;
  border-radius: 5px;
  background-color: rgba(98,97,248,1);
}
</style>
