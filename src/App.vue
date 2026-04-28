<template>
  <TopBar />
  <FrameWindow class="relative">

    <div class="max-w-5xl m-auto">
      <Introduction />
      <AboutMe />
      <Skills class="md:my-0 my-16" />
    </div>

    <div id="popups"></div>

  </FrameWindow>
</template>

<script setup lang="ts">
// TODO: dodaj routing https://github.com/posva/unplugin-vue-router
</script>

<style lang="scss">
.background {
  background-color: var(--color-background);
}

.accent-text {
  color: var(--color-accent);
  background-image: 
    linear-gradient(
      120deg,
      rgba(var(--color-accent-second-rgb),0) 0%,
      rgba(var(--color-accent-second-rgb),0.15) 30%,
      rgba(var(--color-accent-second-rgb),1) 45%,
      rgba(var(--color-accent-second-rgb),0.15) 60%,
      rgba(var(--color-accent-second-rgb),0) 100%
    );

  background-size: 250% 100%;
  background-repeat: no-repeat;
  background-position: -200% 0;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  text-shadow:
    0 0 1px rgba(var(--color-accent-rgb), 1),
    0 0 8px rgba(var(--color-accent-rgb), 0.08);

  animation: shimmer-move 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

/* .shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(var(--color-accent-rgb),0.25),
    rgba(var(--color-accent-rgb),0.05) 40%,
    transparent 60%
  );
  pointer-events: none;
  mix-blend-mode: overlay;
  opacity: 0.4;
} */

@keyframes shimmer-move {
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
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
