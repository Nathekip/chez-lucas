import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist')
// https://vite.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  base: "/chez-lucas",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        bd: resolve(root, 'bd', 'index.html'),
      }
    }
  }
})
