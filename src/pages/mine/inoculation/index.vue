<template>
  <div>
    <div class="inoculaCont">
      <div v-if="inoculaList.length">
      <div class="inoculaList" v-for="item in inoculaList" :key="item.id" @click="goChange(item.id)" >
        <div class="inocula" v-if="item.status=='宝宝'">
          <div class="inoculaImg">
            <img src="http://pmspic-10004025.image.myqcloud.com/9ce04793-4c63-4416-bbf0-3182b49d04c4" alt="" srcset="">
          </div>
          <p style="font-size:15px;color: rgba(34, 34, 34, 1);">{{item.babyGender}}:{{item.babyName}}</p>
          <p>宝宝生日:{{item.babyBirthday}}</p>
        </div>
         <div class="inocula" v-else-if="item.status=='怀孕中'">
          <div class="inoculaImg">
            <img src="http://pmspic-10004025.image.myqcloud.com/9ce04793-4c63-4416-bbf0-3182b49d04c4" alt="" srcset="">
          </div>
          <!-- <p style="font-size:15px;color: rgba(34, 34, 34, 1);">{{item.babyGender}}:{{item.babyName}}</p> -->
          <p>预产期:{{item.babyBirthday}}</p>
        </div>
        <div class="inocula" v-else>
          <div class="inoculaImg">
            <img src="http://pmspic-10004025.image.myqcloud.com/9ce04793-4c63-4416-bbf0-3182b49d04c4" alt="" srcset="">
          </div>
          <p style="font-size:15px;color: rgba(34, 34, 34, 1);">{{item.babyGender}}:{{item.babyName}}</p>
          <p>宝宝生日:{{item.babyBirthday}}</p>
        </div>
      </div>
      </div>
      <div v-else>
      <div class="inoculaNone" >
        <div class="inocula">
          <div class="inoculaImg">
            <!-- <img src="" alt="" srcset=""> -->
          </div>
          <p>暂无计划</p>
        </div>
      </div>
    </div>
    </div>
    <div class="addPlan" @click="goAddPlan">
      <img src="../../../../static/images/add.png" alt srcset />
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
      inoculaList: []
    };
  },
  created() {
    // let key_token=this.$store.getters.user.token
  },
  methods: {
    goChange(id){
      wx.navigateTo({
        url: `/pages/mine/inoculation/addcula/main?id=${id}` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });

    },
    goAddPlan() {
      wx.navigateTo({
        url: "/pages/mine/inoculation/addcula/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
    },
    gestation() {
      wx.showToast({ title: "", icon: "loading", duration: 1000 });
      this.$api.user
        .gestation()
        .then(res => {
          wx.hideToast();
          // debugger
          this.inoculaList=res.gestationList
          
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  onShow() {
    this.gestation()
  }
};
</script>

<style>
.inocula {
  width: 90%;
  /* height: 110px; */
  margin: 10px auto 10px auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 35px 0px rgba(88, 91, 117, 0.17);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 2px
}

.inoculaImg {
  width: 70px;
  height: 70px !important;
  border-radius: 50%;
  margin-top: 10px;
  background: rgba(209, 214, 227, 1);
  overflow: hidden;
}
.inoculaImg img{
  width: 100%;
  height: 100%;
}
.inocula p {
  font-size: 13px;
  font-family: Noto Sans S Chinese;
  font-weight: 400;
  padding: 5px;
  color: rgba(34, 34, 34, 0.6);
  text-align: center;
}
.addPlan {
  width: 40px;
  height: 40px;
  margin: 20px auto 0 auto;
  opacity: 0.5;
}
.addPlan img {
  width: 100%;
  height: 100%;
}
</style>
