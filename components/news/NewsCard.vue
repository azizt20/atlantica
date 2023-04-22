<template>
  <router-link
    :to="`/news/${props.news.id}`"
    class="bg-[#F4F4F4] rounded-lg overflow-hidden"
  >
    <div
      class="w-full aspect-video bg-cover bg-center bg-no-repeat rounded-t-lg"
      :style="`background-image: url(${props.news.image})`"
    ></div>
    <div class="xl:p-8 lg:p-6 sm:p-4 p-3 bg-[#F4F4F4] rounded-b-lg">
      <p
        class="xl:mb-6 lg:mb-5 md:mb-4 mb-3 font-semibold xl:text-2xl lg:text-xl md:text-base sm:text-sm text-xs"
      >
        {{ props.news["title_" + $i18n.locale] || props.news.title_ru }}
      </p>
      <span class="lg:text-xs sm:text-[10px] text-[8px] font-normal">
        {{ normalazeDate(props.news.created_at) }}

        <!-- November 26, 2023 9:19 AM -->
      </span>
    </div>
  </router-link>
</template>
<script setup>
const props = defineProps({ news: Object });
const normalazeDate = (date) => date.split("T")[0] + " - " + date.slice(11, 16);
</script>
<style lang=""></style>
