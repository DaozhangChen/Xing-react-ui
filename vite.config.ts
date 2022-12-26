import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgr from "vite-plugin-svgr";
import * as path from "path";
import typescript from '@rollup/plugin-typescript'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/vars/reset.scss";',
        javascriptEnabled: true,
      }
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/lib/index.tsx'),
      name: 'xing-react-ui',
      fileName: 'xing-react-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        dir: 'dist/lib',
        globals: {
          react: 'react',
          "react-dom": "react-dom"
        }
      },
      plugins: [
        typescript({
          tslib: resolve('typescript'),
          // include: resolve(__dirname, 'src/lib/**'),
          exclude: [
            resolve(__dirname, 'src/homepage/**'),
            resolve(__dirname, 'src/components/**'),
            resolve(__dirname, 'src/helper/**')
          ],
          outDir: resolve(__dirname, 'dist/lib/types')
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, "./src/assets")
    }
  },
  plugins: [
    react(),
    viteSvgr({
      exportAsDefault: true
    }),
  ],
})
