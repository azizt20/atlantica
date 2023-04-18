<template>
  <section id="reviews" class="pl-[18px] lg:pr-[18px]">
    <div class="container mx-auto">
      <div class="flex items-center w-full md:mb-[52px] mb-8 justify-center">
        <h3 class="xl:text-5xl md:text-4xl text-2xl text-center font-semibold">
          Отзывы клиентов
        </h3>
        <div class="flex items-center space-x-5" v-if="false">
          <button
            class="rounded-full bg-primary flex items-center justify-center p-1"
            @click="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-5 h-5 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            class="rounded-full bg-primary flex items-center justify-center p-1"
            @click="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-5 h-5 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <swiper
        :slides-per-view="3"
        :space-between="23"
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
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 23,
          },
        }"
      >
        <swiper-slide
          v-for="(review, i) in reviews"
          :key="i"
          class="slide"
        >
          <div
            class="bg-white border border-[#1614131A] rounded-lg lg:pt-[17px] lg:px-[25px] lg:pb-9 py-[14px] px-[17px]"
          >
            <div class="flex items-center lg:space-x-[18px] space-x-3">
              <div class="relative">
                <img
                  :src="review.image"
                  :alt="review[`name_${locale.alpha}`]"
                  class="lg:w-[58px] w-[46px] aspect-square rounded-full"
                />
                <span
                  class="bg-primary flex items-center justify-center rounded-full absolute right-0 bottom-0 lg:w-[22px] w-[18px] aspect-square"
                >
                  <svg
                    class="lg:w-[11px] lg:h-[7px] w-[9px] h-[5px]"
                    viewBox="0 0 11 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.1875 0.25H4.82812V3.85938L3.02344 6.69531H0.703125L1.73438 4.11719H0.1875V0.25ZM5.85938 0.25H10.5V3.85938L8.69531 6.69531H6.375L7.40625 4.11719H5.85938V0.25Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p class="font-semibold text-black text-sm lg:text-base">
                  {{ review[`name_${locale.alpha}`] }}
                </p>
                <p
                  class="text-xs lg:text-[13px] font-light text-black mt-0.5 opacity-70"
                >
                  {{ review[`position_${locale.alpha}`] }}
                </p>
              </div>
            </div>
            <p class="mt-6 text-black text-opacity-70 text-xs lg:text-sm">
              {{ review[`description_${locale.alpha}`] }}
            </p>
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
    locale() {
      let storageLocale;
      if (process.client) {
        storageLocale = localStorage.getItem("locale")
          ? JSON.parse(localStorage.getItem("locale"))
          : undefined;
      }
      return storageLocale || { name: "Русский", alpha: "ru" };
    },
  },
};
</script>

<script setup>
const { data: reviews } = await apiRequest("review");
</script>
<style lang="scss" scoped>
.slide {
  @media screen and (max-width: 768px) {
    max-width: 300px !important;
  }
}
</style>
