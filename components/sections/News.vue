<template>
  <section id="news" class="px-[18px]">
    <div class="container mx-auto">
      <h3
        class="xl:text-5xl md:text-4xl text-2xl text-center md:mb-[52px] mb-8 font-semibold"
      >
        {{ $t("n-title") }}
      </h3>
      <div
        class="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-7 sm:gap-4 gap-y-3 gap-x-2"
      >
        <NewsCard :news="el" v-for="el in news.slice(0, count)" :key="el.id" />
      </div>

      <router-link
        to="/news"
        class="w-40 h-10 flex items-center justify-center border border-primary rounded-sm text-primary font-medium mx-auto mt-6 md:mt-10 lg:mt-11"
      >
        Все новости

        <svg
          class="ml-2"
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.41667 1.6665L12.25 5.49984M12.25 5.49984L8.41667 9.33317M12.25 5.49984L0.75 5.49984"
            stroke="#CC4400"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";
import NewsCard from "../news/NewsCard.vue";
const { data: newsData } = await apiRequest(`news/?limit=8`);
const { results: news } = newsData.value;
const count = computed(() => {
  if (process.client) {
    if (window.innerWidth < 1280) {
      return 6;
    }
  }
  return 9;
});
</script>
<style lang=""></style>
