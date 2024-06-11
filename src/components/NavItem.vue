<template>
  <li class="flex grow items-center justify-center">
    <a class="p-3 capitalize w-full text-sm flex flex-col items-center justify-center gap-1" v-bind="$attrs">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<style lang="scss" scoped></style>