// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
    vite: {
        plugins: [
          VueI18nVitePlugin({
            include: [
              resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
            ]
          })
        ]
      },
  modules: [
    '@pinia/nuxt',
    // '@nuxtjs/i18n',
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
        }
      },
})
