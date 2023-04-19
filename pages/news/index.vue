<template>
  <section class="px-[18px] pt-16 pb-36">
    <div class="container mx-auto">
      <h2 class="md:text-[42px] text-3xl font-semibold text-center mb-10">
        Наши новости
      </h2>

      <div
        class="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-7 sm:gap-4 gap-y-3 gap-x-2"
      >
        <NewsCard :news="el" v-for="el in news" :key="el.id" />
      </div>
    </div>
  </section>
</template>
<script setup>
import NewsCard from "@/components/news/NewsCard.vue";

const { data: newsData } = await apiRequest(`news/`);
const { count, results: news } = newsData.value;
</script>
<style lang=""></style>
