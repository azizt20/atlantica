<template>
  
  <div v-html="html"></div>
</template>
<script setup>
const props = defineProps({ html: String });
</script>
<style lang="scss" scoped>
* {
  all: revert;
}
</style>
