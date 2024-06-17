<template>
  <a href="#" :class="hourClassses">
    {{ formattedHour }}
  </a>
</template>

<script setup>
import { computed } from 'vue';

let $props = defineProps(['hour'])
let hourClassses = ['rounded text-lg font-mono px-2 absolute -top-4 left-1/2 -translate-x-1/2',
  $props.hour == new Date().getHours() ? ' bg-blue-500 font-black text-white' : 'bg-gray-200 text-gray-500'
]
let formattedHour = computed(() => `${$props.hour.toString().padStart(2, 0)}:00`)
</script>
