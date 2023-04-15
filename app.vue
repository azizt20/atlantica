<template>
  <div id="app">
    <Header />

    <router-view />

    <Footer />
  </div>
</template>
<script setup>
import Header from "./components/layout/header.vue";
import Footer from "./components/layout/footer.vue";
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

</style>
