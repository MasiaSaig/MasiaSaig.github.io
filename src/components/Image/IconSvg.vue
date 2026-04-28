<template>
  <a v-if="props.href" :href="props.href">
    <component :is="dynamicSvgIconComponent" />
  </a>
  <component v-else :is="dynamicSvgIconComponent" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  href?: string
}>();

const dynamicSvgIconComponent = defineAsyncComponent(() => {
  const name = 'Icon' + props.name.charAt(0).toUpperCase() + props.name.slice(1)
  return import(`@/components/Icon/${name}.vue`)
});
</script>

<style scoped>
</style>
