<template>
  <section class="pb-24">
    <!-- {{ work }} -->
    <div class="bg-[#F4F4F4] px-[18px]">
      <div
        class="grid md:grid-cols-12 md:gap-10 gap-10 container mx-auto md:py-28 py-14"
      >
        <div class="xl:col-span-5 col-span-6">
          <img :src="work.image" alt="" class="w-full" />
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
              <div class="md:col-span-2">
                {{ work["client_" + $i18n.locale] || work.client_ru }}
              </div>
              <div v-if="work.service.length" class="">Категория :</div>
              <div v-if="work.service.length" class="md:col-span-2">
                <span v-for="(el, i) in work.service" :key="i">
                  <template v-if="i && i < work.service.length">, </template>
                  <router-link
                    class="hover:text-primary"
                    :to="`/services/${el.id}`"
                  >
                    {{ el["name_" + $i18n.locale] || work.name_ru }}
                  </router-link>
                </span>
              </div>
              <div class="">Дата :</div>
              <div class="md:col-span-2">
                {{ work.date }}
              </div>
              <div class="">статус :</div>
              <div class="md:col-span-2">
                {{ work.status }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-[18px] md:py-20 py-14">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold mb-3 mt-5">
          {{ work["name_" + $i18n.locale] || work.name_ru }}
        </h2>

        <vHtml
          :html="work['description_' + $i18n.locale] || work.description_ru"
        />
        <!-- <div
          class="unreset"
          style="all: revert"
          v-html="work['description_' + $i18n.locale] || work.description_"
        ></div> -->
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
            v-for="work in work.similar_projects"
            :key="work.id"
            class="slide"
          >
            <WorkCard :project="work" />
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
import vHtml from "@/components/common/vHtml.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const service = ref({});
const fetchData = async () => {
  let { data } = await apiRequest(
    `services/${router.currentRoute.value.params.slug}/`
  );
  service.value = data.value;
};
fetchData();

watch(
  () => router.currentRoute.value.params.slug,
  () => fetchData(),
  { deep: true }
);
const { data: work } = await apiRequest(
  `projects/${router.currentRoute.value.params.slug}`
);
useServerSeoMeta({
  title: `Atlantica - ${await work.value.name_ru}`,
  ogTitle: `Atlantica - ${await work.value.name_ru}`,
  description:
    " Мы производственно-торговая компания с вертикальной интеграцией.",
  ogDescription:
    " Мы производственно-торговая компания с вертикальной интеграцией.",
});
</script>

<style lang="scss" scoped>
.slide {
  @media screen and (max-width: 768px) {
    width: 146px !important;
  }
}
</style>
