<template>
  <section class="lg:py-16 py-10">
    <div class="px-[18px]">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-5 grid-cols-1 gap-16">
          <div class="lg:col-span-3">
            <h2 class="text-3xl font-semibold mb-5">
              {{ service["name_" + $i18n.locale] || service.name_ru }}
            </h2>
            <vHtml
              :html="
                service['description_' + $i18n.locale] || service.description_ru
              "
            />
          </div>
          <div class="lg:col-span-2 lg:block hidden relative">
            <div class="bg-[#F4F4F4] rounded px-6 py-[22px] sticky top-10">
              <h4 class="text-lg font-semibold mb-3">
                {{ $t("c-services") }}
              </h4>

              <router-link
                :to="`/services/` + service.id"
                class="pt-3 pb-5 flex border-b last:border-none border-silver"
                v-for="service in services"
                :key="service.id"
              >
                <div class="px-3 w-[60px]">
                  <img :src="service.icon" alt="" class="" />
                </div>

                <div class=" w-[calc(100%-60px)]">
                  <h4 class="xl:text-xl lg:text-lg mb-1 font-medium">
                    {{ service["name_" + $i18n.locale] || service.name_ru }}
                  </h4>
                  <p
                    class="lg:text-sm text-xs font-light text-black text-opacity-70"
                  >
                    {{
                      service["short_description_" + $i18n.locale] ||
                      service.short_description_ru
                    }}
                  </p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-[18px] lg:pr-[18px]">
      <div class="container mx-auto">
        <div class="flex items-center w-full md:mb-[52px] mb-8 justify-between">
          <h3
            class="xl:text-5xl md:text-4xl text-2xl text-center font-semibold"
          >
            {{ $t("s-works") }}
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
            v-for="(work, i) in service?.projects"
            :key="i"
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
    <ContactForm class="mt-10 lg:mt-20 xl:mt-24" />
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
import { ref, watch } from "vue";
import vHtml from "~/components/common/vHtml.vue";
import WorkCard from "@/components/works/WorkCard.vue";
import ContactForm from "~/components/sections/ContactForm.vue";
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
const { data: servicesData } = await apiRequest(`services/`);
const { results: services } = servicesData.value;
useServerSeoMeta({
  title: `Atlantica - ${service.name_ru}`,
  ogTitle: `Atlantica - ${service.name_ru}`,
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
