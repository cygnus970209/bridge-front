// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

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
  devtools: { enabled: true },
  alias: {
    '@': fileURLToPath(new URL('./assets/', import.meta.url)),
    '~': fileURLToPath(new URL('./', import.meta.url)),
  },
  components: {
    dirs: [
      {
        path: '@/components',
        extensions: ['vue'],
        global: true,
      },
    ],
  },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: "@import '@/css/main.scss';",
  //         // additionalData:
  //         //   "@import '@/css/abstracts/variables.scss'; @import '@/css/abstracts/mixin.scss'; @import '@/css/base/reset.scss'; @import '@/css/base/base.scss';",
  //       },
  //     },
  //   },
  // },
  // css: ['@/css/main.scss'],
  buildDir: 'dist',
  sourcemap: {
    server: true,
    client: false,
  },
});
