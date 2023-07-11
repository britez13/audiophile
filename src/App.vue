<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import BestGear from './components/BestGear.vue';
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <BestGear />
  <Footer />
</template>
