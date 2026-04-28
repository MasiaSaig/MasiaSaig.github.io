<template>
  <Transition name="fade">
    <div v-bind="$attrs" class="dialog fixed z-[999] p-4 max-sm:p-2 rounded-md overflow-hidden">
      <slot />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.dialog {
  background-color: green; //var(--color-background);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>