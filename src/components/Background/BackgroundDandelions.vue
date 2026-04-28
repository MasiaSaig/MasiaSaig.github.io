<template>
  <div
    class="dandelions"
    :style="[ {backgroundImage: `url('/dandelions/dandelions.png')`} ]"
  >
    <div ref="wrapper" class="pappuses-wrapper">
      <!-- <svg viewBox="0 0 1080 683" class="w-full h-full absolute">
        <path :d="scaledPath1" fill="none" fill-opacity="0" stroke="black" stroke-width="0.5"/>
      </svg> -->
      <ImageDef src="/dandelions/pappus1.png" class="pappus pappus-1" :style="{ offsetPath: `path('${scaledPath1}')`, width: `${maxWidthPappus1 * scaleX}px` }"/>

      <!-- <svg viewBox="0 0 1080 683" class="w-full h-full absolute">
        <path :d="scaledPath2" fill="none" stroke="red" stroke-width="0.5"/>
      </svg> -->
      <ImageDef src="/dandelions/pappus2.png" class="pappus pappus-2" :style="{ offsetPath: `path('${scaledPath2}')`, width: `${maxWidthPappus2 * scaleX}px` }" />

      <!-- <svg viewBox="0 0 1080 683" class="w-full h-full absolute">
        <path :d="scaledPath3" fill="none" stroke="green" stroke-width="0.5"/>
      </svg> -->
      <ImageDef src="/dandelions/pappus3.png" class="pappus pappus-3" :style="{ offsetPath: `path('${scaledPath3}')`, width: `${maxWidthPappus3 * scaleX}px` }" />

      <!-- <svg viewBox="0 0 1080 683" class="w-full h-full absolute">
        <path :d="scaledPath4" fill="none" stroke="blue" stroke-width="0.5" />
      </svg> -->
      <ImageDef src="/dandelions/pappus2.png" class="pappus pappus-4" :style="{ offsetPath: `path('${scaledPath4}')`, width: `${maxWidthPappus2 * scaleX}px` }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import debounce from '@/composables/debounce.ts';

const wrapper = ref<HTMLElement>()

const scaleX = ref(wrapper.value ? wrapper.value.clientWidth / 1080 : 1)
const scaleY = ref(wrapper.value ? wrapper.value.clientHeight / 683 : 1)
const maxWidthPappus1 = 67
const maxWidthPappus2 = 68
const maxWidthPappus3 = 52

const updateScale = debounce(() => {
  scaleX.value = wrapper.value ? wrapper.value.clientWidth / 1080 : 1
  scaleY.value = wrapper.value ? wrapper.value.clientHeight / 683 : 1
}, 200)

// offset-path: path("M728 318Q451 187-218 173");
const scaledPath1 = computed(() => `M${728 * scaleX.value} ${318 * scaleY.value}Q${451 * scaleX.value} ${187 * scaleY.value} ${-218 * scaleX.value} ${173 * scaleY.value}`)
// offset-path: path("830 150q-193-9-305 52-67 38-236 25-218-16-488 113");
const scaledPath2 = computed(() => `M${830 * scaleX.value} ${150 * scaleY.value}q${-193 * scaleX.value} ${-9 * scaleY.value} ${-305 * scaleX.value} ${52 * scaleY.value}q${-67 * scaleX.value} ${38 * scaleY.value} ${-236 * scaleX.value} ${25 * scaleY.value}q${-218 * scaleX.value} ${-16 * scaleY.value} ${-488 * scaleX.value} ${113 * scaleY.value}`)
// offset-path: path("M650 420Q375 271-218 460");
const scaledPath3 = computed(() => `M${650 * scaleX.value} ${420 * scaleY.value}Q${375 * scaleX.value} ${271 * scaleY.value} ${-218 * scaleX.value} ${460 * scaleY.value}`)
// offset-path: path("M886 372Q683 212-280 350");
const scaledPath4 = computed(() => `M${886 * scaleX.value} ${372 * scaleY.value}Q${683 * scaleX.value} ${212 * scaleY.value} ${-280 * scaleX.value} ${350 * scaleY.value}`)

onMounted(() => {
  window.addEventListener("resize", updateScale)
  nextTick(() => {
    updateScale()
  })
})
onUnmounted(() => {
  window.removeEventListener("resize", updateScale)
})
</script>

<style lang="scss" scoped>
$appear-end: 20%;
$dissapear-start: 60%;
$shrink-start: 40%;
$shrink-min-size: 0.2;

.dandelions {
  position: absolute;
  width: 100%;
  max-width: 1080px;
  max-height: 683px;
  aspect-ratio: calc(1080/683) / 1;
  bottom: 0;
  right: 0;
  // overflow: hidden;
  background-size: cover;
  background-position: center;

  transition: opacity 0.5s ease-in-out;
  // border: 1px solid black;
}
.pappuses-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.pappus {
  position: absolute;
  offset-distance: 0%;
  offset-rotate: auto;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  opacity: 0;
  z-index: -1;
}

.pappus-1 {
  animation-name: fadeCycle, windFloat, shrink;
}
.pappus-2 {
  animation-name: fadeCycle, windFloat, shrink;
  animation-delay: 1.5s;
}
.pappus-3 {
  animation-name: fadeCycle, windFloat, shrink;
  animation-delay: 3s;
}
.pappus-4 {
  animation-name: fadeCycle, windFloat, shrink;
  animation-delay: 5s;
}


@keyframes fadeCycle {
  0%   { opacity: 0% }
  #{$appear-end} { opacity: 100% }
  #{$dissapear-start}  { opacity: 100% }
  100% { opacity: 0%   }
}
@keyframes shrink {
  #{$shrink-start} { transform: scale(1) }
  100% { transform: scale($shrink-min-size) }
}
// @keyframes bigShrink {
//   0% { transform: scale(2) }
//   #{$shrink-start} { transform: scale(2) }
//   100% { transform: scale($shrink-min-size) }
// }
@keyframes windFloat {
  0% { offset-distance: 0%   }
  #{$appear-end} { offset-distance: 0%   }
  100% { offset-distance: 75% }
}
</style>