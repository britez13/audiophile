<script setup lang="ts"></script>

<template>
  <section>
    <!-- Product image -->
    <div
      class="container flex flex-col justify-center items-center gap-8 mt-8 rounded-xl bg-orangish bg-[url('/src/assets/home/desktop/pattern-circles.svg')] 
      min-h-[500px] bg-contain bg-no-repeat ld:flex-row"
    >
      <img
        class="w-[172px] h-[200px] object-cover"
        src="../assets/home/mobile/image-speaker-zx9.png"
        alt="Speaker zx9"
      />
      <div class="flex flex-col gap-4 items-center">
        <h3
          class="title text-white text-[36px] tracking-[1.2px] leading-[40px]"
        >
          Zx9 Speaker
        </h3>
        <p class="description text-white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button class="btn bg-black text-white hover:bg-light-black transition-colors">See Product</button>
      </div>
    </div>
    <!-- Product image -->
    <div
      class="container flex flex-col px-4 justify-center gap-8 items-start rounded-xl min-h-[320px] 
      bg-[url('/src/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-right bg-no-repeat"
    >
      <h3 class="title text-black text-[28px]">ZX7 Speaker</h3>
      <button class="btn border font-bold border-black text-black hover:bg-black hover:text-white 
      transition-colors">
        See Product
      </button>
    </div>
    <!-- Product image divided -->
    <div class="container">
      <div
        class=" rounded-xl min-h-[200px] bg-[url('/src/assets/home/mobile/image-earphones-yx1.jpg')] 
        bg-cover bg-right bg-no-repeat"
      ></div>
      <div class="bg-light-greyish rounded-xl min-h-[200px] flex flex-col gap-8 justify-center items-start px-4">
        <h3 class="title text-black text-[28px]">YX1 Earphones</h3>
        <button class="btn border font-bold border-black text-black hover:bg-black hover:text-white 
         transition-colors">
          See Product
        </button>
      </div>
    </div>
  </section>
</template>
