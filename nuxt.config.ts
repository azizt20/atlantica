import {isProduction} from "std-env";

export default defineNuxtConfig({

  modules: [
    '@pinia/nuxt',
  ],
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
      google_analytics_id: process.env.GOOGLE_ANALYTICS_ID || "",
      production_mode: isProduction ? true : false,

    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})