<template>
  <button class="locale group">
    <div class="locale__value">
      {{ language.name }}
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
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const language = ref({ name: "Русский", alpha: "ru" });

const changeLocale = (el) => {
  // language.value = el;
  // locale.value = el.alpha;
  // localStorage.setItem("locale", JSON.stringify(el));
};

// if (process.client) {
//   if (localStorage.getItem("locale")) {
//     let storageLocale = JSON.parse(localStorage.getItem("locale"));
//     storageLocale.alpha == language.alpha || changeLocale(storageLocale);
//   }
// }

const locales = [
  { name: "Русский", alpha: "ru" },
  { name: "English", alpha: "en" },
  { name: "中国人", alpha: "zh" },
];
</script>
<style lang="scss" scoped>
.locale {
  background: #e7e7e7;
  border-radius: 2px;
  z-index: 30;
  @apply w-[110px] h-9 flex items-center justify-center relative text-black font-medium transition-all;

  &__value {
    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }

  &__dropdown {
    background: #e7e7e7;
    border-radius: 2px;
    @apply w-[110px]  py-2 absolute top-full border-t border-white text-black font-medium;
  }
}
</style>
