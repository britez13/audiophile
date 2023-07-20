<script setup lang="ts">
const pages = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/categories/headphones",
    name: "headphones",
  },
  {
    path: "/categories/speakers",
    name: "speakers",
  },
  {
    path: "/categories/earphones",
    name: "earphones",
  },
];
</script>

<template>
  <header class="bg-blackish h-[12vh]">
    <div
      class="container h-full flex justify-between items-center md:border-b border-white border-opacity-[0.1]"
    >
      <router-link to="/">
        <img src="../assets/shared/desktop/logo.svg" alt="logo" />
      </router-link>

      <span class="text-white lg:hidden">=</span>

      <nav class="hidden lg:flex lg:items-center">
        <ul class="flex flex-col gap-6 md:flex-row">
          <li
            class="title text-white text-[13px] tracking-[2px] font-manrope md:text-left hover:text-orangish
            transition-colors"
            
            v-for="page in pages"
          >
            <router-link :to="page.path">{{ page.name }}</router-link>
          </li>
        </ul>
      </nav>
      <img
        class="w-[23px] h-[20px] object-cover"
        src="../assets/shared/desktop/icon-cart.svg"
        alt=""
      />
    </div>
  </header>
</template>
