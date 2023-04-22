<template>
  <div>
    <swiper @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide v-for="(banner, i) in banners" :key="i">
        <img :src="banner.image" :alt="banner + i" class="w-full h-auto" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
      activeIndex: 0,
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    onSlideChange() {
      this.activeIndex = this.swiper.activeIndex;
    },
    next() {
      this.swiper.slideNext();
    },
    prev() {
      this.swiper.slidePrev();
    },
  },
};
</script>
<script setup>
const { data: banners } = apiRequest("banner");
</script>
