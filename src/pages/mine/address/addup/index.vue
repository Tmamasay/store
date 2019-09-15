<template>
  <div class="contain">
    <i-panel title="基础用法">
      <i-input
        :value="name"
        title="收货人"
        autofocus
        placeholder="名字"
        @change="getName"
        maxlength="20"
      />
      <i-input
        :value="phone "
        type="number"
        title="联系电话"
        placeholder="请输入手机号"
        @change="getPhone"
        maxlength="11"
      />

      <picker
        @change="changeMultiPicker3"
        @columnchange="bindGradeChange"
        mode="multiSelector"
        :value="multiIndex3"
        :range="multiArray3"
      >
        <!-- <view class="tui-picker-detail">{{region[0]}} - {{region[1]}} - {{region[2]}}</view> -->

        <view class="pick-content">
          <i-input :value=" value4 " title="所在地" placeholder="请选择市区" disabled />
          <!-- <text>{{multiArray[0][multiIndex[0]].title}}，{{multiArray[1][multiIndex[1]].title}}，{{multiArray[2][multiIndex[2]].title}}</text> -->
        </view>
      </picker>
      <i-input
        :value="postCode"
        type="number"
        title="邮政编码"
        @change="getPostCode"
        placeholder="请输入邮政编码"
        maxlength="11"
      />
      <i-input
        :value="detailAddress"
        type="textarea"
        title="详细地址"
        placeholder="请输入详细地址(最多50字)"
        maxlength="50"
        @change="getDetailAddress"
      />
      <!-- <i-input :value=" value4 " title="用户信息" disabled /> -->
      <i-cell title="设为默认地址">
        <i-switch :value="defaultStatus" @change="onChange"   slot="footer"></i-switch>
      </i-cell>
    </i-panel>

    <div>
      <button class="subm" @click="keepAdr">保存</button>
      <button v-if="isshow" class="subm2" @click="doDelAdr">删除</button>
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
      isshow:false,
      defaultStatus: false, //是否为默认地址
      name: "", //收件人
      phone: "", //手机号
      postCode: "", //邮政编码
      province: "", //省、市
      city: "", //城市
      district: "", //区
      detailAddress: "", //详细地址
      value4: "", //
      editId: "",
      // 多列选择器(三级联动)列表设置,及初始化
      // multiArray3: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
      multiArray3: [[], [], []],
      adrArray3: [[], [], []],
      multiIndex3: ["北京市", "北京城区", "东城区"]
    };
  },
  created() {
    this.doDistrict("", 0);
    this.doDistrict("110000", 1);
    // this.doDistrict("110101", 2);
    // let key_token=this.$store.getters.user.token 500000
  },
  mounted() {},
  methods: {
    getName(event) {
      this.name = event.mp.detail.detail.value;
    },
    getPhone(event) {
      this.phone = event.mp.detail.detail.value;
    },
    getPostCode(event) {
      this.postCode = event.mp.detail.detail.value;
    },
    getDetailAddress(event) {
      this.detailAddress = event.mp.detail.detail.value;
    },
    changeMultiPicker3(e) {
      this.multiIndex3 = e.mp.detail.value;
      this.value4 = `${this.multiArray3[0][this.multiIndex3[0]]}${
        this.multiArray3[1][this.multiIndex3[1]]
      }${this.multiArray3[2][this.multiIndex3[2]]}`;
      // debugger
      this.province = `${this.multiArray3[0][this.multiIndex3[0]]}`;
      this.city = `${this.multiArray3[1][this.multiIndex3[1]]}`;
      this.district = `${this.multiArray3[2][this.multiIndex3[2]]}`;
    },
    onChange() {
      this.defaultStatus = !this.defaultStatus;
    },
    doDelAdr(id){
      const param={
        id: this.editId
      }
       this.$api.user
        .doDelAdr(param)
        .then(res => {
          wx.showToast({
            title: '删除成功',
            icon: "none",
            duration: 1000
          });
          setTimeout(e => {
            // wx.redirectTo({
            //   url: "/pages/mine/address/main"
            // });
             wx.navigateBack({
              delta: 1
            });
          }, 1000);
        })
        .catch(err => {
          console.log(err);
        });
      
    },
    getAdrOne(id) {
      // debugger
      const param = {
        id: id
      };
      this.$api.user
        .findById(param)
        .then(res => {
          this.name = res.addressUserReceive.name;
          this.phone = res.addressUserReceive.phone;
          this.postCode = res.addressUserReceive.postCode;
          this.defaultStatus =res.addressUserReceive.defaultStatus == 0 ? true : false;
          this.detailAddress = res.addressUserReceive.detailAddress;
          this.value4 = `${res.addressUserReceive.province}${
            res.addressUserReceive.city
          }${res.addressUserReceive.district}`;
        })
        .catch(err => {
          console.log(err);
        });
    },
    keepAdr() {
      if (!this.name) {
        wx.showToast({
          title: "请填写收件人",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.phone) {
        wx.showToast({
          title: "请填写手机号",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.value4) {
        wx.showToast({
          title: "请选择地址",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.detailAddress) {
        wx.showToast({
          title: "请填写详细地址",
          icon: "none",
          duration: 1500
        });
        return;
      }
      let param;
      if (this.editId) {
        //修改
        param = {
          id: this.editId,
          name: this.name,
          phone: this.phone,
          defaultStatus: this.defaultStatus?0:1,
          postCode: this.postCode,
          province: this.province,
          city: this.city,
          district: this.district,
          detailAddress: this.detailAddress
        };
      } else {
        param = {
          name: this.name,
          phone: this.phone,
          defaultStatus: this.defaultStatus?0:1,
          postCode: this.postCode,
          province: this.province,
          city: this.city,
          district: this.district,
          detailAddress: this.detailAddress
        };
      }

      this.$api.user
        .doAddAdr(param)
        .then(res => {
          wx.showToast({
            title: "成功",
            icon: "none",
            duration: 1000
          });
          this.name = "";
          this.phone = "";
          this.postCode = "";
          this.defaultStatus = "";
          this.detailAddress = "";
          this.value4 = "";
          setTimeout(e => {
            // wx.redirectTo({
            //   url: "/pages/mine/address/main"
            // });
             wx.navigateBack({
              delta: 1
            });
          }, 1000);
        })
        .catch(err => {
          console.log(err);
        });
    },
    async doDistrict(e, d) {
      this.multiArray3[d].splice(0);
      this.adrArray3[d].splice(0);
      const that = this;
      const param = {
        adcode: e
      };
      await this.$api.user
        .doDistrict(param)
        .then(res => {
          // debugger
          if (res.list.length < 2) {
            // debugger
            that.doDistrict(res.list[0].adcode, d + 1);
            this.multiIndex3[d] = 0;
            this.multiIndex3[d + 1] = 0;
          }
          res.list.forEach(item => {
            this.multiArray3[d].push(`${item.name}`);
            this.adrArray3[d].push(item.adcode);
          });

          // }
        })
        .catch(err => {
          console.log(err);
        });
    },
    bindGradeChange(e) {
      //改变列触发
      const adcode = this.adrArray3[e.mp.detail.column][e.mp.detail.value];
      // debugger
      this.multiIndex3[e.mp.detail.column] = e.mp.detail.value;
      this.doDistrict(adcode, e.mp.detail.column + 1);
    }
  },
  onShow() {
    this.editId = this.$root.$mp.query.id;

    if (this.$root.$mp.query.id) {
      debugger;
      this.isshow=true
      this.getAdrOne(this.$root.$mp.query.id);
    }
  },
  onHide() {
    // debugger
    this.name = "";
    this.phone = "";
    this.postCode = "";
    this.defaultStatus = "";
    this.detailAddress = "";
    this.value4 = "";
    this.isshow=false
  },
  onUnload() {
    // debugger
    this.name = "";
    this.phone = "";
    this.postCode = "";
    this.defaultStatus = "";
    this.detailAddress = "";
    this.value4 = "";
    this.isshow=false
  }
};
</script>

<style>
.subm {
  width: 70%;
  margin: 20px auto 0 auto;
  background-color: #fe647e;
  color: #fff;
}
.subm2 {
  width: 70%;
  margin: 20px auto 0 auto;
  background-color: #8b888a;
  color: #fff;
}
</style>
