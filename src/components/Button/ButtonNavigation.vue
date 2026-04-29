<template>
  <button
    class="navigation-button"
    :class="{ active: id === activeArticle }"
    :href="`#${id}`"
    @click="scrollTo(id)"
  >
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
// import { useArticleStore, useGetArticleID } from '@/composables/useArticles';
import { articles } from '@/composables/useArticlesArray';

withDefaults(defineProps<{
  id: string,
  label?: string
}>(), {
  label: ''
})

// const articles = useArticleStore();
const activeArticle = ref<string | null>(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeArticle.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-20% 0px -50% 0px', // tweak for when section counts as "active"
      threshold: 0,
    }
  )

  articles.forEach((article) => {
    const el = document.getElementById(article.id)
    if (el) observer!.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<style lang="scss">
.navigation-button {
  display: flex;
  align-items: center;
  height: 100%;
  transition: all 0.3s ease-in-out;
  border-style: solid;
  border-color: var(--color-accent);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background-color: var(--color-accent);
    transition: width 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
  
  &:hover {
    color: var(--color-accent);
  }

  &.active {
    color: var(--color-accent);
    &::after {
      width: 100%;
    }
  }
}

@keyframes spreadBothSides {
  100% { width: 100%; }
}
</style>