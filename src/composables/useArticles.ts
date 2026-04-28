import { defineStore } from 'pinia';

interface ArticleState {
  articles: string[]
}

export function useGetArticleID (article: string) {
  return article.replace(' ', '');
}

export const useArticleStore = defineStore('articles', {
  state: (): ArticleState => ({
    articles: []
  }),
  getters: {
    count: (state) => state.articles.length
  },
  actions: {
    add(article: string) {
      this.articles.push(article.trim());
    },
    remove(index: number) {
      this.articles.splice(index, 1);
    },
    clear() {
      this.articles = [];
    }
  }
});