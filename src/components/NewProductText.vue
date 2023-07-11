<script setup lang="ts">
interface INewProductText {
  color: string;
}
const { color } = defineProps<INewProductText>();
</script>

<template>
  <span
    :class="`text-${color} text-sm uppercase tracking-[10px] opacity-50 text-center`"
  >
    <slot></slot>
  </span>
</template>
