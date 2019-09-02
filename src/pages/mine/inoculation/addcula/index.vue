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
      <i-input :value=" value1" title="宝宝昵称" autofocus placeholder="填写宝宝姓名" />
      <picker @change="changeCountry" :value="countryIndex" :range="countryList">
        <i-input :value=" value2" title="宝宝性别" autofocus placeholder="选择宝宝性别" disabled />
        <!-- <view class="tui-picker-detail">{{countryList[countryIndex]}}</view> -->
      </picker>
      <picker mode="date" :value="date" start="2000-05-20" @change="bindDateChange">
        <i-input :value=" value3" title="宝宝生日" placeholder="请选择宝宝生日" disabled />
      </picker>
    </i-panel>
    <i-panel v-else-if="current=='怀孕中'">
      <picker mode="date" :value="date" start="2000-05-20" @change="bindDateChange">
        <i-input :value=" value3" title="预产期" placeholder="请选择宝宝生日" disabled />
      </picker>
      </i-panel>
    <div>
      <button class="subm">保存</button>
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
      current: '宝宝',
      planCont:1,
      countryList: ["男", "女"],
      countryIndex: "男",

      value1: "",
      value2: "",
      value3: ""
    };
  },
  created() {
    // let key_token=this.$store.getters.user.token
  },

  methods: {
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
    handleFruitChange(e) {
      this.current = e.mp.detail.value;
      this.planCont= e.mp.detail.id;
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
  onShow() {}
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
  background-color: #e61a94;
  color: #fff;
}
</style>
