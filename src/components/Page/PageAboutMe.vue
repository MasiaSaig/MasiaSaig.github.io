<template>
  <PageLayoutMiddle :active="active" class="p-4">
    <template #background>
      <Transition name="fade">
        <BackgroundMessagesAppear
          v-if="active"
          :max-active-messages="5"
          :padding="100"
          :gap="200"
          class="z-[-1]" />
        </Transition>
    </template>

    <WrapperText :active="active">
      <ContentDecorator :show-top="false">
        <h2 class="title mb-4">About Me</h2>
      </ContentDecorator>

      <span>
        Developer with experience in webdev using Vue.js, Nuxt, JavaScript, HTML and CSS, as well some front-end for desktop
        applications using QML and C++. Currently expanding my TypeScript skills and backend knowledge with PHP, Doctrine
        and Symfony.<br>
        This year I finished studying applied computer science at the AGH University of Science and Technology in Cracow and
        became an engineer. I plan to continue my studies next year to earn a master’s degree.<br>
        <p>I belive, that a person should strive to live a life without regret and to make most 
        of their time. That is why, I like to organize my time and prepare, before taking 
        some actions. Focusing fully on what I do at the moment, either working, studying 
        or even relaxing.</p>
        <br>
        <p>Browse my projects, on <a class="accent-text">Github account</a></p>
      </span>
    </WrapperText>
  </PageLayoutMiddle>
</template>

<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<style scoped>
</style>