<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BestGear from './components/BestGear.vue';
import Overlay from './components/Overlay.vue';

</script>

<template>
  <Header />
  <Overlay />
  <router-view></router-view>
  <BestGear />
  <Footer />
</template>
