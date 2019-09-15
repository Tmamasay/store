<template>
  <div class="contain">
    <div class="planZK">
      <i-panel title="我的状态">
        <i-radio-group :current="current" @change="handleFruitChange">
          <i-radio v-for="item in fruit" position="right" :key="item.id" :value="item.name"></i-radio>
        </i-radio-group>
      </i-panel>
    </div>

    <i-panel v-if="current=='宝宝'">
      <i-input :value="value1" title="宝宝昵称" autofocus placeholder="填写宝宝姓名" maxlength="20" @change="getName" />
      <picker @change="changeCountry" :value="countryIndex" :range="countryList">
        <i-input v-model="value2" title="宝宝性别" autofocus placeholder="选择宝宝性别" disabled />
        <!-- <view class="tui-picker-detail">{{countryList[countryIndex]}}</view> -->
      </picker>
      <picker mode="date" :value="date" start="2000-05-20" @change="bindDateChange">
        <i-input v-model="value3" title="宝宝生日" placeholder="请选择宝宝生日" disabled />
      </picker>
    </i-panel>
    <i-panel v-else-if="current=='怀孕中'">
      <picker mode="date" :value="date" start="2000-05-20" @change="bindDateChange">
        <i-input v-model=" value3" title="预产期" placeholder="请选择宝宝生日" disabled />
      </picker>
    </i-panel>
    <div>
      <button class="subm" @click="keepStation">保存</button>
      <button v-if="isDel" class="subm" @click="delStation">删除</button>
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
      date: "2019-08-01",
      fruit: [
        {
          id: 1,
          name: "宝宝"
        },
        {
          id: 2,
          name: "怀孕中"
        },
        {
          id: 3,
          name: "备孕中"
        },
        {
          id: 4,
          name: "暂无计划"
        }
      ],
      current: "宝宝",
      yunYuId: "",
      planCont: 1,
      countryList: ["小王子", "小公主"],
      countryIndex: "小王子",

      value1: "",
      value2: "",
      value3: "",
      isDel:false
    };
  },
  created() {
    // let key_token=this.$store.getters.user.token
  },

  methods: { 
    delStation(){
      wx.showToast({ title: "删除中", icon: "loading", duration: 1000 });
      this.$api.user
        .dostationDel({
          id: this.yunYuId
        })
        .then(res => {
          wx.hideToast();
          wx.navigateBack({
          delta: 1
        });
        })
        .catch(err => {
          console.log(err);
        });

    },
   getName(event) {
      this.value1 = event.mp.detail.detail.value;
    },
    stationfindById(id) {
      wx.showToast({ title: "", icon: "loading", duration: 1000 });
      this.$api.user
        .stationfindById({
          id: id
        })
        .then(res => {
          wx.hideToast();
          this.current=res.gestation.status
          this.value1=res.gestation.babyName
          this.value2=res.gestation.babyGender
          this.value3=res.gestation.babyBirthday
          // debugger;
           
          // this.inoculaList=res.gestationList
        })
        .catch(err => {
          console.log(err);
        });
    },
    doAddStation(status) {
      wx.showToast({ title: "", icon: "loading", duration: 1000 });
      this.$api.user
        .doAddStation(status)
        .then(res => {
          wx.hideToast();
          // debugger;
          // this.inoculaList=res.gestationList
          wx.navigateBack({
          delta: 1
        });
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeMultiPicker3(e) {
      this.multiIndex3 = e.mp.detail.value;
      this.value4 = `${this.multiArray3[0][this.multiIndex3[0]]}${
        this.multiArray3[1][this.multiIndex3[1]]
      }${this.multiArray3[2][this.multiIndex3[2]]}`;
      debugger;
    },
    bindDateChange: function(e) {
      console.log("picker发送选择改变，携带值为", e.mp.detail.value);
      this.date = e.mp.detail.value;
      this.value3 = e.mp.detail.value;
      debugger;
    },
    bindGradeChange(e) {
      //改变列触发
      debugger;
    },
    keepStation(){
      const that = this;
       switch (that.current) {
        case "宝宝":
          if (that.yunYuId) {
           const params = {
              id: that.yunYuId,
              babyName: that.value1,
              babyGender: that.value2,
              babyBirthday: that.value3,
              status: that.current
            };
            that.doAddStation(params);
          } else {
           const params = {
              babyName: that.value1,
              babyGender: that.value2,
              babyBirthday: that.value3,
              status: that.current
            };
            that.doAddStation(params);
          }
          
          break;
        case "怀孕中":
          if (that.yunYuId) {
           const params = {
              id: that.yunYuId,
              expectedDate: that.value3,
              status: that.current
            };
            that.doAddStation(params);
          } else {
           const params = {
              expectedDate: that.value3,
              status: that.current
            };
            that.doAddStation(params);
          }

          break;
        case "备孕中":
          if (that.yunYuId) {
          const params = {
              id: that.yunYuId,
              status: e.mp.detail.value
            };
            that.doAddStation(params);
          } else {
           const params = {
              status: e.mp.detail.value
            };
            that.doAddStation(params);
          }

          break;
        case "暂无计划":
          if (that.yunYuId) {
           const params = {
              id: that.yunYuId,
              status: e.mp.detail.value
            };
            that.doAddStation(params);
          } else {
           const params = {
              status: e.mp.detail.value
            };
            that.doAddStation(params);
          }
          break;

        default:
          break;
      }

    },
    handleFruitChange(e) {
      debugger;
      const that = this;
      that.current = e.mp.detail.value;
      that.planCont = e.mp.detail.id;
     
    },
    changeCountry(e) {
      this.countryIndex = this.countryList[e.mp.detail.value];
      this.value2 = this.countryList[e.mp.detail.value];
    },
    handleClickItem1(e) {
      debugger;
      const index = e.mp.detail.index + 1;
    },
    handleCancel1() {
      this.visible1 = false;
    }
  },
  onShow() {
    if (this.$root.$mp.query.id) {
      this.yunYuId = this.$root.$mp.query.id;
      this.stationfindById(this.$root.$mp.query.id);
      this.isDel=true
    }
  },
  onHide() {
    // debugger
          this.value1=""
          this.value2=""
          this.value3=""
    
  },
  onUnload() {
          this.value1=""
          this.value2=""
          this.value3=""
    // debugger
  }
};
</script>

<style>
.planZK {
  width: 90%;
  margin: 10px auto 10px auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 35px 0px rgba(88, 91, 117, 0.17);
  border-radius: 12px;
}
.subm {
  width: 70%;
  margin: 20px auto 0 auto;
  background-color: #fe647e;
  color: #fff;
}
</style>
