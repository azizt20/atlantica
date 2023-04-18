<template>
  <div class="home-page pb-[100px]">
    <Banner />
    <CompanyInfo class="mt-8 sm:mt-12 lg:mt-[125px]" />
    <CompanySlogan class="mt-11 sm:mt-12 lg:mt-[125px]" />
    <Services class="mt-14 sm:mt-14 lg:mt-[125px]" />
    <Works class="mt-14 sm:mt-14 lg:mt-[125px]" />
    <News class="mt-14 sm:mt-14 lg:mt-[125px]" />
    <Reviews class="mt-14 sm:mt-14 lg:mt-[125px]" />
    <Partners class="mt-14 sm:mt-14 lg:mt-[125px]" />
    <ContactForm class="mt-14 sm:mt-14 lg:mt-[125px]" />
  </div>
</template>
<script setup>
import Banner from "~/components/sections/banner.vue";
import CompanyInfo from "~/components/sections/CompanyInfo.vue";
import CompanySlogan from "~/components/sections/CompanySlogan.vue";
import Services from "~/components/sections/Services.vue";
import Works from "~/components/sections/Works.vue";
import News from "~/components/sections/News.vue";
import Reviews from "~/components/sections/Reviews.vue";
import Partners from "~/components/sections/Partners.vue";
import ContactForm from "~/components/sections/ContactForm.vue";

</script>
<style lang=""></style>
