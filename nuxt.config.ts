// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // SCSS file in the project
    "~/assets/style/main.scss", // you should add main.scss somewhere in your app
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["@heroicons/vue"],
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_BASE_URL || "",
      baseUrl: process.env.NUXT_BASE_URL || "",
    }
  }
})
