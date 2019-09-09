<template>
  <div class="contain">
    <div class="orderList">
      <div class="delCart"><img src="../../../../static/images/del.png" alt="" srcset=""></div>
      <div class="contentOrder">
        <div class="orderLeft">
          <img src="" alt="" srcset="">
        </div>
        <p>玛丽的代价的光影的立体的粉砖三地扩散到了</p>
        <p>118.4</p>
      </div>
      <p></p>
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
      user_info: ""
    };
  },
  created() {
    // let key_token=this.$store.getters.user.token
  },
  methods: {
    switch1Change(e) {
      console.log(e);
      if (e.mp.detail.value) {

      }
    }
  },
  onShow() {}
};
</script>

<style scoped>
.contain{
  width: 95%;
  margin: 0 auto
}
.delCart{
  width: 20px;
  height: 20px;
  /* margin-top: 10px */
}
.delCart img{
  width:100%;
  height:100%;
}
.orderList{
  display: flex;
  flex-direction: column;
}
.contentOrder{
  display: flex;
  justify-content: space-between;

}
.orderLeft{
  width: 80px;
  height: 60px;
  background-color: bisque
}
</style>
