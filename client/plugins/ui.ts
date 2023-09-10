import ElementPlus from 'element-plus'
import { ID_INJECTION_KEY } from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineNuxtPlugin(({ vueApp: app }) => {
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
        console.log('click-outside', event, el, event.target, el.contains(event.target))
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

})
