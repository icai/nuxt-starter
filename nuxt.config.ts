// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import path from 'path'
export default defineNuxtConfig({
  rootDir: __dirname,
  srcDir: "client",
  serverDir: "server",
  app: {
    // head
    head: {
      title: 'Element Plus + Nuxt 3',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'ElementPlus + Nuxt3',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
  alias: {
    '~': path.resolve(__dirname, 'client'),
    '@': path.resolve(__dirname, 'client'),
    '~~': path.resolve(__dirname, 'client'),
    '@@': path.resolve(__dirname, 'client'),
    'assets': path.resolve(__dirname, 'client/assets'),
    'public': path.resolve(__dirname, 'client/public')
  },
  // css
  css: ['~/assets/scss/index.scss'],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode'
  ],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
  serverHandlers: [
    { route: '/api/**', handler: './server/serverhandler.ts' }
  ],  
})
