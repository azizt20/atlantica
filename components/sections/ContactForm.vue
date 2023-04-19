<template>
  <section id="contactForm" class="">
    <div class="grid md:grid-cols-2 grid-cols-1">
      <div
        class="bg-cover bg-top bg-no-repeat md:aspect-auto aspect-square sm:block hidden"
        style="background-image: url('_nuxt/assets/image/contact.png')"
      >
        <!-- <img src="" alt="" class="w-full" /> -->
      </div>
      <div
        class="bg-dark py-[60px] xl:px-[110px] lg:px-16 md:px-10 px-[18px] text-white w-full h-full"
      >
        <div class="xl:w-3/4">
          <h4 class="md:text-2xl text-lg font-semibold mb-4">
            {{ $t("cf-title") }}
          </h4>
          <p
            class="font-normal text-white md:text-base text-sm text-opacity-70 mb-[30px]"
          >
            {{ $t("cf-text") }}
          </p>

          <form class="lg:w-[390px]">
            <label class="">
              <div class="text-white text-opacity-50 font-light text-sm mb-1">
                {{ $t("cf-fullName") }}
              </div>
              <input
                type="text"
                class="mb-6 bg-white bg-opacity-10 rounded-[4px] focus:border focus:font-medium font-light border-primary outline-none w-full h-[42px] px-5 focus:bg-transparent"
                :placeholder="$t('cf-p-fullName')"
              />
            </label>

            <label class="">
              <div class="text-white text-opacity-50 font-light text-sm mb-1">
                {{ $t("cf-phone") }}
              </div>
              <input
                type="tel"
                class="mb-6 bg-white bg-opacity-10 rounded-[4px] focus:border focus:font-medium font-light border-primary outline-none w-full h-[42px] px-5 focus:bg-transparent"
                :placeholder="$t('cf-p-phone')"
              />
            </label>

            <label class="">
              <div class="text-white text-opacity-50 font-light text-sm mb-1">
                {{ $t("cf-email") }}
              </div>
              <input
                type="email"
                class="mb-6 bg-white bg-opacity-10 rounded-[4px] focus:border focus:font-medium font-light border-primary outline-none w-full h-[42px] px-5 focus:bg-transparent"
                :placeholder="$t('cf-p-email')"
              />
            </label>

            <label class="">
              <div class="text-white text-opacity-50 font-light text-sm mb-1">
                {{ $t("cf-message") }}
              </div>
              <textarea
                rows="6"
                :placeholder="$t('cf-p-message')"
                class="mb-6 bg-white bg-opacity-10 rounded-[4px] focus:border focus:font-medium font-light border-primary outline-none w-full px-5 py-2 focus:bg-transparent"
              ></textarea>
            </label>

            <button
              class="bg-primary w-full h-[42px] flex items-center justify-center text-white font-medium rounded-[4px]"
            >
              {{ $t("cf-send") }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang=""></style>
