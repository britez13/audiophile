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

const socialLinks = [
  {
    name: "facebook",
    url: "/src/assets/shared/desktop/icon-facebook.svg",
  },
  {
    name: "twitter",
    url: "/src/assets/shared/desktop/icon-twitter.svg",
  },
  {
    name: "instagram",
    url: "/src/assets/shared/desktop/icon-instagram.svg",
  },
];
</script>

<template>
  <footer class="bg-blackish mt-20 py-8">
    <div class="container flex flex-col gap-8 justify-center items-center md:items-start">
      <router-link to="/">
      <img
        class="max-w-[143px]"
        src="../assets/shared/desktop/logo.svg"
        alt="logo"
      />
      </router-link>
      <nav>
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
      <p class="description text-white opacity-50 px-2 md:text-left md:px-0 lg:pr-[40%]">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div class="flex flex-col gap-6 items-center md:flex-row md:justify-between md:w-full">
        <p class="text-white text-[15px] opacity-50">
          Copyright {{ new Date().getFullYear() }}. All Rights Reserved
        </p>
        <div>
            <ul class="flex gap-3 items-center md:gap-5">
                <li v-for="link of socialLinks">
                    <a href="#">
                        <img :src="link.url" :alt="link.name + ' icon'">
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
