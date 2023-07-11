<script setup lang="ts">
import DescriptionText from "./DescriptionText.vue";
</script>

<template>
  <section class="container mt-12 flex flex-col gap-4">
    <picture>
      <source srcset="../assets/shared/desktop/image-best-gear.jpg" media="(min-width: 1000px)" />
      <source srcset="../assets/shared/tablet/image-best-gear.jpg" media="(min-width: 600px)" />
      <img class="object-cover rounded-lg" src="../assets/shared/mobile/image-best-gear.jpg" alt="Person with headphone" />
    </picture>
    <div>
      <DescriptionText color="black">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </DescriptionText>
    </div>
  </section>
</template>
