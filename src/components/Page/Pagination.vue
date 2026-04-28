<template>
  <div class="space-y-2">
    <button v-for="(p, index) in pagesCount" :key="p"
      class="circle"
      :class="index==page ? 'bg-orange-600' : 'bg-gray-400'"
      @click="changePage(index)"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  page: number,
  pagesCount: number
}>();
const changePage = inject('changePage');
</script>

<style scoped>
.circle {
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  opacity: 50%;
}
</style>