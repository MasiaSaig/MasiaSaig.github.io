<template>
  <div class="relative w-full h-full">
    <ImageDef :src="$attrs.src" :alt="$attrs.alt" class="p-2 w-full h-full object-contain" />
    <div class="absolute inset-0 overlay">
      <p class="overlay-label test-base md:text-2xl flex size-full items-center justify-center">{{ label }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string
}>(), {
  label: ''
});
</script>

<style lang="scss" scoped>
.overlay {
  background-color: rgba(30, 30, 30, 0.5);
  transition: opacity 300ms ease-in;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
}

.overlay-label {
  font-weight: 700;
  color: var(--color-raw-white);
}
</style>