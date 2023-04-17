<template>
  <router-link to="/news/123" class="bg-[#F4F4F4] rounded-lg overflow-hidden">
    <div
      class="w-full aspect-video bg-cover bg-center bg-no-repeat"
      :style="`background-image: url(${img})`"
    ></div>
    <div class="xl:p-8 lg:p-6 sm:p-4 p-3">
      <p class="xl:mb-6 lg:mb-5 md:mb-4 mb-3 font-semibold xl:text-2xl lg:text-xl md:text-base sm:text-sm text-xs">
        Внутренние перевозки – достойное решение для вашего бизнеса
      </p>
      <span class=" lg:text-xs sm:text-[10px] text-[8px] font-normal">November 26, 2023 9:19 AM</span>
    </div>
  </router-link>
</template>
<script setup>
import img from "@/assets/image/temporarily/news.png";
</script>
<style lang=""></style>
