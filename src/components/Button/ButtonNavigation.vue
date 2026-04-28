<template>
  <a class="navigation-button" :href="`#${label}`">
    <span>{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
}>(), {
  label: ''
})
</script>

<style lang="scss">
.navigation-button {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 8px;
  transition: all 0.3s ease-in-out;
  border-style: solid;
  border-color: var(--color-accent);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background-color: var(--color-accent);
    transition: width 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
  
  &:hover {
    color: var(--color-accent);
  }
}

@keyframes spreadBothSides {
  100% { width: 100%; }
}
</style>