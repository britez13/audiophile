<script setup lang="ts">
const categories = [
  {
    id: 1,
    name: "Headphones",
    route: "/headphones",
    img: "/src/assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    id: 2,
    name: "Speakers",
    route: "/speakers",
    img: "/src/assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    id: 3,
    name: "Earphones",
    route: "/earphones",
    img: "/src/assets/shared/desktop/image-category-thumbnail-earphones.png",
  },
];
</script>

<template>
  <section class="container mt-16 md:mt-24">
    <ul class="flex flex-col gap-16 md:flex-row md:gap-4">
      <li
        class="bg-greyish rounded-lg flex justify-center items-end relative min-h-[120px] md:grow md:min-h-[165px] md:pb-4"
        v-for="category of categories"
      >
        <img
          class="w-[110px] h-[110px] object-cover absolute left-1/2 -top-1/3 -translate-x-1/2 -translate-y1/2 md:w-[133px] md:h-[133px]"
          :src="category.img"
          alt=""
        />
        <div class="flex flex-col gap-2 text-center mb-2">
          <h3 class="title text-[15px] tracking-[1.071px]">
            {{ category.name }}
          </h3>
          <div class="flex justify-center items-center gap-2">
            <router-link :to="category.route">
              <span class="title text-[13px] tracking-[1px] opacity-50"
                >Shop</span
              >
            </router-link>
            <router-link :to="category.route">
              <img
                class="w-[6px] h-[11px] object-cover"
                src="../assets/shared/desktop/icon-arrow-right.svg"
                alt="Arrow icon"
              />
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
