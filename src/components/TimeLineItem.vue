<template>
  <li class=" flex relative flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <timeline-hour :hour="timelineItem.hour" />
    <app-select :options="options" :palceholder="'Rest'" :selectedOption="selectedOption"
      @select="selectedOption = $event" />
  </li>
</template>

<script setup>

import AppSelect from '@/components/ui/AppSelect.vue'
import TimelineHour from '@/components/TimelineHour.vue'
import { ref } from 'vue'
defineProps({
  timelineItem: {
    type: Object,
    required: true
  }
})

let options = [
  {
    value: 1,
    label: 'Coding'
  },
  {
    value: 2,
    label: 'Reading'
  },
  {
    value: 3,
    label: 'Training'
  }
]
let selectedOption = ref(1)
</script>
