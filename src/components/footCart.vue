<template>
  <div>
    <div class="goPayCart">
     <p>合计：<span style="font-size:18px">0</span></p>
     <div class="goPayNum">
     <form @submit="formSubmit" report-submit="true">
          <button form-type="submit" @click="payMoney" :disabled="isdisabled">去结算())</button>
          </form>

     </div>
   </div>
  </div>
</template>

<script>
export default {
   props: ['cartPick'],
  data () {
    return {
      // listDt:['','','']
      showPro:[]
    }
  },
 computed:{
  },
  components: {
  },
  mounted() {
  },

  methods: {
     doPrice(list){
    this.$api.user
       .doPrice(
          {
            ids:list
          }
        )
        .then(res => {
          const that=this
          that.cartPick=res
      //   const checkListCart=[]
      // that.sumPrice=res.price;
      // that.sumPromotionPrice=res.promotionPrice;
      // that.num=res.shopCartItemList.length;
      //  res.shopCartItemList.forEach(el => {  
      //   //  debugger
      //    const param={
      //      productId:el.productId,
      //      productSkuId:el.productSkuId,
      //      num:el.quantity,      
      //    }
      //   checkListCart.push(param)
      // });
          
          
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
  }
}
</script>

<style>
.goPayCart{
  
  width: 100%;
  height: 50px;
  position: fixed !important;
  display: flex;
   flex: 1;
   align-items: center;
  bottom: 0px;
  box-shadow: 0px 0px 5px 0px rgba(240, 206, 223, 0.3);
  z-index: 9999999 !important;
  background-color: #fff;
}
.goPayCart p{
  flex: 0 0 60%;
  font-size: 16px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  padding-left: 15px
}
button::after {
  border: none;
}
input {
  outline: none;
  border: none;
  list-style: none !important;
}
.goPayNum{
flex: 0 0 40%;
background-color: #eb6c73;
padding: 0;
height: 50px
}
.goPayNum button{
  
  font-size: 15px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  color: #fff;
  /* border-radius: 20px; */
  background-color: #eb6c73;
  border-radius: 0px;
  height: 50px;
  line-height: 50px
}
</style>
