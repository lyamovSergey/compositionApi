<template>
  <div class=" mt-7">
    <ul>
      <time-line-item v-for="timelineItem in timelineItems" :key="timelineItem.hour"
        :timelineItem="timelineItem"></time-line-item>
    </ul>
  </div>
</template>

<script setup>
import TimeLineItem from '../TimeLineItem.vue';
defineProps({
  timelineItems: {
    type: Array,
    required: true
  }
})
</script>