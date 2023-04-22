<template>
  <section id="contactForm" class="">
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
            <label class="">
              <div class="text-white text-opacity-50 font-light text-sm mb-1">
                {{ $t("cf-fullName") }}
              </div>
              <input
                type="text"
                v-model="form.name"
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
                v-model="form.phone"
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
                v-model="form.email"
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
                v-model="form.message"
                :placeholder="$t('cf-p-message')"
                class="mb-6 bg-white bg-opacity-10 rounded-[4px] focus:border focus:font-medium font-light border-primary outline-none w-full px-5 py-2 focus:bg-transparent"
              ></textarea>
            </label>

            <button
              class="bg-primary w-full h-[42px] flex items-center justify-center text-white font-medium rounded-[4px]"
              :disabled="checkForErrors"
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
    messageError() {
      return this.form.message.length < 10;
    },
    checkForErrors() {
      return (
        this.nameError ||
        this.phoneError ||
        this.emailError ||
        this.messageError ||
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
        return;
      }
      const res = await fetch(`${this.$config.apiBase}request/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.form),
      }).then((res) => res.json());
      // this.$toast.success("Сообщение отправлено");
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>
<style lang=""></style>
