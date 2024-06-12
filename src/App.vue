<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheNavigation from '@/components/TheNavigation.vue'
import TheActivitiesPageVue from './components/pages/TheActivitiesPage.vue'
import TheProgressPageVue from './components/pages/TheProgressPage.vue'
import TheTimelinePageVue from './components/pages/TheTimelinePage.vue'
import { ref } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import { getCurrentHash, generateTimelineItems } from './functions'

const currentPage = ref(getCurrentHash())
let timelineItems = generateTimelineItems()
function updateCurrentPage(pageName) {
  currentPage.value = pageName
}

</script>

<template>
  <TheHeader @goToMainPage="updateCurrentPage(PAGE_TIMELINE)" @goToProgress="updateCurrentPage(PAGE_PROGRESS)" />
  <main class="max-w-screen-sm w-full pl-3 pr-3 mt-0 mb-0 m-auto flex flex-col flex-grow">
    <TheTimelinePageVue v-show="currentPage == PAGE_TIMELINE" :timelineItems="timelineItems" />
    <TheActivitiesPageVue v-show="currentPage == PAGE_ACTIVITIES" />
    <TheProgressPageVue v-show="currentPage == PAGE_PROGRESS" />
  </main>
  <TheNavigation :currentPage="currentPage" @changePage="updateCurrentPage($event)" />
</template>
