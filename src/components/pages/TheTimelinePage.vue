<template>
  <div class=" mt-7">
    <ul>
      <time-line-item v-for="{ hour } in timelineItems" :key="hour">{{ hour }}</time-line-item>
    </ul>
  </div>
</template>

<script setup>
import { generateTimelineItems } from '@/functions';
import TimeLineItem from '../TimeLineItem.vue';
let timelineItems = generateTimelineItems()
</script>

<style lang="scss" scoped></style>