// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/google-fonts'],
  css: ['@/assets/scss/main.scss'],
  image: {
    dir: 'assets/images',
  },
  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 700],
      Montserrat: [300, 400, 500, 600, 700],
    },
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
  },
})
