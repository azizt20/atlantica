<template>
  
  <div class="w-full aspect-square relative group ">
    <img
      src="@/assets/image/temporarily/work.png"
      class="aspect-square group-hover:blur-sm"
      alt=""
    />
    <div
      class="absolute top-[5%] left-[5%] aspect-square w-[90%] bg-dark md:px-[22px] md:py-5 sm:px-3 px-2 py-2 text-white group-hover:flex flex-col justify-between hidden transition-all"
    >
      <div class="">
        <h4 class="xl:text-xl md:text-base sm:text-sm text-xs text-white md:mb-1.5 sm:mb-1 font-medium">
          Insurance Company
        </h4>
        <p class="md:text-sm sm:text-xs text-[8px] font-light text-white text-opacity-70">
          Lorem ipsum dolor sit amet consectetur. Proin malesuada urna
          condimentum tempus in. Ullamcorper consectetur egestas congue amet
          quisque nunc arcu ipsum massa. Id sollicitudin ac scelerisque at felis
        </p>
      </div>
      <router-link to="/works/1" class="text-primary flex items-center font-medium md:text-base sm:text-sm text-[10px]">
        Подробнее

        <svg
        class="ml-2"
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.9707 0.970703L12.9707 4.9707M12.9707 4.9707L8.9707 8.9707M12.9707 4.9707L0.970703 4.9707"
            stroke="#CC4400"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>
<script setup></script>
<style lang=""></style>
