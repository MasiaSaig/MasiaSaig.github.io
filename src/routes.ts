import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import RaportGenerator from './views/RaportGenerator.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/raport-generator', component: RaportGenerator }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})