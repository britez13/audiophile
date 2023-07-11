<script setup lang="ts">
    interface DescriptionProps {
        color: string,
        paddingX?: string
    }
    const {color, paddingX} = defineProps<DescriptionProps>()
</script>

<template>
    <p :class="`text-${color} mt-${paddingX} text-[15px] font-medium leading-6 opacity-75 text-center`">
      <slot></slot> 
    </p>
</template>