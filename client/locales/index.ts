
import en from './lang/en.js'
import zh from './lang/zh.js'

export default defineI18nConfig(() => {
  return {
    locale: 'zh',
    fallbackLocale: 'en',
    messages: {
      en: { ...en, },
      zh: { ...zh, },
      ru: { ...en, },
      de: { ...en, },
      es: { ...en, },
      jp: { ...en, }
    }
  }
})
