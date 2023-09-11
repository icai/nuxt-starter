import ElementPlus, { ElLoading, ElMessageBox, ElNotification } from 'element-plus'
import { ID_INJECTION_KEY } from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { useStore } from '~/stores/main'

export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp: app } = nuxtApp
  // Use Element Plus
  app.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0,
  })

  app.use(ElementPlus, { size: 'default', zIndex: 1000 })

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }


  app.directive('click-outside', {
    mounted(el, binding) {
      const handleClickOutside = (event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };

      el._clickOutsideHandler = handleClickOutside;
      document.addEventListener('click', handleClickOutside);
    },
    unmounted(el) {
      document.removeEventListener('click', el._clickOutsideHandler);
    },
  });

  app.config.globalProperties.$loading = ElLoading.service
  app.config.globalProperties.$msgbox = ElMessageBox
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$prompt = ElMessageBox.prompt
  app.config.globalProperties.$notify = ElNotification

  app.config.errorHandler = (error, context) => {
    console.log('errorHandler', error, context)
    // ...
  }


  // nuxtApp.hook('app:mounted', () => {
  //   // console.log('app:mounted')
  // })
  // nuxtApp.hook('page:transition:start', () => {
  //   console.log('page:transition:start')
  // })
  // nuxtApp.hook('page:transition:finish', () => {
  //   console.log('page:transition:finish')
  // })
  // nuxtApp.hook('page:start', () => {
  //   console.log('page:start')
  // })
  nuxtApp.hook('page:finish', () => {
    // console.log('page:finish')
    const route = useRoute()
    if (/(\w*)?\/admin/.test(route.path)) {
      const store = useStore()
      store.getPermissions()
    }
  })
  nuxtApp.hook('vue:error', (err) => {
    console.log('vue:error', err)
  })









})
