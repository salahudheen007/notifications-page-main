import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/notifications-page-main/',
  plugins: [vue()],
  server:{
    watch:{
      usePolling:true
    }
  }
})
