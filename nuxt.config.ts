// https://nuxt.com/docs/api/configuration/nuxt-config
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
})
