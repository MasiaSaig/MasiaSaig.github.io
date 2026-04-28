<template>
  <a class="block icon-wrapper">
    <ImageDef :src="src" class="w-full h-full"/>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  src: string,
}>()
</script>

<style scoped>
.icon-wrapper {
  background-color: #e0f7fa; /* Light background */
  color: #00838f; /* Darker accent icon color */
  padding: 10px;
  border-radius: 50%; /* Circle shape */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}

</style>