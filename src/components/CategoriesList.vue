<script setup lang="ts">
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import data from '../data.json'

    const router = useRouter()
    const routeName = useRoute().path.split('/')[2];
    const categories = ['headphones', 'speakers', 'earphones']
    const routeIsValid = categories.find(category => category === routeName)
    if(!routeIsValid) {
        router.push({ name: 'NotFound'})    
    }
    const title = ref(routeName)
    const filteredProductsByCategory = data.filter(item => item.category === routeName)
</script>


<template>
    <section class="bg-blackish py-4">
            <h1 class="title text-white text-[28px] tracking-[2px]">{{ title }}</h1>
        </section>
    <main class="container">
        <ul class="mt-8 flex flex-col gap-20" v-if="filteredProductsByCategory.length">
             <li v-for="product of filteredProductsByCategory">
                <div class="flex flex-col gap-4">
                    <picture>
                        <source :srcset="product.image.desktop" media="(min-width: 1000px)" />
                        <source :srcset="product.image.desktop" media="(min-width: 600px)" />
                        <img class="object-cover rounded-lg" :src="product.image.mobile" :alt="product.name" />
                    </picture>
                    <div class="flex flex-col justify-center items-center gap-4">
                        <h3 class="wide text-orangish opacity-1" v-if="product.new">New Product</h3>
                        <h2 class="title text-[28px] tracking-[1px]"> {{ product.name }} </h2>
                        <p class="description">{{ product.description }}</p>
                        <button class="btn bg-orangish text-white">
                            <router-link :to="`/products/${product.slug}`">See Product</router-link>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
        <h2 v-else>Something went wrong.</h2>
    </main>
</template>