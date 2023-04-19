<template>
  <section class="px-[18px] pt-16 pb-36">
    <div class="container mx-auto">
      <h2 class="md:text-[42px] text-3xl font-semibold text-center mb-10">
        Наши работы
      </h2>
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-[30px] gap-4"
      >
        <WorkCard
          v-for="project in projects"
          :project="project"
          :key="project.id"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import WorkCard from "@/components/works/WorkCard.vue";
const { data: projectsData } = await apiRequest(`projects/`);
const { results: projects } = projectsData.value;
</script>
<style lang=""></style>
