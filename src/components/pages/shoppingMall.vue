<template>
  <div>
    <!-- 顶部搜索区域 -->
    <div class="search-bar">
      <van-row class="test-row">
        <van-col span='3'><img :src="locationIcon" width="80%" class="locationIcon"></van-col>
        <van-col span='16'>
          <input type="text" class="search-input" placeholder="请输入您想搜索的商品">
        </van-col>
        <van-col span='5'>
          <van-button size="mini" class="search-search">
            搜索
          </van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图区域 swipe -->
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img :src="banner.image" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type bar -->
    <div class="type-bar">
        <div  v-for="(cate,index) in category" :key="index" >
                <img :src="cate.image" width="90%" />
                <span>{{cate.mallCategoryName}}</span>
        </div>
    </div>
    <div>
      <img v-lazy="adBanner"  width="100%">
    </div>
    <!-- 商品推荐区域 -->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommed-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in recommendGoods" :key="index">
            <div class="recommed-item">
              <img :src="item.image" width="80%">
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- <swiperDefault></swiperDefault> -->

    <floor-componnent :floor-data="floor1"></floor-componnent>

    <div class="host-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!-- 这里需要一个list组件 -->
        <van-list>
          <van-row gutter="20">
            <van-col :span="12" v-for="(item, index) in hotGoods" :key="index">
              <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price" :mallPrice="item.mallPrice"></goods-info>
            </van-col>
          </van-row>
        </van-list>

      </div>
    </div>
  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import axios from 'axios'
  import swiperDefault from '../swiper/swiperDefault.vue'
  import swiperText from '../swiper/siperText.vue'
  import floorComponnent from '../component/floorComponnent.vue'
  import {toMoney} from '@/filter/moneyFilter.js'
  import goodsInfo from '../component/goodsInfoComponent.vue'
  import url from '@/serviceAPI.config.js'
  export default {
    data() {
      return {
        swiperOption:{
          slidesPerView:3
        },
        locationIcon:require('../../assets/images/location.png'),
        bannerPicArray:[],
        category:[],
        adBanner:[],
        recommendGoods:[],
        floor1:[],
        floor1_0:[],
        floor1_1:[],
        floor1_2:[],
        floor1_3:[],
        hotGoods:[], //热卖商品
      }
    },
    components: {
        swiper,
        swiperSlide,
        swiperDefault,
        swiperText,
        floorComponnent,
        goodsInfo
    },
    filters: {
      moneyFilter(money) {
        return toMoney(money);
      }
    },
    created(){
      axios({
        url: url.getShoppingMallInfo,
        methods:'get'
      })
      .then(response => {
        console.log(response);
        if(response.status == 200){
          this.category = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
          this.bannerPicArray = response.data.data.slides;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;
          this.floor1_0 = this.floor1[0];
          this.floor1_1 = this.floor1[1];
          this.floor1_2 = this.floor1[2];
          this.floor1_3 = this.floor1[3];
          this.hotGoods = response.data.data.hotGoods;
        }
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped>
/*  顶部搜索区域 */
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}
.locationIcon {
  padding-left: 0.3rem;
  padding-top: 0.1rem;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #fff;
  background-color: #e5017d;
  color: #fff;
}
.search-search {
  margin-left: .5rem;
}
  /* 轮播图区域 */
.swiper-area {
  margin-top: .1rem;
  clear: both;
  max-height: 15rem;
  overflow: hidden;
}
 /* type-bar */
 .type-bar {
   background-color: #eee;
   margin: 0 .3rem .3rem .3rem;
   border-radius: .3rem;
   font-size: 14px;
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   flex: 1;
 }
 .type-bar div {
   padding: .3rem;
   font-size: 14px;
   text-align: center;
 }
 .recommend-area {
   background-color: #fff;
   margin-top: .3rem;
 }
 .recommend-title {
   border-bottom: 1px solid #eee;
   font-size: 16px;
   padding: .2rem;
   color: #e5017d;
 }
 .recommed-body {
   margin-bottom: 1px solid #eee;
 }
 .recommed-item {
   width: 99%;
   border-right: 1px solid #eee;
   font-size: 10px;
   text-align: center;
 }
/*hot-area*/
.hot-area {
  text-align: center;
  width:20rem;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}
.hot-title {
  text-align: center;
}
</style>
