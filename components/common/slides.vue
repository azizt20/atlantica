<template>
  <div>
    <div
      class="flex items-center w-full md:mb-[52px] mb-8"
      :class="title_align == 'left' ? 'justify-between' : 'justify-center'"
    >
      <h3
        class="xl:text-5xl md:text-4xl text-2xl text-center font-semibold"
      >
        {{ title }}
      </h3>
      <div class="flex items-center space-x-5" v-if="navigation">
        <button
          class="rounded-full text-white bg-primary flex items-center justify-center p-1"
          @click="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          class="rounded-full bg-primary text-white flex items-center justify-center p-1"
          @click="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="slides-container" :style="`--spaceBetween: ${spaceBetween}; --slidesPerView: ${slidesPerView};`">
      <div
        class="flex slides-wrapper select-none relative h-full overflow-x-auto w-full scrollbar-none scroll-smooth"
        :class="[
          dragging ? 'snap-none' : 'snap-x snap-mandatory',
          spaceBetween == 0 ? 'gap-x-0' : `gap-x-[${spaceBetween}px]`,
        ]"
        ref="slider"
        @mousedown="startDrag"
        @mousemove="drag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
      >
        <slot></slot>
      </div>
      <div
        class="w-full flex justify-center items-center space-x-[10px]"
        v-if="pagination"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    title_align: {
      type: String,
      default: "left",
    },
    slidesPerView: {
      type: Number,
      default: 1,
    },
    spaceBetween: {
      type: Number,
      default: 0,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    navigation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dragging: false,
      scrollLeft: 0,
      startX: 0,
      current: 0,
      thumbs: false,
    };
  },
  methods: {
    startDrag(e) {
      this.dragging = true;
      this.startX = e.pageX - this.$refs.slider.offsetLeft;
      this.scrollLeft = this.$refs.slider.scrollLeft;
    },
    endDrag(e) {
      if (this.dragging) {
        let x = e.pageX - this.$refs.slider.offsetLeft;
        let walk = (x - this.startX) * 1;
        if (walk > 50 || walk < -50) {
          if (walk > 50 && this.current > 0) {
            this.current = this.current - 1;
            this.$refs.slider.scrollLeft =
              this.current * this.$refs.slider.clientWidth;
          } else {
            if (this.current < this.product.photos.length - 1) {
              this.current = this.current + 1;
              this.$refs.slider.scrollLeft =
                this.current * this.$refs.slider.clientWidth;
            }
          }
        } else {
          this.$refs.slider.scrollLeft = this.scrollLeft;
        }
      }
      this.dragging = false;
    },
    drag(event) {
      if (this.dragging) {
        event.preventDefault();
        const x = event.pageX - this.$refs.slider.offsetLeft;
        const walk = (x - this.startX) * 1;
        this.$refs.slider.scrollLeft = this.scrollLeft - walk;
      }
    },
    changeCurrent(index) {
      this.current = index;
      this.$refs.slider.scrollLeft =
        this.current * this.$refs.slider.clientWidth;
    },
    next() {
      if (this.current < this.product.photos.length - 1) {
        this.current = this.current + 1;
        this.$refs.slider.scrollLeft =
          this.current * this.$refs.slider.clientWidth;
      }
    },
    prev() {
      if (this.current > 0) {
        this.current = this.current - 1;
        this.$refs.slider.scrollLeft =
          this.current * this.$refs.slider.clientWidth;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
// firefox
.scrollbar-none {
  scrollbar-width: none;
}
.slides-wrapper > * {
  width: calc(100% / var(--slidesPerView)) !important;
}
</style>
