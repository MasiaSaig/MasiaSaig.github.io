import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  { 
    path: '/',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/raport-generator',
    component: () => import('./views/RaportGenerator.vue')
  }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})