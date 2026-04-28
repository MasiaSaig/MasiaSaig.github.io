<template>
  <div class="flex flex-col justify-between items-center controls-wrapper">
    <div>
      <TestSquare class="mx-auto" />
      <Transition name="fade" >
        <div v-show="page > 0" class="flex flex-col items-center gap-2">
          <ButtonLinkedin class="size-[32px] mt-4" />
          <ButtonGithub class="size-[32px]" />
        </div>
      </Transition>
    </div>

    <Pagination :page="page" :pages-count="pagesCount" class="center-y" />

    <div class="flex flex-col items-center gap-2">
      <slot name="bottom-items" />
      <TestSquare class="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  page: number,
  pagesCount: number
}>();
</script>

<style scoped>
.controls-wrapper {
  padding: 1rem;
  width: 64px;
  height: 100%;
  z-index: 999;
  position: absolute;
  left: 0;
  top: 0;
}

.center-y {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-32px);
}
</style>