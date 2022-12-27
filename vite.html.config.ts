import {defineConfig} from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import viteSvgr from "vite-plugin-svgr";

/** @type {import('vite').UserConfig} */
export default defineConfig({
    base:'/',
    build: {
        target:'modules',
        outDir:'dist',
        rollupOptions:{
            output:{
                manualChunks(id:any){
                    if (id.includes('react-syntax-highlighter')){
                        return 'highlighter';
                    }
                    if (id.includes('vite-plugin-svgr')){
                        return 'svgr';
                    }
                    if(id.includes('node_modules')){
                        return 'vendor';
                    }
                }
            }
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
