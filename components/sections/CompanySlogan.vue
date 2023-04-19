<template>
  <section class="px-[18px]">
    <div class="container mx-auto mb-10">
      <div class="grid lg:grid-cols-12">
        <div class="lg:col-span-6 lg:order-none order-2">
          <h3 class="md:text-3xl sm:text-2xl text-lg font-semibold">
            {{ slogan["title_" + $i18n.locale] }}
          </h3>

          <p
            class="text-black text-opacity-70 lg:text-lg md:text-base text-sm font-normal mt-[14px]"
          >
            <vHtml :html="slogan['description_' + $i18n.locale]" />
          </p>
        </div>

        <div
          class="lg:col-span-4 order-1 lg:order-none lg:col-start-9 mb-11 lg:mb-0"
        >
          <div class="relative aspect-square">
            <img
              :src="slogan.image"
              alt=""
              class="z-10 aspect-square absolute w-[90%]"
            />
            <div
              class="absolute bottom-0 right-0 h-1/2 aspect-square bg-primary"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import vHtml from "~/components/common/vHtml.vue";
const { data: sloganData } = await apiRequest(`block/`);
const slogan = sloganData.value[0];
</script>
<style lang=""></style>
