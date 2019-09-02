<template>
  <div>
    <!--poster="{{coverImageUrl}}" -->

  <video id="myVideo" class="myVideo" :src="playUrl" autoplay='false'  controls='true'  bindended='endAction'>

    <!-- <cover-view bindtap='startFirstPlayAction' class='cover-view' wx:if="{{isShowCoverView}}"></cover-view>  -->

    <cover-view bindtap='_startFirstPlayAction' class='cover-view' wx:if="{{isShowCoverView}}">

      <cover-image class='cover-view' src="../../../../static/images/index/banner.png" mode="aspectFill"/>

      <cover-image style='position:absolute; top:50%; left:50%; width:132rpx; height:132rpx; margin:-66rpx 0 0 -66rpx; z-index:10000' src="../../../../static/images/index/play.png"/>

    </cover-view>

  </video>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data(){
    return {
      playUrl:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
    }
  }
}
</script>

<style>
.myVideo{
  width: 100%;
}
</style>
