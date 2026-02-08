import { defineConfig } from 'vite'
import vue from 'unplugin-vue/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@misterisaak/ui': resolve(__dirname, '../../packages/ui/src'),
    },
    conditions: ['development', 'default'],
  },
  optimizeDeps: {
    exclude: ['@misterisaak/ui'],
  },
})
