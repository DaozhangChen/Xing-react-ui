import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgr from "vite-plugin-svgr";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@assets':path.resolve(__dirname,"./src/assets")
    }
  },
  plugins: [
      react(),
    viteSvgr({
      exportAsDefault:true
    })
  ],
})
