<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import data from "../data.json";

const router = useRouter();
const routeName = ref(useRoute().path.split("/")[2]);

console.log("it was loaded again");

onMounted(() => {
  console.log("onmounted my friend");
  
})


const products = [
  "yx1-earphones",
  "xx59-headphones",
  "xx99-mark-one-headphones",
  "xx99-mark-two-headphones",
  "zx7-speaker",
  "zx9-speaker",
];
const routeIsValid = products.find((product) => product === routeName.value);
if (!routeIsValid) {
  router.push({ name: "NotFound" });
}
const filteredProduct = data.filter((item) => item.slug === routeName.value);
const product = ref(filteredProduct[0]);

onUnmounted( () => {
  routeName.value = ""
})

</script>

<template>
  <main class="container">
    <button
      class="mt-4"
      @click="
        () => {
          router.go(-1);
        }
      "
    >
      Go Back
    </button>

    <section class="mt-6">
      <div class="md:grid grid-cols-2 gap-8 lg:gap-12">
        <picture>
          <source :srcset="product.image.desktop" media="(min-width: 1000px)" />
          <source :srcset="product.image.desktop" media="(min-width: 600px)" />
          <img
            class="object-cover rounded-lg"
            :src="product.image.mobile"
            :alt="product.name"
          />
        </picture>
        <div
          class="flex flex-col justify-start items-start gap-6 mt-8 lg:justify-center"
        >
          <h2
            class="title text-[28px] tracking-[1px] text-left md:text-[32px] md:tracking-[1.143px]"
          >
            {{ product.name }}
          </h2>
          <p class="description-left">{{ product.description }}</p>
          <span class="title text-[18px] tracking-[1.2px]"
            >$ {{ product.price }}</span
          >
          <div class="flex gap-2">
            <input class="bg-greyish" type="number" />
            <button
              class="btn bg-orangish text-white hover:bg-light-orangish transition-colors"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div class="mt-12 lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="lg:col-span-2">
          <h2
            class="title-left text-[24px] md:text-[32px] md:tracking-[1.143px]"
          >
            Features
          </h2>
          <p class="description-left mt-4 lg:pr-12">{{ product.features }}</p>
        </div>
        <div class="md:grid md:grid-cols-2 md:mt-12 lg:grid-cols-1 lg:mt-0">
          <h2
            class="title-left text-[24px] mt-12 md:text-[32px] md:tracking-[1.143px] md:mt-0"
          >
            In the box
          </h2>
          <ul class="mt-6 flex flex-col gap-2 md:mt-0">
            <li class="block" v-for="characteristic of product.includes">
              <p class="text-[15px] font-bold text-orangish">
                {{ characteristic.quantity }}x
                <span class="ml-3 description-left text-black">{{
                  characteristic.item
                }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-12 gallery">
        <picture v-for="gallery of product.gallery">
          <source :srcset="gallery.desktop" media="(min-width: 1000px)" />
          <source :srcset="gallery.tablet" media="(min-width: 600px)" />
          <img
            class="object-cover rounded-lg block h-full"
            :src="gallery.mobile"
            :alt="product.name"
          />
        </picture>
      </div>
      <div class="mt-12">
        <h3 class="title text-[24px] md:text-[32px] md:tracking-[1.143px]">
          You may also like
        </h3>
        <div class="mt-6 flex flex-col gap-10 md:grid md:grid-cols-3">
          <div v-for="other of product.others">
            <picture>
              <source
                :srcset="other.image.desktop"
                media="(min-width: 1000px)"
              />
              <source :srcset="other.image.tablet" media="(min-width: 600px)" />
              <img
                class="object-cover rounded-lg"
                :src="other.image.mobile"
                :alt="product.name"
              />
            </picture>
            <div class="mt-4 flex flex-col justify-center items-center gap-4">
              <h4>{{ other.name }}</h4>
              <router-link :to="`/products/${other.slug}`">
                <button
                  class="btn bg-orangish text-white hover:bg-light-orangish transition-colors"
                >
                  See Product
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <h2 v-else>Something went wrong.</h2> -->
  </main>
</template>
