<script setup lang="ts">
import Cart from "./Cart.vue";
import { useModalStore } from "../store/modal";
import { useCartStore } from "../store/cart";

const storeModal = useModalStore();
const storeCart = useCartStore();

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
      class="container h-full flex justify-between items-center md:border-b border-white 
      border-opacity-[0.1]"
    >
      <router-link to="/">
        <img src="../assets/shared/desktop/logo.svg" alt="logo" />
      </router-link>

      <span class="text-white lg:hidden">=</span>

      <nav class="hidden lg:flex lg:items-center">
        <ul class="flex flex-col gap-6 md:flex-row">
          <router-link :to="page.path" v-for="page in pages">
            <li
              class="title text-white text-[13px] tracking-[2px] font-manrope md:text-left 
              hover:text-orangish transition-colors"
            >
              {{ page.name }}
            </li>
          </router-link>
        </ul>
      </nav>
      <div class="relative">
        <img
          @click="storeModal.toggleOpenCart"
          class="w-[23px] h-[20px] object-cover"
          src="../assets/shared/desktop/icon-cart.svg"
          alt=""
        />
        <div
          class="absolute bg-orangish w-4 h-4 border border-orangish rounded-full top-0 right-0 
          translate-x-2 -translate-y-2 text-white text-[11px] grid place-content-center text-center 
          font-bold"
          ><span>{{ storeCart.length }}</span></div
        >
      </div>
    </div>
    <Cart />
  </header>
</template>
