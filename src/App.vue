<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BestGear from './components/BestGear.vue';
</script>

<template>
  <Header />
  <router-view></router-view>
  <BestGear />
  <Footer />
</template>
