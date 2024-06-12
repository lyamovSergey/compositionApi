<template>
  <li class=" flex relative flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <a href="#" :class="hourClassses">
      {{ timelineItem.hour }}:00
    </a>
    <app-select :options="options" :palceholder="'Rest'" :selectedOption="selectedOption" />
  </li>
</template>

<script setup>

import AppSelect from '@/components/ui/AppSelect.vue'

let props = defineProps({
  timelineItem: {
    type: Object,
    required: true
  }
})
let hourClassses = ['rounded text-lg font-mono px-2 absolute -top-4 left-1/2 -translate-x-1/2',
  props.timelineItem.hour == new Date().getHours() ? ' bg-blue-500 font-black text-white' : 'bg-gray-200 text-gray-500'
]
let options = [
  {
    value: 0,
    label: 'Coding'
  },
  {
    value: 1,
    label: 'Reading'
  },
  {
    value: 2,
    label: 'Training'
  }
]
let selectedOption = 1
</script>
