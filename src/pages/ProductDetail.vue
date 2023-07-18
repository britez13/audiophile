<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import data from "../data.json";

const router = useRouter();
const routeName = useRoute().path.split("/")[2];
console.log(routeName);

const products = [
  "yx1-earphones",
  "xx59-headphones",
  "xx99-mark-one-headphones",
  "xx99-mark-two-headphones",
  "zx7-speaker",
  "zx9-speaker",
];
const routeIsValid = products.find((product) => product === routeName);
if (!routeIsValid) {
  router.push({ name: "NotFound" });
}
const filteredProduct = data.filter((item) => item.slug === routeName);
const product = ref(filteredProduct[0]);
console.log(product);
</script>

<template>
  <main class="container">
    <button
      @click="
        () => {
          router.go(-1);
        }
      "
    >
      Go Back
    </button>

    <section>
      <picture>
        <source :srcset="product.image.desktop" media="(min-width: 1000px)" />
        <source :srcset="product.image.desktop" media="(min-width: 600px)" />
        <img
          class="object-cover rounded-lg"
          :src="product.image.mobile"
          :alt="product.name"
        />
      </picture>
      <div class="flex flex-col justify-start items-center gap-4">
        <h2 class="title text-[28px] tracking-[1px] text-left">
          {{ product.name }}
        </h2>
        <p class="description">{{ product.description }}</p>
        <button class="btn bg-orangish text-white">
          <router-link :to="`/product/${product.slug}`"
            >See Product</router-link
          >
        </button>
      </div>
      <span>$ {{ product.price }}</span>
      <div>
        <h2 class="title">Features</h2>
        <p class="description">{{ product.features }}</p>
      </div>
      <div>
        <h2 class="title">In the box</h2>
        <ul>
          <li class="block" v-for="characteristic of product.includes">
            <p>
              {{ characteristic.quantity }}x
              <span>{{ characteristic.item }}</span>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <picture v-for="gallery of product.gallery">
          <source :srcset="gallery.desktop" media="(min-width: 1000px)" />
          <source :srcset="gallery.tablet" media="(min-width: 600px)" />
          <img
            class="object-cover rounded-lg"
            :src="gallery.mobile"
            :alt="product.name"
          />
        </picture>
      </div>
      <div>
        <h3 class="title">You may also like</h3>
        <div>
          <div v-for="other of product.others">
            <picture>
              <source :srcset="other.image.desktop" media="(min-width: 1000px)" />
              <source :srcset="other.image.tablet" media="(min-width: 600px)" />
              <img
                class="object-cover rounded-lg"
                :src="other.image.mobile"
                :alt="product.name"
              />
            </picture>
            <div>
                <h4>{{ other.name }}</h4>
                <button class="btn bg-orangish text-white">
                    <router-link :to="`/prouduct/${other.slug}`">See Product</router-link>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <h2 v-else>Something went wrong.</h2> -->
  </main>
</template>
