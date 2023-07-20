<script setup lang="ts"></script>

<template>
  <section
    class="bg-blackish flex items-center min-h-[88vh] bg-[url('/src/assets/home/mobile/image-header.jpg')] 
    bg-no-repeat bg-center bg-cover bg-opacity-5 md:bg-[url('/src/assets/home/tablet/image-header.jpg')] 
    lg:bg-[url('/src/assets/home/desktop/image-hero.jpg')] lg:place-items-stretch"
  >
    <div class="container flex items-center justify-center lg:justify-start">
      <div class="flex flex-col items-center gap-4 md:max-w-[385px] md:gap-8 lg:items-start">
        <h2 class="wide text-white lg:text-left">New Product</h2>
        <h1
          class="title text-4xl text-white tracking-wide md:text-[56px] md:leading-[58px] md:tracking-[2px] 
          lg:text-left"
        >
          xx99 Mark II Headphones
        </h1>
        <p class="description text-white px-6 md:px-2 lg:text-left lg:px-0">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <router-link to="/products/xx99-mark-two-headphones">
        <button
          class="btn bg-orangish text-white hover:bg-light-orangish transition-colors"
        >
          See Product
        </button>
      </router-link>
      </div>
    </div>
  </section>
</template>
