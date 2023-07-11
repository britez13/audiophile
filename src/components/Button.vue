<script setup lang="ts">
    interface Props {
        color?: string,
        border?: string,
        bgcol?: string
        widthFull?: boolean
    }
   const {color, bgcol } = defineProps<Props>()
</script>

<template>
    <button :class="`bg-${bgcol} text-${color} uppercase text-[13px] tracking-[1px] py-3 px-5`">
       <slot></slot> 
    </button>
</template>
