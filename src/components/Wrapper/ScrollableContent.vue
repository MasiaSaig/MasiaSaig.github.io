<template>
  <div
    class="scroll-container overflow-auto max-h-full"
    v-scrollable
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.scroll-container {
  scrollbar-width: thin;
  scrollbar-color: var(--color-raw-white-mute) transparent;
  max-height: 90%;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px var(--color-raw-white-mute);
  border: solid 3px transparent;
  border-radius: 8px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 10px transparent;
  border: solid 3px transparent;
}
// ::-webkit-scrollbar-button {
//   display: none;
// }
// ::-webkit-scrollbar-track-piece {
//   background-color: transparent;
// }
// ::-webkit-scrollbar-corner {
//   background-color: violet;
// }
// ::-webkit-resizer {
//   background-color: orange;
// }
</style>