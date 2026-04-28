<template>
  <PageLayout :active="active">
    <div
      class="mt-24 mx-auto w-25 h-25 animate__animated"
      :class="active ? 'animate__fadeIn' : 'animate__fadeOut'"
      :style="`background: ${randomedColor}`" />
  </PageLayout>
</template>

<script setup lang="ts">
defineProps<{
  active: boolean
}>()

const randomStringColor = () => {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

const randomedColor = ref(randomStringColor())
</script>

<style scoped>
</style>