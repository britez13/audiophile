<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <Navbar></Navbar>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <router-view></router-view>
  <Footer></Footer>
</template>
