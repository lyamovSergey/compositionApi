<template>
  <div class=" mt-7">
    <ul>
      <li v-for="i in 24" :key="i" class=" flex relative flex-col gap-2 border-t border-gray-200 py-10 px-4">
        <a href="#"
          class=" rounded text-lg font-mono bg-gray-200 px-2 text-gray-500 absolute -top-4 left-1/2 -translate-x-1/2">
          {{ i }}:00</a>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>