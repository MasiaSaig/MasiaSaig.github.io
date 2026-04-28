<template>
  <div>
    <div v-if="showTop" class="accent-surface" />
    <slot />
    <div v-if="showBottom" class="accent-surface" />
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  showTop?: boolean,
  showBottom?: boolean
}>(), {
  showTop: true,
  showBottom: true
})
</script>

<style lang="scss" scoped>
.accent-surface {
  position: relative;
  overflow: hidden;
  display: block;
  width: 30px;
  height: 5px;

  background: rgba(var(--color-accent-rgb), 0.9);
}

.accent-surface::after {
  content: "";
  position: absolute;
  inset: 0;

  background: linear-gradient(
    110deg,
    rgba(var(--color-accent-light-rgb), 0) 0%,
    rgba(var(--color-accent-light-rgb), 0.15) 30%,
    rgba(var(--color-accent-light-rgb), 1) 45%,
    rgba(var(--color-accent-light-rgb), 0.15) 60%,
    rgba(var(--color-accent-light-rgb), 0) 100%
  );
  background-repeat: no-repeat;

  background-size: 250% 100%;
  background-position: -200% 0;

  pointer-events: none;
  opacity: 0.6;
  animation: shimmer-surface 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes shimmer-surface {
  from { background-position: -200% 0; }
  to {   background-position: 100% 0; }
}
</style>