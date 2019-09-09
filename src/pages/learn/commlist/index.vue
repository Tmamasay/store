<template>
  <div>
   <search></search>
   <comlist showPro="showPro"></comlist>
   <!-- <div class="comListCont" v-for="item in listDt" :key="item">
     <div class="comListLeft">
       <div class="listLeftImg">
         <img src="http://pmspic-10004025.image.myqcloud.com/9ce04793-4c63-4416-bbf0-3182b49d04c4" alt="" srcset="">
       </div>
     </div>
     <div class="comListMiddle">
       <p class="cLTitle">英国牛栏山婴儿奶粉（0-8月）高级配方惠氏启赋配方奶粉3段</p>
       <div class="comPric">
         <p><span>¥</span>369</p>
         <div class="GWC">
           <div class="GW">
           <img src="../../../../static/images/gw.png" alt="">
          </div>        
         </div>
       </div>
       <div class="Vlog">
         <span>自营</span>
         <span class="fangXin">放心购</span>
       </div>
     </div>
     <div class="comListRight"></div>
   </div> -->
    
  </div>
</template>

<script>
import search from "@/components/search";
import comlist from "@/components/comlist";

export default {
  data () {
    return {
      // listDt:['','','']
      showPro:[]
    }
  },
 computed:{
  },
  components: {
    search,
    comlist
  },
  mounted() {
    this.shopProductList(1,20)
  },

  methods: {
     async shopProductList(page,pageSize){
    const param = {
        recommandStatus: 0,
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

  created () {
    // let app = getApp()
  },
  
  onShow(){
  }
}
</script>

<style scoped>

</style>
