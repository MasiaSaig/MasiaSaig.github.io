<template>
  <RouterView />
</template>

<script setup lang="ts">
// import NotFound404 from './components/Errors/NotFound404.vue'

// const routes: Record<string, typeof Home> = {
//   '/': Home,
//   '/raport-generator': RaportGenerator
// }

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   console.log('hash changed', window.location.hash)
//   currentPath.value = window.location.hash
// })

// const currentView = computed(() => {
//   console.log(currentPath.value, routes)
//   return routes[currentPath.value.slice(1) || '/'] || NotFound404
// })
</script>