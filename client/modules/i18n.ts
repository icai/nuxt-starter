
import {
  defineNuxtModule,
  isNuxt2,
  isNuxt3,
  getNuxtVersion,
  addComponent,
  addPlugin,
  addTemplate,
  addImports,
  useLogger
} from '@nuxt/kit'


export default defineNuxtModule({
  meta: {
    name: 'i18n',
    configKey: 'i18n',
    compatibility: {
      nuxt: '^3.0.0-rc.11',
      bridge: false
    }
  },
  async setup(options, nuxt) {
    // await addImports([
    //   {
    //     name: 'useI18n', from: '~/composables/i18n.ts'
    //   }
    // ])
  }
})