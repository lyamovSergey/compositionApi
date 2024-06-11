<template>
  <a :href="`#${PAGE_TIMELINE}`" class="flex justify-between items-center">
    <img src="../assets/img/testIO-logo-rgb1.png" alt="logo" class="h-12" />
    <span class="ml-2 text-2xl font-bold">Test logo</span>
  </a>
</template>

<script setup>
import { PAGE_TIMELINE } from '../constants'
</script>