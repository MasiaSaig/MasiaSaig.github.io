<template>
  <div class="absolute z-[-1]">
    <css-doodle ref="doodle">
      :doodle {
        @grid: 18;
        @size: 100vmax;
        grid-gap: 1px;
      }
      background: #f2860e;
      opacity: @rand(.1, 0.8);
      transform: scale(@rand(.1, .6));
      animation: blink infinite @r(1s, 10s) linear alternate;
      @keyframes blink {
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    </css-doodle>
  </div>
</template>

<script lang="ts" setup>
// const doodle = ref(null)

// function refresh() {
//   // css-doodle's built-in method
//   doodle.value?.update()
// }
</script>