import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'Vuetify3Confirm',
      fileName: 'vuetify3-confirm'
    },
    rollupOptions: {
      external: ['vue', 'vuetify',"vuetify/components"],
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify'
        }
      }
    }
  }
})
