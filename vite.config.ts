import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue({
      // template: {
      //   compilerOptions: {
      //     isCustomElement: tag => tag === 'css-doodle'
      //   }
      // }
    }),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
    svgLoader({
      defaultImport: 'url' // 'raw', 'component'
    }),
    AutoImport({
      dts: true,
      imports: [
        'vue',
      ],
    }),
    Components({
      dts: true,
      dirs: ['./src/components'],
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/main.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
