<template>
  <section id="contactForm" class="">
    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50 fixed left-0 lg:left-auto right-0 sm:right-3 top-3"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6 text-green-400"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium text-gray-900">
                {{ $t("saved-success") }}!
              </p>
              <p class="mt-1 text-sm text-gray-500">
                {{ $t("contact-shortly") }}
              </p>
            </div>
            <div class="ml-4 flex flex-shrink-0">
              <button
                type="button"
                @click="show = false"
                class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span class="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5"
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
          </div>
        </div>
      </div>
    </transition>
    <div class="grid md:grid-cols-2 grid-cols-1">
      <div
        class="bg-cover bg-top bg-no-repeat md:aspect-auto aspect-square sm:block hidden"
        style="background-image: url('/images/contact.png')"
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

          <form class="lg:w-[390px]" @submit.stop.prevent="sendForm">
            <div class="mb-6">
              <div class="text-white text-opacity-50 font-light text-sm mb-1">
                {{ $t("cf-fullName") }}
              </div>
              <input
                type="text"
                v-model="form.name"
                class="bg-white bg-opacity-10 rounded-[4px] focus:border focus:font-medium font-light border-primary outline-none w-full h-[42px] px-5 focus:bg-transparent"
                :placeholder="$t('cf-p-fullName')"
              />
              <span v-if="nameError && submitted" class="text-red-600 text-sm">{{ $t('name-error') }}</span>
            </div>

            <div class="mb-6">
              <div class="text-white text-opacity-50 font-light text-sm mb-1">
                {{ $t("cf-phone") }}
              </div>
              <input
                type="tel"
                v-model="form.phone"
                class="bg-white bg-opacity-10 rounded-[4px] focus:border focus:font-medium font-light border-primary outline-none w-full h-[42px] px-5 focus:bg-transparent"
                :placeholder="$t('cf-p-phone')"
              />
              <span v-if="phoneError && submitted" class="text-red-600 text-sm">{{ $t('phone-error') }}</span>
            </div>

            <div class="mb-6">
              <div class="text-white text-opacity-50 font-light text-sm mb-1">
                {{ $t("cf-email") }}
              </div>
              <input
                type="email"
                v-model="form.email"
                class="bg-white bg-opacity-10 rounded-[4px] focus:border focus:font-medium font-light border-primary outline-none w-full h-[42px] px-5 focus:bg-transparent"
                :placeholder="$t('cf-p-email')"
              />
              <span v-if="emailError && submitted" class="text-red-600 text-sm">{{ $t('email-error') }}</span>
            </div>

            <div class="mb-6">
              <div class="text-white text-opacity-50 font-light text-sm mb-1">
                {{ $t("cf-message") }}
              </div>
              <textarea
                rows="6"
                v-model="form.message"
                :placeholder="$t('cf-p-message')"
                class="bg-white bg-opacity-10 rounded-[4px] focus:border focus:font-medium font-light border-primary outline-none w-full px-5 py-2 focus:bg-transparent"
              ></textarea>
            </div>

            <button
              class="bg-primary w-full h-[42px] flex items-center justify-center text-white font-medium rounded-[4px]"
              type="submit"
            >
              {{ $t("cf-send") }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
        type: "Консультация",
      },
      show: false,
      submitted: false,
    };
  },
  computed: {
    nameError() {
      return this.form.name.length < 3;
    },
    phoneError() {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return !re.test(this.form.phone);
    },
    emailError() {
      const re = /\S+@\S+\.\S+/;
      return !re.test(this.form.email);
    },
    checkForErrors() {
      return (
        this.nameError ||
        this.phoneError ||
        this.emailError ||
        this.form.name === "" ||
        this.form.phone === "" ||
        this.form.email === "" ||
        this.form.message === ""
      );
    },
  },
  methods: {
    async sendForm() {
      if (this.checkForErrors) {
        this.submitted = true;
        return;
      }
      const res = await fetch(`${this.$config.apiBase}request/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.form),
      }).then((res) => res.json());
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.message = "";
      this.show = true;
      this.submitted = false;
    },
  },
  watch: {
    show(val) {
      if (val) {
        setTimeout(() => {
          this.show = false;
        }, 3000);
      }
    },
  },
};
</script>
<style lang=""></style>
