import { defineNuxtConfig } from 'nuxt3'
import path from "path";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    mode: 'universal',
    css: [
        '@/assets/styles/main.scss'
    ],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
    alias: {
        '@': path.resolve(__dirname)
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/variables.scss";',
                },
            },
        },
    }
})
