<template>
  <button @click="$emit('click')"
    class=" rounded bg-gray-100 p-2 enabled:hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50">
    <slot></slot>
  </button>
</template>

<script setup>
const $emit = defineEmits(['click'])
</script>
