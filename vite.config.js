import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue2'
import pkg from './package.json'

console.log(pkg.name)

// https://vite.dev/config/
export default defineConfig({
  root: './playground/',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
    },
    outDir: resolve(__dirname, './lib'),
    rollupOptions: {
      external: ['element-ui'],
    }
  },
  plugins: [vue(), dts()],
})
