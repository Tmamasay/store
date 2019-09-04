<template>
  <div class="ContAll">
    <search></search>
    <div class="lunBo">
      <lunbo></lunbo>
    </div>
    <div class="pingTuan">
      <div class="pTHead">
        <p>超值拼团</p>
        <div class="goPT">更多拼团</div>
      </div>
      <div class="pTCont">
        <div class="pTContList" v-for="(item,index) in ptList" :key="index" @click="godetail">
          <div class="pTImg">
            <img :src="item.picurl" alt srcset />
          </div>
          <p class="pTTit">{{item.name}}</p>
          <p class="pTPic">¥{{item.groupBuyPrice}}</p>
          <p class="pTPicYJ">¥{{item.price}}</p>
        </div>
      </div>
    </div>
    <div class="tjCont">
      <p class="tj1">精选</p>
      <p class="tj2">为你推荐</p>
    </div>
    <div class="tjContent">
      <div class="tuiJian" v-for="item in showPro" :key="item.id" @click="goProTJ(item.id)">
        <div class="tjImg">
          <img :src="item.pic" alt="" srcset="">
        </div>
        <p class="titTJ">{{item.name}}</p>
        <p class="picTJ">
          <span>¥</span>{{item.price}}
        </p>
      </div>
      <!-- <div class="tuiJian">
        <div class="tjImg">
          <img src alt srcset />
        </div>
        <p class="titTJ">1664啤酒限量版本香薰礼品300盒1664啤酒限量版本香薰礼品300盒</p>
        <p class="picTJ">
          <span>¥</span>249
        </p>
      </div>
      <div class="tuiJian">
        <div class="tjImg">
          <img src alt srcset />
        </div>
        <p class="titTJ">1664啤酒限量版本香薰礼品300盒1664啤酒限量版本香薰礼品300盒</p>
        <p class="picTJ">
          <span>¥</span>249
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
// import card from '@/components/card' #61D2FC dbdbdb
import lunbo from "@/components/lunbo";
import search from "@/components/search";

