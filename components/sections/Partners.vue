<template>
  <section id="reviews" class="pl-[18px] lg:pr-[18px]">
    <div class="container mx-auto">
      <div class="flex items-center w-full md:mb-[52px] mb-8 justify-center">
        <h3 class="xl:text-5xl md:text-4xl text-2xl text-center font-semibold">
          Компании, которые нам доверяют
        </h3>
      </div>
      <swiper
        :slides-per-view="6"
        :space-between="48"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="modules"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class='${className}'></span>`;
          },
        }"
        :breakpoints="{
          320: {
            slidesPerView: 'auto',
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 48,
          },
        }"
      >
        <swiper-slide
          v-for="(partner, i) in partners"
          :key="i"
          class="slide !h-[72px]"
        >
          <div class="flex items-center justify-center w-full h-full">
            <img
              :src="partner.image"
              :alt="partner.name"
              class="obj-contain max-w-full max-h-full"
            />
          </div>
        </swiper-slide>
        <div class="mt-3 w-full">
          <div class="swiper-pagination pagination"></div>
        </div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
      activeIndex: 0,
      modules: [Pagination],
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
  computed: {
    mobile() {
      if (process.client) {
        return window.innerWidth < 768;
      }
      return false;
    },
  },
};
</script>

<script setup>
const { data: partners } = await apiRequest("partners");
</script>
<style lang="scss" scoped>
.slide {
  @media screen and (max-width: 768px) {
    max-width: 120px !important;
  }
}
</style>
