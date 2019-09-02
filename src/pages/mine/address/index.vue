<template>
  <div>
    <div class="adressCont">
      <div class="adressList" v-if="adressList.length!=0">
        <div class="topAdr">
          <p>程旭</p>
          <p>18883630318</p>
        </div>
        <div class="bomAdr">
          <p>重庆市重庆市重庆市重庆市重庆市重庆市重庆市重庆市重庆市重庆市重庆市重庆市重庆市重庆市重庆市重庆市</p>
          <div>
            <img src="../../../../static/images/xg.png" alt="" srcset="">
          </div>
        </div>
      </div>
      <div class="adressList" v-if="adressList.length!=0">
        <div class="topAdr">
          <p>程旭</p>
          <p>18883630318</p>
        </div>
        <div class="bomAdr">
          <p>重庆市重庆市重庆市重庆市</p>
          <div>
            <img src="../../../../static/images/xg.png" alt="" srcset="">
          </div>
        </div>
      </div>
      <div class="adressNone" v-else>
        <div class="adrNonImg">
          <!-- <img src="" alt="" srcset=""> -->
        </div>
        <p>你还没有收货地址，快去添加吧！</p>
      </div>
    </div>
    <div class="adressButon">
      <button class="addRess" @click="addAdress">新增加收货地址</button>
      <button class="getRess">微信添加</button>
    </div>
    
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

export default {
          components: {
            // card
          },

          data () {
            return {
              adressList:['']
            }
          },
          created () {
            // let key_token=this.$store.getters.user.token
          
        },
        methods:{
          addAdress(){
             wx.navigateTo({
            url: "/pages/mine/address/addup/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
          });
          }

        },
        onShow(){
      
        }

}
</script>

<style>
.adressCont{
  width: 95%;
  margin: 0  auto;
  
}
.adressNone{
  width: 100%;
}
.adressList{
  border-bottom: 1rpx solid rgba(153, 153, 153, 0.31);
}
.adressNone p{
  font-size:13px;
    font-family:Noto Sans S Chinese;
    font-weight:400;
    padding: 5px;
    color: rgba(34, 34, 34, .6);
    text-align: center
}
.adrNonImg{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0  auto;
  background-color: blueviolet
}
.adressButon{
  display: flex;
  justify-content: space-around;
  align-items: center;
   margin: 20px  auto 0 auto; 
}
.addRess{
  background-color: #E61A94;
  color: #fff;
  width: 150px;
   font-size:15px;
    font-family:Noto Sans S Chinese;
    font-weight:400;
}
.getRess{
  background-color: #44BB5C;
  color: #fff;
   width: 150px;
    font-size:15px;
    font-family:Noto Sans S Chinese;
    font-weight:400;
}
.topAdr{
  display: flex;
  justify-content:space-between;
  align-items: center;
  font-size:16px;
    font-family:Noto Sans S Chinese;
    font-weight:400;
     margin-top: 5px;
      
}
.bomAdr{ 
   display: flex;
  /* justify-content:space-between;
   */
   flex: 1;
  align-items: center;
  font-size:14px;
    font-family:Noto Sans S Chinese;
    font-weight:400;
    color: rgba(34, 34, 34, .6);
    margin-top: 10px;
   margin-bottom: 10px;
   
}
.bomAdr p{
  flex: 0 0 90%;
  
}
.bomAdr div{
  width: 20px;
  height: 20px;
  margin-right: 10px
}
.bomAdr img{
  width: 100%;
  height: 100%;
}

</style>
