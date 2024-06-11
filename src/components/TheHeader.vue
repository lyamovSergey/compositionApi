<template>
  <header class="flex sticky top-0 z-10 justify-center border-b bg-white">
    <div class="max-w-screen-sm w-full items-center flex justify-between p-3">
      <the-main-logo @click="$emit('goToMainPage')" />
      <the-header-progress @click="$emit('goToProgress')" />
    </div>
  </header>
</template>
<script setup>

import TheHeaderProgress from './TheHeaderProgress.vue';
import TheMainLogo from './TheMainLogo.vue';
const $emit = defineEmits(['goToMainPage', 'goToProgress'])
</script>
