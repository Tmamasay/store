<template>
  <div>
    <div class="inoculaCont">
      <div class="inoculaList" v-if="inoculaList.length!=0">
        <div class="inocula">
          <div class="inoculaImg">
            <!-- <img src="" alt="" srcset=""> -->
          </div>
          <p>宝宝生日:2018年5月20日</p>
        </div>
      </div>
      <div class="inoculaNone" v-else>
        <div class="inocula">
          <div class="inoculaImg">
            <!-- <img src="" alt="" srcset=""> -->
          </div>
          <p>暂无计划</p>
        </div>

      </div>
    </div>
    <div class="addPlan" @click="goAddPlan">
      <img src="../../../../static/images/add.png" alt="" srcset="">
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
              inoculaList:[1,2]
            }
          },
          created () {
            // let key_token=this.$store.getters.user.token
          
        },
        methods:{
          goAddPlan(){
             wx.navigateTo({
            url: "/pages/mine/inoculation/addcula/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
          });
          }

        },
        onShow(){
      
        }

}
</script>

<style>
.inocula{
  width: 90%;
  height: 110px;
  margin: 10px auto 0px auto;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 35px 0px rgba(88,91,117,0.17);
  border-radius:12px;
  display: flex;
  flex-direction: column;
  align-items: center

}
.inoculaImg{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-top: 10px;
  background:rgba(209,214,227,1);
}
.inocula p{
 font-size:13px;
    font-family:Noto Sans S Chinese;
    font-weight:400;
    padding: 5px;
    color: rgba(34, 34, 34, .6);
    text-align: center
}
.addPlan{
  width: 40px;
  height: 40px;
  margin: 20px auto 0 auto;
  opacity: .5;
}
.addPlan img{
  width: 100%;
  height: 100%;
} 

</style>
