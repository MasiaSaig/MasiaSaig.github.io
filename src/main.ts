import 'animate.css';
// import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import 'css-doodle'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ViteSSG } from 'vite-ssg'
import { routes } from './routes'

// import { vScrollable } from './directives/scrollable';
// app.provide('pageAnimationDuration', 1000) // ms
// app.directive('scrollable', vScrollable)

export const createApp = ViteSSG(
  App,
  { routes },
  // app, router, routes, isClient, initialState
  ({ app, isClient, }) => {
    const pinia = createPinia();
    app.use(pinia);
    
    if(isClient){
      AOS.init({
        once: true,
        startEvent: 'load',
        offset: 200,
      })
    }
  }
)
// const app = createApp(App)

// app.use(router)
// app.use(pinia)
// app.mount('#app')