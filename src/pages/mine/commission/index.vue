<template>
<div>
 <div class="imgTop">
   <!-- <img src="" alt="" srcset=""> -->
   <div class="moneyTotal">
     <p class="tx1">可提现余额</p>
     <p class="tx2">80000</p>
     <p class="tx3">（累计总返佣¥128.00，已提现¥48.00）</p>
   </div>
 </div>
 <div class="showMoneLine">
   <div>
     <p class="leftTX"><span></span>已返佣</p>
     <p  class="leftTXMone"><span>￥</span>1500.00</p>
   </div>
   <div>
     <p class="rightTX"><span></span>已返佣</p>
     <p class="rightTXMone"><span>￥</span>1500.00</p>
   </div>
 </div>
  <div class="listMe">
          <div class="lmImgCo">
            <div class="lmImg">
              <img
                src="https://cmspic-10004025.image.myqcloud.com/980e6140-e943-11e8-aec5-f70f55dc7de2_size_135x135"
                alt
                srcset
              />
            </div>
          </div>
          <div class="lmCont">收益明细</div>
          <div class="lmRightCo">
            <div class="lmRight">
              <img
                src="https://cmspic-10004025.image.myqcloud.com/940c32c5-ffea-4030-8c23-6ca9a18280a0"
                alt
                srcset
              />
            </div>
          </div>
        </div>
        <div class="listMe">
          <div class="lmImgCo">
            <div class="lmImg">
              <img
                src="https://cmspic-10004025.image.myqcloud.com/980e6140-e943-11e8-aec5-f70f55dc7de2_size_135x135"
                alt
                srcset
              />
            </div>
          </div>
          <div class="lmCont">提现记录</div>
          <div class="lmRightCo">
            <div class="lmRight">
              <img
                src="https://cmspic-10004025.image.myqcloud.com/940c32c5-ffea-4030-8c23-6ca9a18280a0"
                alt
                srcset
              />
            </div>
          </div>
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
              user_info:''
            }
          },
          created () {
          
        },
        onShow(){
      
        }

}
</script>

<style scoped>
.imgTop{
  width: 100%;
  height: 275px;
  background:#fe647e;
border-radius:0px 0px 20px 20px;
/* position: relative */


}
.showMoneLine{
  width:93%;
  margin: -40px auto 0 auto;
  height:90px;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 50px 0px rgba(58,118,206,0.1);
  border-radius:15px;
  z-index: 999999;
  margin-bottom: 20px;
  display: flex;
  justify-content:space-around;
  align-items: center;
  /* padding: 10px; */

}
.leftTX{
  font-size:13px;
font-family:Noto Sans S Chinese;
font-weight:500;
color:rgba(153,153,153,1);
/* line-height:26px; */
}
.leftTX span{
  display: inline-block;
  width:5px;
  height:5px;
  background:rgba(248,29,68,1);
  border-radius:50%;
  margin-right: 5px
}
.leftTXMone,.rightTXMone{
  font-size:22px;
font-family:Noto Sans S Chinese;
font-weight:500;
color:rgba(34,34,34,1);
padding-top: 5px
}
.leftTXMone span,.rightTXMone span{
  font-size:15px;
font-family:Noto Sans S Chinese;
font-weight:500;
color:rgba(34,34,34,1);

}
.rightTX{
  font-size:13px;
font-family:Noto Sans S Chinese;
font-weight:500;
color:rgba(153,153,153,1);
}
.rightTX span{
  display: inline-block;
  width:5px;
  height:5px;
 background:rgba(247,169,50,1);
  border-radius:50%;
  margin-right: 5px
}
.moneyTotal{
  position: absolute;
  top:60px;
   left: 0;
   right: 0;
   bottom: 0;
   margin:auto;

}
.tx1{
  font-size:17px;
  font-family:Noto Sans S Chinese;
  font-weight:400;
  color:rgba(255,255,255,1);
  text-align: center
  }
  .tx2{
    font-size:48px;
    font-family:Noto Sans S Chinese;
    font-weight:500;
    color:rgba(255,255,255,1);
    text-align: center
    /* line-height:26px; */
  }
  .tx3{
    font-size:13px;
    font-family:Noto Sans S Chinese;
    font-weight:500;
    color:rgba(255,255,255,1);
    text-align: center;
    opacity:0.5;
  }

  .listMe {
  width: 90%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  top: 200px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1rpx solid rgba(153, 153, 153, 0.3); */
}
.listMe .lmImgCo {
  flex: 0 0 8%;
}
.listMe .lmImg {
  margin-left: 0px;
  width: 30px;
  height: 30px;
}
.listMe .lmImg img {
  width: 100%;
  height: 100%;
}
.lmCont {
  flex: 0 0 86%;
  font-size: 17px;
  font-family: Noto Sans S Chinese;
  font-weight: 500;
  padding: 5px;
  color: rgba(34, 34, 34, 1);
  text-align: left;
  margin-left: 5px;
}
.lmRightCo {
  flex: 0 0 6%;
}
.lmRight {
  margin-right: 0px;

  width: 9px;
  height: 18px;
}
.lmRight img {
  width: 100%;
  height: 100%;
}
</style>
