<template>
  <header class="header bg-white">
    <div class="container mx-auto">
      <nav
        class="flex items-center justify-between p-[20px] lg:px-0"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <Logo />
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-8 ml-8">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="font-semibold leading-6 text-gray-900"
            >{{ item.name }}
          </router-link>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <Locale />
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}
                </router-link>
              </div>
              <div class="py-6">
                <Locale />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Logo from "@/components/common/logo.vue";
import Locale from "@/components/common/locale.vue";

import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [
  { name: "О компании", href: "/#about" },
  { name: "Услуги", href: "/#services" },
  { name: "Работы", href: "/works" },
  { name: "Новости", href: "/news" },
  { name: "Партнеры", href: "/#partners" },
  { name: "Контакты", href: "/#contact" },
];

const mobileMenuOpen = ref(false);
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1);
}
</style>
