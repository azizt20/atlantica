<template>
  <section id="services" class="px-[18px]">
    <div class="container mx-auto">
      <h3
        class="xl:text-5xl md:text-4xl text-2xl text-center md:mb-[52px] mb-8 font-semibold"
      >
      {{ $t('s-title') }}

      </h3>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 rounded-xl overflow-hidden border border-silver"
      >
        <router-link
          :to="`/services/` + service.id"
          v-for="service in servicesData.results"
          :key="service.id"
          class="xl:pt-10 xl:pl-10 xl:pr-7 xl:pb-6 pt-7 pl-8 pr-5 pb-4 border"
        >
          <img :src="service.icon" alt="" class="" />
          <h4 class="xl:text-xl mt-3 mb-1.5 font-medium">
            {{ service["name_" + $i18n.locale] || service["name_ru"] }}
          </h4>
          <p class="text-sm font-light text-black text-opacity-70">
            {{ service["description_" + $i18n.locale] || service["description_ru"] }}
          </p>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script setup>
const { data: servicesData } = await apiRequest(`services/`);
// const { results: services } = servicesData.value;
</script>
<style lang=""></style>
