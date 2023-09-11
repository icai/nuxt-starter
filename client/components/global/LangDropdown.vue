<template>
  <n-dropdown class="lang-dropdown" :title-classes="titleClasses" :menuOnRight="menuOnRight" :title-tag="titleTag" :tag="tag" :menu-classes="menuClasses" :has-toggle="hasToggle">
    <template #title>
      <img alt="img" height="14" width="18" style="margin-right: 0.5rem" :src="getFlagUrl(currentLocale.flag)" />
      <span class="d-none d-lg-inline-block">{{ currentLocale.name }}</span>
      <span class="d-lg-none">{{ currentLocale.code }}</span>
    </template>
    <a v-for="locale in showLocales" :key="locale.code" href="javascript:;" class="dropdown-item" @click="handleChangeLang(locale.code)">
      <span><img alt="img" height="14" width="18" style="margin-right: 0.5rem" :src="getFlagUrl(locale.flag)" />{{ locale.name }}</span>
    </a>
  </n-dropdown>
</template>

<script>
import { useStore } from '~/stores/main'
import { defineComponent, computed } from 'vue'
import flagcn from '~/assets/images/img/icons/flags/cn.svg'
import flagen from '~/assets/images/img/icons/flags/us.svg'
import flages from '~/assets/images/img/icons/flags/es.svg'
import flagjp from '~/assets/images/img/icons/flags/jp.svg'
import flagru from '~/assets/images/img/icons/flags/ru.svg'
import flagus from '~/assets/images/img/icons/flags/us.svg'
import flagde from '~/assets/images/img/icons/flags/de.svg'

export default defineComponent({
  name: 'LangDropdown',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    titleTag: {
      type: String,
      default: 'button'
    },
    titleClasses: {
      type: [String, Object, Array]
    },
    menuClasses: {
      type: [String, Object]
    },
    hasToggle: {
      type: Boolean,
      default: false
    },
    menuOnRight: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const { locale, locales, setLocale } = useI18n()
    const store = useStore()
    const currentLocale = computed(() => {
      return locales.value.find((l) => l.code === locale.value)
    })
    const showLocales = computed(() => {
      return locales.value.filter((l) => l.code !== locale.value)
    })

    const handleChangeLang = (code) => {
      store.SET_LANG(code)
      setLocale(code)
    }
    const getFlagUrl = (flag) => {
      switch (flag) {
        case 'cn':
          return flagcn
        case 'en':
          return flagen
        case 'es':
          return flages
        case 'jp':
          return flagjp
        case 'ru':
          return flagru
        case 'us':
          return flagus
        case 'de':
          return flagde
        default:
          return flagen
      }
    }
    return {
      locale,
      locales,
      handleChangeLang,
      showLocales,
      getFlagUrl,
      currentLocale
    }
  }
})
</script>
<style lang="scss">
.lang-dropdown {
  .nav-link i,
  .nav-link svg,
  .nav-link img {
    margin-right: 0.5rem;
  }
  .nav-link img {
    width: auto;
    height: 14px;
    margin-right: 0.5rem;
    position: relative;
    top: -1px;
  }
  .dropdown-menu:before {
    display: none !important;
  }

  .dropdown-menu {
    font-size: 0.875rem;
    border-radius: 0.25rem;
  }
  .dropdown-menu .dropdown-item > i,
  .dropdown-menu .dropdown-item > svg {
    margin-right: 1rem;
    font-size: 1rem;
    vertical-align: -17%;
  }
  .dropdown-menu .dropdown-item img,
  .dropdown-menu .dropdown-item svg {
    width: auto;
    height: 14px;
    margin-right: 0.5rem;
    position: relative;
    top: -1px;
  }
  .dropdown-menu-sm {
    min-width: 10rem !important;
    border: 0.2rem;
  }
  .dropdown-item {
    padding: 0.25rem 1rem;
    line-height: 21px;
  }
}
</style>
