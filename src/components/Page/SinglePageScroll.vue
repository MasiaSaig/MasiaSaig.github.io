<template>
  <div 
    class="viewport" 
    @wheel="onWheelScroll"
    @touchstart="onTouchStart"
    @touchmove.prevent="onTouchMove"
    @touchend="onTouchEnd"
  >
    <FrameWindow class="flex">
      <ControllersLeft :page="page" :pagesCount="pagesCount" />

      <div ref="pageWrapper" class="page-wrapper">
        <slot />
      </div>

      <!-- <ControllersLeft :page="index" :pagesCount="pagesCount" /> -->
    </FrameWindow>
  </div>
</template>

<script lang="ts" setup>
import debounce from '@/composables/debounce.ts';

const page = defineModel<number>('page', { type: Number, required: true })
const pageNext = defineModel<number>('pageNext', { type: Number, required: true })
const pageAnimationDuration = inject<number>('pageAnimationDuration', 1000)

const pageWrapper = ref<HTMLElement|null>(null)
const pagesCount = ref(0) // TODO: zastąp stałą wartością
let isAnimating = false

// Touch/Drag variables
const touchStart = ref(0)
const touchEnd = ref(0)
const isDragging = ref(false)
const touchMoved = ref(false)
const minSwipeDistance = 50 // Minimum pixels to trigger a slide

const changePage = (pageNumber: number) => {
  if (isAnimating) return
  if (0 <= pageNumber && pageNumber <= pagesCount.value - 1){
    pageNext.value = pageNumber
    isAnimating = true
    
    // Start new page appearance animation, after half animation duration
    setTimeout(() => {
      page.value = pageNumber;
    }, pageAnimationDuration/2)

    // Allow page change, after animation is complete and page is completely changed
    setTimeout(() => {
      isAnimating = false
    }, pageAnimationDuration)
  }
}
provide('changePage', changePage);

const onWheelScroll = debounce((e: WheelEvent) => {
  if (e.deltaY > 0) { changePage(page.value + 1) }
  if (e.deltaY < 0) { changePage(page.value - 1) }
}, 100)

const onTouchStart = (e: TouchEvent) => {
  if(e.touches[0] === undefined) return;
  touchStart.value = e.touches[0].clientY
  isDragging.value = true
  touchMoved.value = false;
}

const onTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return;
  touchMoved.value = true;
  if(e.touches[0] === undefined) return;
  touchEnd.value = e.touches[0].clientY;
}

const onTouchEnd = () => {
  if (!isDragging.value || !touchMoved.value) return
  isDragging.value = false

  const distance = touchStart.value - touchEnd.value

  // Swipe down (positive distance)
  if (distance > minSwipeDistance && page.value < pagesCount.value - 1) {
    page.value++
  }
  // Swipe up (negative distance)
  if (distance < -minSwipeDistance && page.value > 0) {
    page.value--
  }
}

onMounted(() => {
  // Calculate total number of pages (children of pageWrapper)
  pagesCount.value = pageWrapper.value?.children.length || 0
})
</script>

<style>
.viewport {
  height: 100vh;
  overflow: hidden;
}
.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease;
}
.page-wrapper > * {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>