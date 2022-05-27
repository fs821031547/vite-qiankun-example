import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
// import { name } from 'package.json'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun('myMicroAppName',{
    useDevMode: true
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, "./src")
    }
  }
})
