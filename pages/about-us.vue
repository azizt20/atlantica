<template>
  <section class="px-[18px] py-10">
    <div class="container mx-auto">
      <h2 class="text-3xl font-semibold mb-3 mt-5">
        {{ about["title_" + $i18n.locale] || about.title_ru }}
      </h2>
      <vHtml
        :html="about['description_' + $i18n.locale] || about.description_ru"
      />
    </div>
  </section>

  <ContactForm class="mb-10" />
</template>
<script setup>
import vHtml from "@/components/common/vHtml.vue";
import ContactForm from "~/components/sections/ContactForm.vue";
const about = ref({});

let { data } = await apiRequest(`about/`);
about.value = data.value[0];

useServerSeoMeta({
  title: "Atlantica",
  ogTitle: "Atlantica",
  description:
    " Мы производственно-торговая компания с вертикальной интеграцией.",
  ogDescription:
    " Мы производственно-торговая компания с вертикальной интеграцией.",
});
</script>
<style lang=""></style>
