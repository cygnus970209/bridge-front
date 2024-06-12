// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'bridge',
      htmlAttrs: {
        lang: 'ko',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      ],
    },
  },
  devtools: { enabled: false },
  components: {
    dirs: [
      {
        path: '@/components',
        extensions: ['vue'],
        global: true,
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "assets/css/abstracts/variables" as *; @import "assets/css/abstracts/mixin";`,
        },
      },
    },
  },
  css: ['@/assets/css/main.scss'],
});
