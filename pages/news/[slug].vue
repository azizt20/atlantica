<template>
  <section id="top" class="lg:py-16 py-10">
    <div class="px-[18px]">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-5 grid-cols-1 gap-16">
          <div class="lg:col-span-3">
            <img :src="news.image" alt="" class="w-full" />
            <div class="font-normal text-sm mt-4">
              {{
                news.created_at?.slice(0, 10) +
                " - " +
                news.created_at?.slice(11, 16)
              }}
            </div>
            <h2 class="text-3xl font-semibold mb-3 mt-5">
              {{ news["title_" + $i18n.locale] || news.title_ru }}
            </h2>

            <div class="" v-html="news['description_' + $i18n.locale] || news.description_ru"></div>
          </div>
          <div class="lg:col-span-2 lg:block hidden relative">
            <div class="bg-[#F4F4F4] rounded px-6 py-[22px] sticky top-10">
              <h4 class="text-lg font-semibold mb-3">Свежие новости</h4>

              <router-link
                :to="`/news/` + el.id"
                class="pt-5 pb-5 flex border-b last:border-none border-silver"
                v-for="el in news?.latest_news"
                :key="el.id"
              >
                <div class="px-2 pr-3">
                  <div
                    class="w-24 aspect-square bg-cover bg-center bg-no-repeat rounded-md"
                    :style="`background-image: url('${el.image}');`"
                  ></div>
                </div>

                <div class="flex flex-col justify-between">
                  <h4 class="lg:text-sm text-xs mb-1 font-medium">
                    {{ el["title_" + $i18n.locale] || el.title_ru }}
                  </h4>
                  <p
                    class="lg:text-xs text-[10px] font-light text-black text-opacity-70"
                  >
                    {{
                      el.created_at.slice(0, 10) +
                      " - " +
                      el.created_at.slice(11, 16)
                    }}
                  </p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-[18px] lg:pr-[18px] mt-12">
      <div class="container mx-auto">
        <div class="flex items-center w-full md:mb-[52px] mb-8 justify-between">
          <h3
            class="xl:text-5xl md:text-4xl text-2xl text-center font-semibold"
          >
            Популярные новости
          </h3>
          <div class="items-center space-x-5 hidden lg:flex">
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
          :space-between="20"
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
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }"
        >
          <swiper-slide
            v-for="news in news?.popular_news"
            :key="news.id"
            class="slide"
          >
            <NewsCard :news="news" class="bg-[#F4F4F4]" />
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
import NewsCard from "@/components/news/NewsCard.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const news = ref({});
const fetchData = async () => {
  let { data } = await apiRequest(
    `news/${router.currentRoute.value.params.slug}/`
  );
  news.value = data.value;
};
fetchData();

watch(
  () => router.currentRoute.value.params.slug,
  () => fetchData(),
  { deep: true }
);
</script>
<style lang="scss" scoped>
.slide {
  @media screen and (max-width: 768px) {
    width: 200px !important;
  }
}
</style>
