import {
  PAGE_TIMELINE,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  HOURS_IN_DAY,
  MIDNIGHT_HOUR
} from './constants'
export function getCurrentHash() {
  let hash = window.location.hash.slice(1)
  if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
    return hash
  }
  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}
export function generateTimelineItems() {
  let timelineItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}
