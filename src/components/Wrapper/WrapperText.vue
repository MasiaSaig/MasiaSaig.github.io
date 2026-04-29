<template>
  <div class="about-container shadow-md rounded-xl p-4 max-h-full shadow-md">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.about-container {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  // box-shadow: inset 0 0 1rem var(--color-background);
  transition: background-color 0.3s linear;
  background-color: var(--color-background-light);
}
</style>