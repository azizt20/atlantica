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
          v-for="service in services"
          :key="service.id"
          class="xl:pt-10 xl:pl-10 xl:pr-7 xl:pb-6 pt-7 pl-8 pr-5 pb-4 border"
        >
          <img :src="service.icon" alt="" class="" />
          <!-- <svg
            width="36"
            height="34"
            viewBox="0 0 36 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.6323 31.7117C21.6323 30.4674 20.6236 29.4587 19.3794 29.4587H16.6206C16.0231 29.4587 15.45 29.6961 15.0275 30.1186C14.605 30.5411 14.3677 31.1142 14.3677 31.7117C14.3677 32.9559 15.3764 33.9646 16.6206 33.9646H19.3794C20.6236 33.9646 21.6323 32.9559 21.6323 31.7117ZM4.73632 25.9022C5.11263 25.931 5.56791 25.9475 6.02522 25.9207C6.26885 27.1563 6.8741 28.3022 7.77755 29.2057C8.97694 30.4051 10.6036 31.0789 12.2998 31.0789H13.1594C13.1215 31.2863 13.102 31.498 13.102 31.7117C13.102 31.9277 13.1215 32.1393 13.1588 32.3445H12.2998C10.2679 32.3445 8.3193 31.5374 6.88261 30.1007C5.73645 28.9544 4.99092 27.4824 4.73632 25.9022ZM4.09254 24.5555C3.09333 24.3871 2.16352 23.912 1.43768 23.1861C0.517148 22.2656 0 21.0171 0 19.7152V16.7239C0 15.4221 0.517148 14.1736 1.43768 13.253C2.35821 12.3325 3.60675 11.8153 4.90859 11.8153H5.23533C5.75761 5.22305 11.2731 0.0358887 18 0.0358887C24.7269 0.0358887 30.2424 5.22305 30.7647 11.8153H31.0914C32.3932 11.8153 33.6418 12.3325 34.5623 13.253C35.4829 14.1736 36 15.4221 36 16.7239V19.7152C36 21.0171 35.4829 22.2656 34.5623 23.1861C33.6418 24.1067 32.3932 24.6239 31.0914 24.6239H29.6429C29.0422 24.6239 28.5552 24.1368 28.5552 23.5362V12.8411C28.5552 7.01159 23.8295 2.28589 18 2.28589C12.1705 2.28589 7.44483 7.01159 7.44483 12.8411V23.5362C7.44483 23.9603 7.20204 24.3278 6.8478 24.5072C5.87271 24.8455 4.3605 24.6008 4.09254 24.5555Z"
              fill="#CC4400"
            />
          </svg> -->

          <h4 class="xl:text-xl mt-3 mb-1.5 font-medium">
            {{ service["name_" + $i18n.locale] }}
          </h4>
          <p class="text-sm font-light text-black text-opacity-70">
            {{ service["description_" + $i18n.locale] }}
          </p>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script setup>
const { data: servicesData } = await apiRequest(`services/`);
const { results: services } = servicesData.value;
</script>
<style lang=""></style>
