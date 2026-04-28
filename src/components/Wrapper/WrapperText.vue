<template>
  <ScrollableContent
    class="about-container shadow-md rounded-xl p-4 max-h-full shadow-md"
    :class="active ? 'about-container-start' : 'about-container-end'"
  >
      <slot />
  </ScrollableContent>
</template>

<script lang="ts" setup>
defineProps<{
  active: boolean
}>();
</script>

<style lang="scss" scoped>
.about-container {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  // box-shadow: inset 0 0 1rem var(--color-background);
}
.about-container-start {
  animation-delay: 0.5s;
  background-color: var(--color-background-light);
  animation-name: colorChangeStart;
}
.about-container-end {
  background-color: var(--color-background);
  animation-name: colorChangeEnd;
}
@keyframes colorChangeStart {
  100% { background-color: var(--color-background-light); }
}
@keyframes colorChangeEnd {
  0% { background-color: var(--color-background-light); }
  100% { background-color: var(--color-background); }
}
</style>