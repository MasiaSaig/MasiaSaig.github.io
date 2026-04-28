<template>
  <header class="ease-linear duration-300 px-6 pt-6 pb-2 max-md:px-4 max-md:pt-2 top-0 shadow-md animate__animated animate__slideInDown">
    <div class="topbar max-w-5xl mx-auto relative">
      <Logo />

      <div class="navigation-links flex gap-2 items-center max-md:hidden">
        <ButtonNavigation v-for="(item, index) in articles.articles" :key="index" :label="item" />
      </div>

      <div class="flex ml-auto">
        <div class="max-[300px]:hidden contact-buttons flex gap-3 items-center">
          <ButtonLinkedin class="max-[400px]:hidden" data-aos="fade-in" data-aos-anchor="#AboutMe" data-aos-delay="200" />
          <ButtonGithub class="max-[400px]:hidden" data-aos="fade-in" data-aos-anchor="#AboutMe" data-aos-delay="100" />
          <ButtonThemeChange class="max-[300px]:hidden p-[4px] animate__animated animate__fadeIn" />
        </div>
        <OverflowMenu class="md:hidden block ml-auto" />
      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
import { useArticleStore } from '@/composables/useArticles';

const articles = useArticleStore();
</script>

<style lang="scss" scoped>
header {
  background-color: var(--color-background-mute);
  position: sticky;
  z-index: 99;
  width: 100%;
}

.topbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  transition: all 0.3s linear;
}

.navigation-links {
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: Roboto;
}

.contact-buttons > * {
  height: 36px;
  width:  36px;
  animation-delay: calc(300ms + var(--order) * 100ms);
}
</style>