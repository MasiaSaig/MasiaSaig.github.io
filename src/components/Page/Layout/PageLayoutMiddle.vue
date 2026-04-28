<template>
  <section class="animate__animated" :class="active ? 'animate__fadeIn' : 'animate__fadeOut'">
    <slot name="background" />

    <div class="page-middle flex items-center">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  active?: boolean
}>(), {
  active: true
});
</script>

<style scoped>
.page-middle {
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 4rem;
  margin: 0 auto;
}
</style>