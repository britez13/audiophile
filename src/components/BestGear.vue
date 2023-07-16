<script setup lang="ts">
</script>

<template>
  <section class="container mt-12 flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center">
    <picture>
      <source srcset="../assets/shared/desktop/image-best-gear.jpg" media="(min-width: 1000px)" />
      <source srcset="../assets/shared/tablet/image-best-gear.jpg" media="(min-width: 600px)" />
      <img class="object-cover rounded-lg lg:col-start-2" src="../assets/shared/mobile/image-best-gear.jpg" alt="Person with headphone" />
    </picture>
    <div class="md:max-w-[573px] mx-auto lg:col-start-1 lg:row-start-1 lg:max-w-[445px]">
      <h2 class="title text-[28px] tracking-[1px] md:text-[40px] md:tracking-[1.429px] lg:text-left lg:mr-auto">
        Bringing you the <span class="text-orangish">best</span> audio gear
      </h2>
      <p class="description mt-6 opacity-50 lg:text-left">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  </section>
</template>
