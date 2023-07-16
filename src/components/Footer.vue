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
  <footer class="bg-blackish mt-20 py-8">
    <div class="container flex flex-col gap-8 justify-center items-center">
      <img
        class="max-w-[143px]"
        src="../assets/shared/desktop/logo.svg"
        alt="logo"
      />
      <nav>
        <ul class="flex flex-col gap-6">
          <li
            class="title text-white text-[13px] tracking-[2px] font-manrope"
            v-for="page in pages"
          >
            <router-link :to="page.path">{{ page.name }}</router-link>
          </li>
        </ul>
      </nav>
      <p class="description text-white opacity-50 px-2">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div>
        <p class="text-white text-[15px] opacity-50">Copyright {{ new Date().getFullYear() }}. All Rights Reserved</p>
        <div></div>
      </div>
    </div>
  </footer>
</template>
