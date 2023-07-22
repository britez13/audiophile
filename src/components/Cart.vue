<script setup lang="ts">
    import { useCartStore } from '../store/cart';
    import { useModalStore } from '../store/modal';

    const storeCart = useCartStore()
    const storeModal = useModalStore()
</script>

<template>
    <div v-if="storeModal.cart" class=" bg-white absolute right-[10%] top-24 z-20 flex flex-col gap-4 w-80 h-80 text-black rounded-lg p-6">
            <div class="flex justify-between">
                <span>Cart ({{ storeCart.length }})</span>
                <button>Remove all</button>
            </div>
            <ul>
                <li class="text-black" v-for="product of storeCart.cartProducts">
                    <div class="flex gap-2">
                        <img class="w-[64px] h-[64px] object-cover rounded-lg" :src="product.image.mobile" 
                        :alt="product.name">
                        <div class="flex flex-col justify-evenly">
                            <h4>{{ product.name.split(" ").slice(0, -1).join(" ") }}</h4>
                            <span>{{ product.price }}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="flex justify-between">
                <h3>Total</h3>
                <span>{{ storeCart.totalPrice }}</span>
            </div>
            <router-link to="/checkout">
                <button class="btn bg-orangish text-white w-full">Checkout</button>
            </router-link>
        </div>
</template>