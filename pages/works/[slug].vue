<template>
  <section class="pb-24">
    <div class="bg-[#F4F4F4] px-[18px]">
      <div
        class="grid md:grid-cols-12 md:gap-10 gap-10 container mx-auto md:py-28 py-14"
      >
        <div class="xl:col-span-5 col-span-6">
          <img
            src="@/assets/image/temporarily/work-detail.png"
            alt=""
            class="w-full"
          />
        </div>
        <div class="xl:col-span-7 col-span-6 flex items-center justify-center">
          <div class="">
            <h3 class="font-semibold md:text-2xl text-xl md:mb-10 mb-5">
              Детали проекта
            </h3>

            <div
              class="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-3 text-sm sm:text-base"
            >
              <div class="">Клиент :</div>
              <div class="md:col-span-2">David Warner</div>
              <div class="">Категория :</div>
              <div class="md:col-span-2">Шитье</div>
              <div class="">Дата :</div>
              <div class="md:col-span-2">12 декабря 2022 г.</div>
              <div class="">статус :</div>
              <div class="md:col-span-2">Завершенный</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-[18px] md:py-20 py-14">
      <div class="container mx-auto">
        <h3 class="text-5xl mb-5">V-HTML</h3>
        <p>
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
          tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc.
          Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
          quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed,
          faucibus vel elit Integer adipiscing erat eget risus sollicitudin
          pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan
          ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
          posuere.
        </p>
      </div>
    </div>
    <div class="pl-[18px] lg:pr-[18px]">
      <div class="container mx-auto">
        <div class="flex items-center w-full md:mb-[52px] mb-8 justify-between">
          <h3
            class="xl:text-5xl md:text-4xl text-2xl text-center font-semibold"
          >
            Похожие проекты
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
          :slides-per-view="4"
          :space-between="18"
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
              slidesPerView: 4,
              spaceBetween: 23,
            },
          }"
        >
          <swiper-slide
            v-for="(work, i) in work.similar_projects"
            :key="i"
            class="slide"
          >
            <WorkCard />
          </swiper-slide>
          <div class="mt-3 w-full">
            <div class="swiper-pagination pagination"></div>
          </div>
        </swiper>
      </div>
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
import WorkCard from "@/components/works/WorkCard.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { data: work } = await apiRequest(
  `projects/${router.currentRoute.value.params.slug}`
);
</script>

<style lang="scss" scoped>
.slide {
  @media screen and (max-width: 768px) {
    width: 146px !important;
  }
}
</style>