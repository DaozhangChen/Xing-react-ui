import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgr from "vite-plugin-svgr";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry:path.resolve(__dirname,'./src/lib/index.tsx'),
      name:'xing-react-ui',
      fileName:'xing-react-ui',
    },
    rollupOptions:{
      external:['react'],
      output:{
        dir:'dist/lib',
        globals:{
          react:'React'
        }
      }
    }
  },
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
