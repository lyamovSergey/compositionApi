<template>
  <div class=" flex gap-2">
    <app-button>
      <XMarkIcon class=" h-4" />
    </app-button>
    <select class=" w-full truncate rounded bg-gray-100 py-1 px-3">
      <option value="" disabled selected>{{ palceholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value" :selected="selectedOption == value">{{
        label }}</option>
    </select>
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
import { selectOptionsIsValid } from '@/validators';
import { XMarkIcon } from '@heroicons/vue/24/outline';
defineProps({
  options: {
    type: Array,
    required: true,
    validator: selectOptionsIsValid
  },
  palceholder: {
    type: String,
    default: 'Rest',
  },
  selectedOption: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>