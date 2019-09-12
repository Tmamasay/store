<template>
  <div class="ga_swiper">
    <swiper
      class="swiper"
      circular="true"
      indicator-dots="false"
      autoplay="false"
      interval="5000"
      duration="1000"
      v-bind:style="{height:height+'px'}"
    >
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <!-- <navigator :url="'../../'+item.jumpUrl" open-type="navigate"> -->
          <!-- <navigator url='../../pages/index/chaihb/main' open-type="navigate"> -->
          <!-- <navigator > -->
          <!-- <image :src="item.imageUrl" v-bind:style="{height:height+'px'}" @click="navjumps(item.jumpUrl)"/> -->
          <image :src="item" v-bind:style="{height:height+'px'}" />
          <!-- </navigator> -->
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
//   props: ["imgUrls"],
  data() {
    return {
     imgUrls:[],
      height: "240"
    };
  },
  mounted() {
  this.imageLoad();
  this.getAdvertise()
	
  },
  onShow() {
    this.getAdvertise()
  },
  methods: {
    navjumps(e) {
      wx.navigateTo({
        url: `/${e}`
      });
    },
    imageLoad() {
      var h = 750 / 300;
      var that = this;
      wx.getSystemInfo({
        success: function(res) {
          console.log(res.windowWidth);
          that.height = res.windowWidth / h;
        }
      });
    },
    async getAdvertise() {
      await this.$api.user.getAdvertise().then(res => {
        var that = this;
        res.list.forEach(element => {
          that.imgUrls.push(
            `http://${
              that.$store.getters.options.attachment_aliyunoss_bucketname
            }.${that.$store.getters.options.attachment_aliyunoss_endpoint}${
              element.path
            }`
          );
          // console.log()
        });
      });
    }
  }
};
</script>

<style>
.ga_swiper {
  width: 100%;
}

image {
  width: 100%;
}

.swiper image {
  width: 100%;
  height: auto;
}
</style>