// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import path from 'path'
import locales from './client/locales/locales'
export default defineNuxtConfig({
  rootDir: __dirname,
  srcDir: "client",
  serverDir: "server",
  components: {
    dirs: [
      '~/components/global'
    ]
  },
  app: {
    head: {
      titleTemplate: '%s - NeonCMS',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'NeonCMS' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { rel: 'icon', type: 'image/png', href: 'favicon.png' },
        // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
        // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' },
      ]
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
  css: ['~/assets/scss/framework.scss'],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    // '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    // i18n
    '@nuxtjs/i18n',
  ],
  plugins: [
    '~/plugins/ui.ts',
  ],
  i18n: {
    locales:  locales,
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true
    },
    vueI18n: './client/locales/index.ts',
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/variable.scss";`
        },
      },
    },
  },
  // elementPlus: {
  //   icon: 'ElIcon',
  //   importStyle: 'scss',
  //   themes: ['dark'],
  // },
  serverHandlers: [
    { route: '/api/**', handler: './server/serverhandler.ts' }
  ],
})
