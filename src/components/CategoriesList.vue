<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import CategoriesMenu from "./CategoriesMenu.vue";
import data from "../data.json";

const router = useRouter();
const routeName = useRoute().path.split("/")[2];
const categories = ["headphones", "speakers", "earphones"];
const routeIsValid = categories.find((category) => category === routeName);
if (!routeIsValid) {
  router.push({ name: "NotFound" });
}
const title = ref(routeName);
const filteredProductsByCategory = data.filter(
  (item) => item.category === routeName
);
</script>

<template>
  <div class="bg-blackish py-12">
    <h1 class="title text-white text-[28px] tracking-[2px]">{{ title }}</h1>
  </div>
  <main class="container">
    <ul
      class="mt-8 flex flex-col gap-24 mb-28"
      v-if="filteredProductsByCategory.length"
    >
      <li class="category" v-for="product of filteredProductsByCategory">
        <div class="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-12">
          <picture>
            <source
              :srcset="product.image.desktop"
              media="(min-width: 1000px)"
            />
            <source :srcset="product.image.tablet" media="(min-width: 600px)" />
            <img
              class="bg-greyish object-cover rounded-lg md:max-h-[352px] md:w-full md:object-contain lg:max-h-[560px] lg:object-cover"
              :src="product.image.mobile"
              :alt="product.name"
            />
          </picture>
          <div
            class="flex flex-col justify-center items-center gap-6 lg:items-start"
          >
            <h3
              class="wide text-orangish opacity-1 lg:text-left"
              v-if="product.new"
            >
              New Product
            </h3>
            <h2 class="title text-[28px] tracking-[1px]">{{ product.name }}</h2>
            <p class="description md:px-12 lg:px-0 lg:text-left">
              {{ product.description }}
            </p>
            <router-link :to="`/products/${product.slug}`">
              <button
                class="btn bg-orangish text-white hover:bg-light-orangish transition-colors"
              >
                See Product
              </button>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
    <CategoriesMenu />
    <!-- <h2 v-else>Something went wrong.</h2> -->
  </main>
</template>
