<script setup lang="ts">
const categories = [
  {
    id: 1,
    name: "Headphones",
    img: "/src/assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    id: 2,
    name: "Speakers",
    img: "/src/assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    id: 3,
    name: "Earphones",
    img: "/src/assets/shared/desktop/image-category-thumbnail-earphones.png",
  },
];
</script>

<template>
  <section class="container mt-14">
    <ul class="flex flex-col gap-10 md:flex-row md:gap-4">
      <li
        class="bg-greyish rounded-lg flex justify-center items-end relative min-h-[120px] md:grow"
        v-for="category of categories"
      >
        <img
          class="w-[110px] h-[110px] object-cover absolute left-1/2 -top-1/3 -translate-x-1/2 -translate-y1/2"
          :src="category.img"
          alt=""
        />
        <div class="flex flex-col gap-2 text-center mb-2">
          <h3>{{ category.name }}</h3>
          <span>Shop</span>
        </div>
      </li>
    </ul>
  </section>
</template>
