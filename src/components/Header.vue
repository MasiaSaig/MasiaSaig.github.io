<template>
  <h1 :id="headerID" class="sm:text-[3rem] text-[2.5rem] font-bold font-[Roboto]">
    {{ label }}
  </h1>
</template>

<script setup lang="ts">
import { useArticleStore, useGetArticleID } from '@/composables/useArticles';

const props = withDefaults(defineProps<{
  label?: string,
  articleName?: string
}>(), {
  label: ''
});

const headerID = useGetArticleID(props.articleName ?? props.label);
// By default add label to articles.
const articles = useArticleStore();
articles.add(props.articleName ?? props.label)
</script>
