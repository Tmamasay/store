<template>
  <div style="overflow: hidden;">
   <div class="search">
      <div class="imgCont">
        <img src="../../../static/images/index/search.png" alt />
      </div>
      <!-- <p>万千商品，正品保障</p> -->
      <p><input type="text" placeholder="万千商品，正品保障" v-model="search"></p>
    </div>
    <comlist v-if="splist.length" :splist="splist"></comlist>
  </div>
</template>

<script>
import comlist from "@/components/comlist";
export default {
  data () {
    return {
      // listDt:['','','']
      search:'',
      splist:[]
    }
  },
 computed:{
  },
  watch: {
       search : function (val,oldval) {
      console.log('9999999999999999999-----------------------------》')
      this.shopProductListSearch(1,50,val)
    }
  },
  components: {
    comlist
  },

  methods: {
    async shopProductListSearch(page,pageSize,subTitle){
    const param = {
        // recommandStatus: 0,
        page: page,
        pageSize: pageSize,
        subTitle:`${encodeURI(subTitle)}`
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
  }
}
</script>

<style>
.search {
  width: 90%;
  height: 34px;
  margin: 0 auto;
  border-radius: 34px;
  border: 1rpx solid rgba(218, 218, 218, 1);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.imgCont {
  width: 17px;
  height: 18px;
  margin-left: 15px
}
.imgCont img {
  width: 100%;
  height: 100%;
}
.search p {
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: rgb(34, 34, 34);
  /* line-height: 17px; */
  text-align: left;
  margin-left: 10px;
  padding-top: 1px
}
</style>
