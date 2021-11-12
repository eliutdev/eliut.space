import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Eliut González',
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-GH49KB4DMB',
        defer: true,
      },
    ],
  },
})
