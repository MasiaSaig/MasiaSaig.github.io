<template>
  <PageLayoutMiddle :active="active">
    <template #background>
      <Transition name="fade">
        <BackgroundDandelions v-if="active" />
      </Transition>
    </template>

    <ContentDecorator class="md:w-[50%] sm:w-[60%] w-full animate__animated"
      :class="active ? 'animate__slideInLeft' : 'animate__slideOutLeft'"
    >
      <div class="my-8">
        <h1 class="sm:text-[4rem] text-[3rem]">Maciej Müller</h1>
        
        <div class="flex gap-2 contacts ">
          <ButtonLinkedin class="size-12" />
          <ButtonGithub class="size-12" />
        </div>

        <h2 class="sm:text-[1.25rem] text-base aboutme-description antialiased">
          Developer, IT and fantasy entusiast.<br>
          Engineer after graduating from AGH University of Science and Technology in Applied Computer Science.
        </h2>
      </div>
    </ContentDecorator>
  </PageLayoutMiddle>
</template>

<script setup lang="ts">
import ContentDecorator from '../Wrapper/ContentDecorator.vue';

defineProps<{
  active: boolean
}>()
</script>

<style lang="scss" scoped>
.introduction-content {
  max-width: 33%;
  @media (min-width: 1080px) {
    max-width: 50%;
  }
}

h1 {
  font-weight: 800;
  line-height: 3.75rem;
  padding-bottom: 2rem;
}

.aboutme-description {
  line-height: 1.75rem;
  font-weight: 400;
  // text-shadow: white 0px 0px 4px;
  text-shadow: 0px 1px 2px rgb(255 255 255 / 100%);
}

@for $i from 1 through 2 {
  .contacts > *:nth-child(#{$i}) {
    animation: pulse;
    animation-duration: 1s;
    animation-delay: calc(#{$page-animation-duration}s + 2s + 0.5*#{$i}s);
    // animation-iteration-count: infinite;
  }
}

@keyframes pulse {
  0%  { transform: scale(1) }
  50% { transform: scale(1.1) }
  100% { transform: scale(1) }
}
</style>