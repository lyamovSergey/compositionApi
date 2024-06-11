<template>
  <nav class="flex sticky bottom-0 z-10 justify-between border-t bg-white">
    <ul class="max-w-screen-sm w-full items-center flex justify-between m-auto">
      <nav-item v-for="(icon, navItem) in NAV_ITEMS" :key="navItem" :href="`#${navItem}`"
        @click="$emit('changePage', navItem)" :class="{ ' bg-gray-200 pointer-events-none': currentPage == navItem }">
        <component :is="icon" class="h-5 w-5" /> {{ navItem }}
      </nav-item>
    </ul>
  </nav>
</template>

<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'

defineProps(['currentPage'])
const $emit = defineEmits(['changePage'])
</script>

<style lang="scss" scoped></style>