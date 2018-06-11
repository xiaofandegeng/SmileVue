<template>
  <div class="swiper-container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
           Slide {{item}} 
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>
  </div>
</template>
 
<script>
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                slide: [1,2,3,4,5,6],
                swiperOption:{
                    // direction:'vertical',
                    loop:true,
                    autoplay: true,
                    pagination:{
                        el:'.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                }
            }
        },
        components:{swiper,swiperSlide}
    }
</script>
 
<style scoped>
  .swiper-slide{
      height: 4rem;
      text-align: center;
      line-height: 4rem;
  }
  .swiper{
      height: 7rem;
      border-top:1px solid #ccc;
      border-bottom:1px solid #ccc;
  }
</style>