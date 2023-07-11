<script setup lang="ts">
import Button from '../components/Button.vue'
import DescriptionText from './DescriptionText.vue';
import NewProductText from './NewProductText.vue';

</script>

<template>
  <section
    class="bg-blackish grid place-content-center min-h-[90vh] bg-[url('/src/assets/home/mobile/image-header.jpg')] 
    bg-no-repeat bg-center bg-cover bg-opacity-5 md:bg-[url('/src/assets/home/tablet/image-header.jpg')]
    lg:bg-[url('/src/assets/home/desktop/image-hero.jpg')]"
  >
    <div class="flex flex-col items-center gap-4">
        <NewProductText color="white">New Product</NewProductText>
        <h1 class="text-4xl uppercase text-center font-bold text-white tracking-wide">xx99 Mark II Headphones</h1>
        <DescriptionText color="white" padding-x="6" >Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</DescriptionText>
        <Button bgcol="orangish" color="white">See Product</Button>
    </div>
  </section>
</template>
