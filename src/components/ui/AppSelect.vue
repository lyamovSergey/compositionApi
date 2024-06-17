<template>
  <div class=" flex gap-2">
    <app-button @click="$emit('select', null)">
      <XMarkIcon class=" h-4" />
    </app-button>
    <select class=" w-full truncate rounded bg-gray-100 py-1 px-3" @change="$emit('select', +$event.target.value)">
      <option value="" disabled :selected="!isNotSelected">{{ palceholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value" :selected="selectedOption == value">{{
        label }}</option>
    </select>
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
import { selectOptionsIsValid } from '@/validators';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';
const $props = defineProps({
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
    type: [Number, null, undefined],
    required: true
  }
})
const isNotSelected = computed(() => !!$props.selectedOption)
const $emit = defineEmits(['select'])
</script>

<style lang="scss" scoped></style>