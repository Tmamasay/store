<template>
	<div class="ga_swiper">
		<swiper class="swiper" circular="true" indicator-dots="false" autoplay="false" interval="5000" duration="1000" v-bind:style="{height:height+'px'}">
			<block v-for="(item,index) in imgUrls" :key="index">
				<swiper-item >
					<!-- <navigator :url="'../../'+item.jumpUrl" open-type="navigate"> -->
					<!-- <navigator url='../../pages/index/chaihb/main' open-type="navigate"> -->
					<!-- <navigator > -->
					<!-- <image :src="item.imageUrl" v-bind:style="{height:height+'px'}" @click="navjumps(item.jumpUrl)"/> -->
					<image :src="item" v-bind:style="{height:height+'px'}"/>
					<!-- </navigator> -->
				</swiper-item>
			</block>
		</swiper>
	</div>

</template>

<script>
	export default {
		props: ['imgUrls'],
		data() {
			return {
	// 			imgUrls: [
    //   'https://cmspic-10004025.image.myqcloud.com/afd73da0-c2ec-11e9-bc6e-734758fe8035_size_750x300',
    //   'https://cmspic-10004025.image.myqcloud.com/8374cd10-c3f3-11e9-89dd-5dd7c1230183_size_750x300',
	//   'https://cmspic-10004025.image.myqcloud.com/926e9260-c3f3-11e9-89dd-5dd7c1230183_size_750x300',
	//   'https://cmspic-10004025.image.myqcloud.com/a6e331c0-c3f2-11e9-89dd-5dd7c1230183_size_750x300'
    //     ],
				height:'240'
			}
		},
		mounted(){
			this.imageLoad();
			
		},
		methods:{
			navjumps(e){
		wx.navigateTo({
				url: `/${e}`
			});
			},
			imageLoad(){
				var h = 750/300;
				var that=this;
				 wx.getSystemInfo({
				  success: function (res) {
					console.log(res.windowWidth)
					that.height=res.windowWidth/h
				  }
				 });
			}
		}
		
}
</script>

<style>
	.ga_swiper {
		width: 100%;
		
	}
	
	image {
		width: 100%
	}
	
	.swiper image {
		width: 100%;
		height: auto;
	}
</style>