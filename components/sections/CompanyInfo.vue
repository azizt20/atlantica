<template>
  <section class="px-[18px]">
    <div
      class="container mx-auto grid lg:grid-cols-12 grid-cols-1 lg:items-center xl:pb-[70px]"
    >
      <div class="lg:col-span-5 lg:mb-10">
        <div class="w-full relative">
          <img :src="info.image_1" alt="" class="w-3/4" />
          <img
            :src="info.image_2"
            alt=""
            class="absolute top-[60%] right-0 border-8 rounded-lg w-[40%]"
          />
        </div>
      </div>

      <div
        class="lg:col-span-6 lg:col-start-7 xl:pt-7 lg:mt-0 md:mt-40 sm:mt-32 mt-20"
      >
        <h3 class="md:text-3xl sm:text-2xl text-lg font-semibold">
          <!-- {{ info["title_" + $i18n.locale] }} -->
          {{ info["title_" + $i18n.locale] }}
        </h3>

        <p
          class="text-black text-opacity-70 lg:text-lg md:text-base text-sm font-normal mt-[14px]"
        >
          {{ info["description_" + $i18n.locale] }}
        </p>

        <a
          :href="info.link"
          class="bg-primary text-white rounded flex items-center justify-center md:h-11 h-10 md:w-40 w-36 md:mt-7 mt-5 md:text-base text-sm"
        >
          {{ $t("consulting") }}
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
const { data: infoData } = await apiRequest(`consult/`);
const info = infoData.value[0];
</script>
<style lang=""></style>