export default {
  data() {
    return {
      current: "tab1",
      userInfo: "",
      imgUrls: [],
      ptList: [
        {
          category_id: 304737,
          groupBuyActiveType: "0",
          groupBuyDesc: "",
          groupBuyETime: "1566748799",
          groupBuyFree: "0",
          groupBuyId: "467100",
          groupBuyMaxNum: "4",
          groupBuyNum: "2",
          groupBuyPrice: "11800",
          groupBuySTime: "1566403200",
          groupBuySuccNum: "2",
          groupBuyTTime: "86400",
          groupBuyType: "1",
          groupBuyTypeDesc: "2人团",
          is_global: 0,
          market_price: 19800,
          multiprice: 15800,
          name:
            "HUGGIES/好奇铂金装 L72片 纸尿裤倍柔亲肤 超薄透气 尿不湿 【箱装】(9-14KG)",
          picurl:
            "http://pmspic-10004025.image.myqcloud.com/8cac1bc7-cf53-48dd-8be1-9ab2acc54f1c",
          pmdesc: "",
          pmmark: "拼团",
          preMultiPrice: 0,
          prePriceStartTime: 0,
          prePriceTheme: "",
          price: 19800,
          property1: "",
          property2: "",
          property3: "",
          property4: "",
          property5: "",
          property6: "",
          property7: "",
          property8: "",
          property9: "",
          skuid: 1183502,
          stock_num: 1,
          type: 0
        },
        {
          category_id: 304037,
          groupBuyActiveType: "0",
          groupBuyDesc: "28件套过家家玩具切切乐",
          groupBuyETime: "1566748740",
          groupBuyFree: "0",
          groupBuyId: "458221",
          groupBuyMaxNum: "5",
          groupBuyNum: "1",
          groupBuyPrice: "3990",
          groupBuySTime: "1566403200",
          groupBuySuccNum: "2",
          groupBuyTTime: "86400",
          groupBuyType: "1",
          groupBuyTypeDesc: "2人团",
          is_global: 0,
          market_price: 19800,
          multiprice: 5800,
          name:
            "【拼团价：39.9元】28件套 切切乐儿童切水果玩具女孩过家家蔬菜宝宝男孩厨房组合套装",
          picurl:
            "http://pmspic-10004025.image.myqcloud.com/9ce04793-4c63-4416-bbf0-3182b49d04c4",
          pmdesc: "",
          pmmark: "拼团",
          preMultiPrice: 0,
          prePriceStartTime: 0,
          prePriceTheme: "",
          price: 5800,
          promoName_text: "",
          property1: "",
          property2: "",
          property3: "",
          property4: "",
          property5: "",
          property6: "",
          property7: "",
          property8: "",
          property9: "",
          skuid: 1754245,
          stock_num: 1,
          type: 0
        },
        {
          category_id: 305159,
          groupBuyActiveType: "0",
          groupBuyDesc: "",
          groupBuyETime: "1566748799",
          groupBuyFree: "0",
          groupBuyId: "478207",
          groupBuyMaxNum: "3",
          groupBuyNum: "1",
          groupBuyPrice: "39900",
          groupBuySTime: "1566403201",
          groupBuySuccNum: "2",
          groupBuyTTime: "172800",
          groupBuyType: "1",
          groupBuyTypeDesc: "2人团",
          is_global: 1,
          market_price: 75000,
          multiprice: 40000,
          name:
            "2罐装│【品牌直供】新西兰/澳洲 爱他美白金版配方婴幼儿奶粉3段一周岁及以上900g(全球购)*2罐",
          picurl:
            "http://pmspic-10004025.image.myqcloud.com/3a65ef96-d96e-4750-a481-f9079b7a7a17",
          pmdesc: "",
          pmmark: "秒杀",
          preMultiPrice: 0,
          prePriceStartTime: 0,
          prePriceTheme: "",
          price: 50000,
          promoName_text: "",
          property1: "",
          property2: "",
          property3: "",
          property4: "",
          property5: "",
          property6: "",
          property7: "",
          property8: "",
          property9: "",
          skuid: 886648,
          stock_num: 1,
          type: 0
        }
      ],
      page:1,//页数
      pageSize:10,//条数
      isBottom:false,
      showPro:[]
};
  },
  computed: {},
  components: {
    lunbo,
    search
  },

  methods: {
    handleChange(e) {
      // debugger
      this.current = e.mp.detail.data.key;
    },
    goProTJ(id){
        wx.navigateTo({
        url: `/pages/learn/comdetail/main?id=${id}` 
      });
    },
    godetail() {
      wx.navigateTo({
        url: "/pages/index/ptdetail/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
    },
    async getAdvertise() {
      await this.$api.user.getAdvertise().then(res => {
        var that = this;
        res.list.forEach(element => {
          
          that.imgUrls.push(`http://${that.$store.getters.options.attachment_aliyunoss_bucketname}.${that.$store.getters.options.attachment_aliyunoss_endpoint}${element.path}`);
          // console.log()
        });
        
      });
    },
    async shopProductList(page,pageSize){
    const param = {
        recommandStatus: 1,
        page: page,
        pageSize: pageSize
      };
      await this.$api.user
        .shopProduct(param)
        .then(res => {
          if(!res.page.list.length||res.page.list.length<10){
            this.isBottom=true
          }
          var that=this
          res.page.list.forEach(element => {
            const params={
              id:element.id,
              pic:`http://${
              that.$store.getters.options.attachment_aliyunoss_bucketname
            }.${that.$store.getters.options.attachment_aliyunoss_endpoint}${
              element.pic
            }`,
              name:element.name,
              price:element.price
            }
            this.showPro.push(params)
            // debugger
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
 mounted() {
  
 },
  created() {
    // let app = getApp()
    if (!this.$store.getters.options) {
      console.log("------------>");
      console.log(this.$store.getters.options);
      this.$store.dispatch("getOptions").then(res => {
        // debugger
        console.log("域名信息保存成功------>");
        setTimeout(() => {
           this.shopProductList(1,10)
        }, 1000);
        // this.getAdvertise();
       
      });
    }else{
      // debugger
      // this.getAdvertise();
      this.shopProductList(1,10)
    }
    
  },
  onReachBottom() {
    console.log("触底了");
    if(this.isBottom){
      return
    }else{
       this.shopProductList(this.page++,this.pageSize)
    }
   
  },
  onShow() {


    // if (!this.$store.getters.options) {
    //   console.log("------------>");
    //   console.log(this.$store.getters.options);
    //   this.$store.dispatch("getOptions").then(res => {
    //     // debugger
    //     console.log("域名信息保存成功------>");
    //     this.getAdvertise();
    //   });
    // }else{
    //   this.getAdvertise();
    // }

    // wx.navigateTo({
    //         url: '/pages/login/main',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
    //     })
    // this.$api.user
    //   .getAdvertise()
    //   .then(res => {
    //     //  debugger
    //   })
    //   .catch(error => {
    //     console.log("999999");
    //     console.log(error);
    //   });
    if (!this.$store.getters.session) {
      var that = this;
      wx.login({
        success: function(res) {
          var code = res.code;
          if (code) {
            console.log("获取用户登录凭证：" + code);

            // --------- 发送凭证 ------------------
            that.$api.user
              .code2session({
                code: code
              })
              .then(res => {
                if (res.sessionId) {
                  //登录获取token
                  that.$store
                    .dispatch("getSessionWX", res.sessionId)
                    .then(res => {
                      console.log("session保存成功------>");
                      // that.sharekey = mpvue.getStorageSync("Admin-Token");
                    });
                }
                //  debugger
              })
              .catch(error => {
                console.log("999999");
                console.log(error);
              });
            // ------------------------------------
          } else {
            console.log("获取用户登录态失败：" + res.errMsg);
          }
        }
      });
    }
    // }else{}
  },
  onHide() {
    // debugger
    
  },
  onUnload() {
    
    // debugger
  }
};
</script>

<style scoped>
.ContAll{
  overflow: hidden;
}
.lunBo {
  width: 90%;
  /* height: 34px; */
  margin: 15px auto;
  border-radius: 5px;
  overflow: hidden;
  /* border: 1rpx solid rgba(218, 218, 218, 1); */
}
.pingTuan {
  width: 90%;
  /* height: 208px; */
  margin: 15px auto;
  border-radius: 8px;
  border: 1rpx solid rgb(255, 255, 255);
  /* background-image: url('http://leciit.mynatapp.cc/attachment/111.png'); */
  /* background-image: url('/static/images/next.png'); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* background-color: bisque; */
}
.pingTuan .pTHead {
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.pingTuan .pTHead p {
  font-size: 21px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
}
.pingTuan .pTHead .goPT {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  /* border: 1rpx solid rgba(218, 218, 218, 1); */
  padding: 4px 8px;
  border-radius: 34px;
  background: #ffffff;
}
.pTCont {
  width: 90%;
  margin: 0 auto 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.pTCont .pTContList .pTImg {
  width: 90px;
  height: 100px;
  box-shadow: 0px 0px 5px 0px rgba(240, 206, 223, 0.3);
  /* border: 1rpx solid rgba(218, 218, 218, 1); */
  overflow: hidden;
  border-radius: 4px;
}
.pTCont .pTContList .pTImg img {
  width: 100%;
  height: 100%;
}
.pTCont .pTContList .pTTit {
  width: 90px;
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  padding-top: 10px;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
}
.pTCont .pTContList .pTPic {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: rgba(255, 110, 21, 1);
}
.pTCont .pTContList .pTPicYJ {
  text-decoration: line-through;
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.tjCont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tjCont .tj1 {
  font-size: 18px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: rgba(34, 34, 34, 1);
}
.tjCont .tj2 {
  font-size: 14px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.5);
}
.tjContent {
  display: flex;
  flex-direction: row;
  padding: 15px;
  width: 100%;
  flex-wrap: wrap;
}
.tuiJian {
  display: flex;
  width: 150px;
  flex-direction: column;
  /* align-items: center; */
  padding: 8px;
  margin: 5px;
  box-shadow: 0px 0px 10px 0px rgba(240, 206, 223, 0.3);
  border-radius: 10px;
  flex-wrap: wrap;
}
.tuiJian .titTJ {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  padding-top: 10px;
}
.tuiJian .picTJ {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 600;
  color: rgba(255, 110, 21, 1);
}
.tuiJian .picTJ span {
  font-size: 13px;
}
.tuiJian .tjImg {
  width: 140px;
  height: 150px;
   align-self:  center;
   overflow: hidden;
  /*display: flex;
  justify-content: center; */

}
.tuiJian .tjImg .img {
  width: 100%;
  height: 100%;
}
</style>
