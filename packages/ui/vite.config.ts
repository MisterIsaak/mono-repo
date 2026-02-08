import { defineConfig } from 'vite'
import vue from 'unplugin-vue/vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue({
      isProduction: true,
    }),
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        components: resolve(__dirname, 'src/components/index.ts'),
        composables: resolve(__dirname, 'src/composables/index.ts'),
        utilities: resolve(__dirname, 'src/utilities/index.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.mjs`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
