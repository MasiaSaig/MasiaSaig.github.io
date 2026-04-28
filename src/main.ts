import 'animate.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'css-doodle'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { vScrollable } from './directives/scrollable';

const pinia = createPinia();
const app = createApp(App)

// app.provide('pageAnimationDuration', 1000) // ms
// app.directive('scrollable', vScrollable)

AOS.init({
  once: true,
  startEvent: 'load',
  offset: 200,
})

app.use(AOS)
app.use(pinia)
app.mount('#app')