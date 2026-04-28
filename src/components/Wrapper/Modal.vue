<template>
  <Teleport defer to="#popups">
    <Transition name="fade">
      <div v-if="show" v-bind="$attrs" class="fixed z-[90] background">
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const show = defineModel();

watch(show, () => {
  if(show.value)
    document.body.classList.add('overflow-hidden');
  else
    document.body.classList.remove('overflow-hidden');
})
</script>

<style>
/* .slideDown-enter-active,
.slideDown-leave-active {
  transition: transform 0.3s linear, opacity 0.3s linear;
  overflow: hidden;
}
.slideDown-enter-from,
.slideDown-leave-to {
  transform: translateY(-100%);
  opacity: 0;
} */
</style>