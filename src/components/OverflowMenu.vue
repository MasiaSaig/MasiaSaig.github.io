<template>
  <div>
    <ButtonBurger v-model="showMenu" @click="toggleMenu()" class="size-[48px]" />

    <Modal v-model="showMenu" class="md:hidden top-[64px] right-0 inset-0 transition-all duration-300 linear">
      <div class="articles p-4 flex flex-col gap-2">
        <a
          v-for="(article, index) in articles" :key="index"
          :href="`#${article.id}`"
          class="animate__animated animate__fadeInDown"
          :style="`--order: ${index}`"
          @click="toggleMenu()"
        >
          {{ article.label }}
        </a>
      </div>

      <div class="flex flex-wrap px-4 items-center justify-between w-full min-[400px]:hidden animate__animated animate__fadeIn">
        <div class="socials flex items-center justify-center gap-2">
          <ButtonLinkedin />
          <ButtonGithub />
        </div>
        <ButtonThemeChange class="hidden max-[300px]:block size-[32px]" />
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
// import { useArticleStore } from '@/composables/useArticles';
import { articles } from '@/composables/useArticlesArray';

const showMenu = ref<boolean>(false);
function toggleMenu () {
  showMenu.value = !showMenu.value
}

// const articles = useArticleStore();
</script>

<style scoped>
.articles > a {
  width: 100%;
  max-width: 100%;
  text-align: center;
  animation-delay: calc(100ms + var(--order) * 100ms);
}
.socials > * {
  width: 36px;
  height: 36px;
  animation-delay: 100ms;
}
</style>