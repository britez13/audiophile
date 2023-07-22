<script setup lang="ts">
import Cart from "./Cart.vue";
import {useModalStore} from "../store/modal"

const store = useModalStore()

const pages = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/headphones",
    name: "headphones",
  },
  {
    path: "/speakers",
    name: "speakers",
  },
  {
    path: "/earphones",
    name: "earphones",
  },
];
</script>

<template>
  <header class="bg-blackish h-[12vh] top-0 sticky z-30">
    <div
      class="container h-full flex justify-between items-center md:border-b border-white border-opacity-[0.1]"
    >
      <router-link to="/">
        <img src="../assets/shared/desktop/logo.svg" alt="logo" />
      </router-link>

      <span class="text-white lg:hidden">=</span>

      <nav class="hidden lg:flex lg:items-center">
        <ul class="flex flex-col gap-6 md:flex-row">
          <router-link :to="page.path" v-for="page in pages">
            <li
              class="title text-white text-[13px] tracking-[2px] font-manrope md:text-left hover:text-orangish transition-colors"
            >
              {{ page.name }}
            </li>
          </router-link>
        </ul>
      </nav>
      <img
        @click="store.toggleOpenCart"
        class="w-[23px] h-[20px] object-cover"
        src="../assets/shared/desktop/icon-cart.svg"
        alt=""
      />
    </div>
    <Cart />
  </header>
</template>
