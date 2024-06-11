<template>
  <a :href="`#${PAGE_PROGRESS}`" class="flex items-center">
    <div class="flex items-center gap-1 text-sm" v-if="false">
      Day complete!
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
    <div class="flex items-center gap-1 text-sm" v-else>
      <div>Progress: <span class="font-mono">20%</span></div>
      <div class="rounded-full w-3 h-3 bg-red-500"></div>
    </div>
  </a>
</template>

<script setup>
import { PAGE_PROGRESS } from '../constants'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>
