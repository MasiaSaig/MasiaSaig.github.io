import { createMemoryHistory, createRouter } from 'vue-router'


export const routes = [
  { 
    path: '/',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/raport-generator',
    component: () => import('./pages/RaportGenerator.vue')
  }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})