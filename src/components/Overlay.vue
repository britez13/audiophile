<script setup lang="ts">
    import { useModalStore } from '../store/modal';

    const store = useModalStore()
</script>

<template>
    <div @click="store.toggleOpenCart" v-if="store.cart" class="bg-blackish opacity-[0.4] fixed z-10 h-full w-full top-[12vh] px-6 py-6">
        
    </div>
</template>