<script setup lang="ts">
    // import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import data from '../data.json'

    const router = useRouter()
    const routeName = useRoute().path.split('/')[2];
    console.log(routeName);
    
    const products = [
        'yx1-earphones', 'xx59-headphones', 'xx99-mark-one-headphones', 
        'xx99-mark-two-headphones', 'zx7-speaker', 'zx9-speaker'
    ]
    const routeIsValid = products.find(product => product === routeName)
    if(!routeIsValid) {
        router.push({ name: 'NotFound'})    
    }
    const filteredProductsByCategory = data.filter(item => item.slug === routeName)
</script>

<template>
    <main class="container">
        <button @click="() => {router.go(-1)}">Go Back</button>
        <ul class="mt-8 flex flex-col gap-20" v-if="filteredProductsByCategory.length">
             <li v-for="product of filteredProductsByCategory">
                <div class="flex flex-col gap-4">
                    <picture>
                        <source :srcset="product.image.desktop" media="(min-width: 1000px)" />
                        <source :srcset="product.image.desktop" media="(min-width: 600px)" />
                        <img class="object-cover rounded-lg" :src="product.image.mobile" :alt="product.name" />
                    </picture>
                    <div class="flex flex-col justify-start items-center gap-4">
                        <h2 class="title text-[28px] tracking-[1px] text-left"> {{ product.name }} </h2>
                        <p class="description">{{ product.description }}</p>
                        <button class="btn bg-orangish text-white">
                            <router-link :to="`/product/${product.slug}`">See Product</router-link>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
        <h2 v-else>Something went wrong.</h2>
    </main>
</template>