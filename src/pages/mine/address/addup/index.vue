<template>
  <div class="contain">
    <i-panel title="基础用法">
      <i-input :value=" value1" title="收货人" autofocus placeholder="名字" />
      <i-input :value=" value2 " type="number" title="联系电话" placeholder="请输入手机号" />

       <picker @change="changeMultiPicker3"  @columnchange="bindGradeChange" mode = "multiSelector" :value="multiIndex3" :range="multiArray3">
    <!-- <view class="tui-picker-detail">{{region[0]}} - {{region[1]}} - {{region[2]}}</view> -->

        <view class="pick-content">
          <i-input :value=" value4 " title="所在地" placeholder="请选择市区" disabled />
          <!-- <text>{{multiArray[0][multiIndex[0]].title}}，{{multiArray[1][multiIndex[1]].title}}，{{multiArray[2][multiIndex[2]].title}}</text> -->
        </view>
      </picker>

      <i-input
        :value=" value3 "
        type="textarea"
        title="详细地址"
        placeholder="请输入详细地址(最多50字)"
        maxlength="50"
      />
      <!-- <i-input :value=" value4 " title="用户信息" disabled /> -->
    </i-panel>
    <div >
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
      value1: "",
      value2: "",
      value3: "",
      value4: "",
        // 多列选择器(三级联动)列表设置,及初始化
      // multiArray3: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
      multiArray3: [[], [], []],
      adrArray3: [[], [], []],
      multiIndex3: ['重庆市', '重庆城区', '南坪区']
    };
  },
  created() {
  this.doDistrict('',0) 
  this.doDistrict('500000',1)
  this.doDistrict('500100',2)
    // let key_token=this.$store.getters.user.token
  },

  methods: {
    changeMultiPicker3(e) {
      this.multiIndex3=e.mp.detail.value
      this.value4=`${this.multiArray3[0][this.multiIndex3[0]]}${this.multiArray3[1][this.multiIndex3[1]]}${this.multiArray3[2][this.multiIndex3[2]]}`
      // debugger
  },
  async doDistrict(e,d){
     this.multiArray3[d].splice(0); 
     this.adrArray3[d].splice(0); 
    const param={
          adcode: e
        }
      await this.$api.user.doDistrict(param).then(res=>{
        // debugger
        res.list.forEach(item => {
          this.multiArray3[d].push(`${item.name}`)
          this.adrArray3[d].push(item.adcode)
        });
        
      })
    },
  bindGradeChange(e){//改变列触发
  // this.multiArray3[e.mp.detail.column+1]=[];
  // this.adrArray3[e.mp.detail.column+1]=[];
    const adcode=this.adrArray3[e.mp.detail.column][e.mp.detail.value]
    // debugger
    this.doDistrict(adcode,e.mp.detail.column+1);
  }
  },
  onShow() {
      
  }
};
</script>

<style>
.subm{
  width: 70%;
  margin: 20px auto 0 auto;
 background-color: #E61A94;
 color: #fff
}
</style>
