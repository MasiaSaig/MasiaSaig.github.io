<template>
  <section class="animate__animated" :class="active ? 'animate__fadeIn' : 'animate__fadeOut'">
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  active: boolean
}>();
</script>