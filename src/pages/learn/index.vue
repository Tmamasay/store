<template>
  <div class="contianL">
    <search></search>
    <div class="fLContain">
      <scroll-view scroll-y="true" :style="{height:height+'px'}" @scrolltolower="loadMore">
        <div class="fenLei">
          <i-tabs :current="current" @change="handleChange">
            <i-tab :title="item.name" v-for="item in titleList" :key="item.id" @click="shopProductCategoryList(item.id)"></i-tab>
            <!-- <i-tab key="tab2" title="奶粉尿裤"></i-tab>
    <i-tab key="tab3" title="辅食零食"></i-tab>
    <i-tab key="tab4" title="童装童鞋"></i-tab>
    <i-tab key="tab5" title="家纺"></i-tab>
    <i-tab key="tab6" title="喂养洗护"></i-tab>
    <i-tab key="tab7" title="孕产用品"></i-tab>
    <i-tab key="tab8" title="育儿服务"></i-tab>
            <i-tab key="tab9" title="成长加"></i-tab>-->
          </i-tabs>
        </div>
      </scroll-view>
      <div class="fLcont">
        <div class="fLontain">
          <div class="sPList" v-for="item in nodeList" :key="item.id" @click="goComList(item.id)">
            <div class="sPImg">
              <img :src="item.icon" alt="" srcset="">
            </div>
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
import search from "@/components/search";
export default {
  components: {
    // card
    search
  },

  data() {
    return {
      current: "5015553",
			nodeList: [
      //   {
			// 	"id": 5015565,
			// 	"imageUrl": "http://pmspic-10004025.image.myqcloud.com/9ad521e8-27a6-425e-a529-a90bed855a53",
			// 	"name": "花王",
			// 	"searchUrl": "https://search.cekid.com/html?searchpath=5009785_5009791&metaattrs=55_4661&cmd=kwsearch"
			// }, {
			// 	"id": 5015561,
			// 	"imageUrl": "http://pmspic-10004025.image.myqcloud.com/066b06de-43a2-45fe-aefb-08a5aa11df8c",
			// 	"name": "贝拉米",
			// 	"searchUrl": "https://search.cekid.com/html?searchpath=5015553_5015555_5015561&metaattrs=55_4644&cmd=kwsearch"
			// }, {
			// 	"id": 5016713,
			// 	"imageUrl": "http://pmspic-10004025.image.myqcloud.com/33eb102d-6b0a-43c3-afa0-f867e433ba2f",
			// 	"name": "喜宝",
			// 	"searchUrl": "https://search.cekid.com/html?searchpath=5009785&metaattrs=55_4650&cmd=kwsearch"
			// }, {
			// 	"id": 5015571,
			// 	"imageUrl": "http://pmspic-10004025.image.myqcloud.com/3de53f94-3176-415a-bb6a-5ad0316d7fb1",
			// 	"name": "a2",
			// 	"searchUrl": "https://search.cekid.com/html?searchpath=5009785_5009787&metaattrs=55_4925&cmd=kwsearch"
			// }, {
			// 	"id": 5016741,
			// 	"imageUrl": "http://pmspic-10004025.image.myqcloud.com/10a877bf-e2b6-4ea3-ae91-8a71be84e63c",
			// 	"name": "可么多么",
			// 	"searchUrl": "https://search.cekid.com/html?searchpath=5009785&metaattrs=55_4479&cmd=kwsearch"
			// }, {
			// 	"id": 5016709,
			// 	"imageUrl": "http://pmspic-10004025.image.myqcloud.com/af8f3157-b06b-4a4d-bd4d-4e8ac8a7a0e5",
			// 	"name": "童年时光",
			// 	"searchUrl": "https://search.cekid.com/html?searchpath=5009785&metaattrs=55_4652&cmd=kwsearch"
			// }, {
			// 	"id": 5016711,
			// 	"imageUrl": "http://pmspic-10004025.image.myqcloud.com/818bd02a-b156-4c1d-9671-27c30cdf3251",
			// 	"name": "嘉宝",
			// 	"searchUrl": "https://search.cekid.com/html?searchpath=5009785&metaattrs=55_2657&cmd=kwsearch"
			// }, {
			// 	"id": 5015559,
			// 	"imageUrl": "http://pmspic-10004025.image.myqcloud.com/fda09e27-6e48-4f24-9e8a-14e45045f22c",
			// 	"name": "SWISSE",
			// 	"searchUrl": "https://search.cekid.com/html?metaattrs=55_4657&cmd=kwsearch"
			// }, {
			// 	"id": 5016715,
			// 	"imageUrl": "http://pmspic-10004025.image.myqcloud.com/e8b96b23-fa84-45d6-9be0-73e80ba70716",
			// 	"name": "尤妮佳",
			// 	"searchUrl": "https://search.cekid.com/html?searchpath=5009785&metaattrs=55_4615&cmd=kwsearch"
      // }
      ],  
      titleList:[],
      dataList: [{}, {}, {}, {}, {}],
      height: "140"
    };
  },
  created() {
    // let key_token=this.$store.getters.user.token
  },
  mounted() {
    this.imageLoad();
    this.shopProductCategory()
  },
  methods: {
     async shopProductCategory(id){
       wx.showToast({ title: "", icon: "loading", duration: 1000 });
       await this.$api.user
        .shopProductCategory({
          page: 1,
          pageSize: 20,
          parentId:id
        })
        .then(res => {
          wx.hideToast();
        //  debugger
         this.titleList=res.page.list
         this.current=res.page.list[0].id
         this.shopProductCategoryList(res.page.list[0].id)
        })
        .catch(err => {
          console.log(err);
        });

    },
    async shopProductCategoryList(id){
      const that=this
       wx.showToast({ title: "加载中", icon: "loading", duration: 1000 });
       await this.$api.user
        .shopProductCategory({
          page: 1,
          pageSize: 50,
          parentId:id
        })
        .then(res => {
          wx.hideToast();
        //  debugger
         res.page.list.forEach(element => {
            element.icon=`http://${
            that.$store.getters.options.attachment_aliyunoss_bucketname
          }.${that.$store.getters.options.attachment_aliyunoss_endpoint}${
            element.icon
          }` 
          });
          that.nodeList=res.page.list
        })
        .catch(err => {
          console.log(err);
        });

    },
    goComList(id){
      wx.navigateTo({
        url: `/pages/learn/commlist/main?id=${id}` 
      });
    },
    handleChange(e) {
      // debugger
      this.current = e.mp.detail.data.key;
    },
    imageLoad() {
      var h = 750 / 550;
      var that = this;
      wx.getSystemInfo({
        success: function(res) {
          console.log(res);
          that.height = res.windowHeight / h;
        }
      });
    }
  }
};
</script>

<style>
.contianL {
  width: 100%;
  overflow: hidden;
}
.fLContain {
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  margin-top: 10px;
  /* justify-content: center; */
}
.fenLei {
  flex: 0 0 23%;
  height: 400px;
}
.fLcont {
  flex: 0 0 77%;

  /* width: 300px */
  /* background: #F8F8F8;  */
}
.fLontain {
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  padding: 10px;
}
/* .fLontain:after {
    content: "";
    flex: auto;
 } */
.sPList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3px;
}
.sPList .sPImg {
  width: 80px;
  height: 80px;
  /* border: 1rpx solid rgba(218, 218, 218, 1); */
}
.sPList .sPImg img{
  width: 100%;
  height: 100%;
}
.sPList p {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  text-align: center;
  margin: 5px auto 5px auto;
}
</style>
