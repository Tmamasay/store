<template>
  <div>
   <search></search>
   <comlist v-if="splist.length" :splist="splist"></comlist>
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
      splist:[]
      // showProA:[]
    }
  },
 computed:{
  },
  components: {
    search,
    comlist
  },
  mounted() {
    // this.shopProductList(1,20)
  },

  methods: {
     async shopProductList(page,pageSize,id){
    const param = {
        recommandStatus: 0,
        page: page,
        pageSize: pageSize,
        productCategoryId:id
      };
      await this.$api.user
        .shopProduct(param)
        .then(res => {
          this.splist=[]
          if(!res.page.list.length||res.page.list.length<10){
            this.isBottom=true
          }
          var that=this
          if(res.page.list.length){       
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
            this.splist.push(params)
            // debugger
          });
          }else{
            this.splist=[]
          }
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
   if (this.$root.$mp.query.id) {
    this.shopProductList(1,20,this.$root.$mp.query.id)
   }

  }
}
</script>

<style scoped>

</style>
