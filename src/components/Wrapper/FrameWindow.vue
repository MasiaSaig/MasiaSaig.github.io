<template>
  <div class="frame-wrapper m-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] max-md:m-0 max-md:w-full max-md:h-full">
    <slot />
    
    <div class="frame-window max-md:pt-0 top-0 left-0 w-screen pt-4 animate__animated animate__slideInDown" />
    <div class="frame-window max-md:pl-0 top-0 left-0 pl-4 h-screen animate__animated animate__slideInLeft" />
    <div class="frame-window max-md:pr-0 top-0 right-0 pr-4 h-screen animate__animated animate__slideInRight" />
    <div class="frame-window max-md:pb-0 bottom-0 left-0 w-screen pb-4 animate__animated animate__slideInUp" />
  </div>
</template>

<style scoped>
.frame-wrapper {
  transition: all 0.3s linear;
}

.frame-window {
  position: fixed;
  background-color: var(--color-background-soft);
  z-index: 9999;
  transition: padding 0.3s linear;
}
</style>
