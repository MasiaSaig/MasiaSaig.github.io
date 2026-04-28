import 'animate.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'css-doodle'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { router } from './routes'

// import { vScrollable } from './directives/scrollable';
// app.provide('pageAnimationDuration', 1000) // ms
// app.directive('scrollable', vScrollable)

const pinia = createPinia();
const app = createApp(App)

AOS.init({
  once: true,
  startEvent: 'load',
  offset: 200,
})

app.use(router)
app.use(pinia)
app.mount('#app')