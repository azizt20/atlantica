import { defineStore } from "pinia";
import { ref } from "vue";

export const useNewsStore = defineStore("newsStore", () => {
    const news = ref([]);
    return {
        news,
    };
});