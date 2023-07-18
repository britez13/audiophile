<script setup lang="ts"></script>

<template>
  <section>
    <!-- Product image -->
    <div
      class="container overflow-hidden flex flex-col justify-center items-center gap-8 mt-12 rounded-xl bg-orangish 
      bg-[url('/src/assets/home/desktop/pattern-circles.svg')] min-h-[500px] bg-contain bg-no-repeat 
      md:min-h-[689px] md:gap-10 lg:flex-row lg:min-h-[560px] lg:gap-20"
    >
      <picture>
        <source srcset="../assets/home/desktop/image-speaker-zx9.png" media="(min-width: 1000px)" />
        <source srcset="../assets/home/tablet/image-speaker-zx9.png" media="(min-width: 600px)" />
        <img class="object-cover max-w-[172px] rounded-lg lg:max-w-[410px] lg:relative -lg:bottom-28" src="../assets/home/mobile/image-speaker-zx9.png" alt="Earphone" />
      </picture>
      
      <div class="flex flex-col gap-4 items-center md:max-w-[349px] md:gap-8 lg:items-start">
        <h3
          class="title text-white text-[36px] tracking-[1.2px] leading-[40px] md:text-[56px] md:leading-[58px]
          lg:text-left"
        >
          Zx9 Speaker
        </h3>
        <p class="description text-white lg:text-left">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button class="btn bg-black text-white hover:bg-light-black transition-colors">See Product</button>
      </div>
    </div>
    <!-- Product image -->
    <div
      class="container mt-6 flex flex-col px-4 justify-center gap-8 items-start rounded-xl min-h-[320px] 
      bg-[url('/src/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-right bg-no-repeat md:px-14 
      md:bg-[url('/src/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('/src/assets/home/desktop/image-speaker-zx7.jpg')]"
    >
      <h3 class="title text-black text-[28px]">ZX7 Speaker</h3>
      <button class="btn border font-bold border-black text-black hover:bg-black hover:text-white 
      transition-colors">
        See Product
      </button>
    </div>
    <!-- Product image divided -->
    <div class="container mt-6 flex flex-col gap-6 md:grid md:grid-cols-2">
      <picture>
        <source srcset="../assets/home/desktop/image-earphones-yx1.jpg" media="(min-width: 1000px)" />
        <source srcset="../assets/home/tablet/image-earphones-yx1.jpg" media="(min-width: 600px)" />
        <img class="object-cover rounded-lg" src="../assets/home/mobile/image-earphones-yx1.jpg" alt="Earphone" />
      </picture>
      <div class="bg-greyish rounded-xl min-h-[200px] flex flex-col gap-8 justify-center items-start px-4 md:pl-10">
        <h3 class="title text-black text-[28px] tracking-[2px]">YX1 Earphones</h3>
        <button class="btn border font-bold border-black text-black hover:bg-black hover:text-white 
         transition-colors">
          See Product
        </button>
      </div>
    </div>
  </section>
</template>
