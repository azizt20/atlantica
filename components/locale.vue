<template>
  <button class="locale group">
    <div class="locale__value">
      {{ locale.name }}
      <svg
        width="12"
        height="6"
        viewBox="0 0 12 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L6 5L11 1"
          stroke="#161413"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div
      class="locale__dropdown options absolute top-full hidden group-hover:block"
    >
      <div
        class="options__element"
        @click="changeLocale(el)"
        v-for="el in locales"
        :key="el.alpha"
      >
        {{ el.name }}
      </div>
    </div>
  </button>
</template>
<script setup>
import { ref } from "vue";

let storageLocale;

if (process.client) {
  storageLocale = localStorage.getItem("locale")
    ? JSON.parse(localStorage.getItem("locale"))
    : undefined;
}

const locales = [
  { name: "Русский", alpha: "ru" },
  { name: "English", alpha: "en" },
];

const locale = ref(storageLocale || { name: "Русский", alpha: "ru" });

const changeLocale = (el) => {
  locale.value = el;
  localStorage.setItem("locale", JSON.stringify(el));
};
</script>
<style lang="scss" scoped>
.locale {
  background: rgba(22, 20, 19, 0.1);
  border-radius: 2px;
  @apply w-[110px] h-9 flex items-center justify-center relative text-black font-medium transition-all;

  &__value {
    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }

  &__dropdown {
    background: rgba(22, 20, 19, 0.1);
    border-radius: 2px;
  @apply w-[110px]  py-2 absolute top-full border-t border-white text-black font-medium;

  }
}
</style>
