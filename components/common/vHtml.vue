<template>
  <div class="unreset" v-html="html"></div>
</template>
<script setup>
const props = defineProps({ html: String });
</script>
<style scoped>
* {
  all: unset;
}
</style>