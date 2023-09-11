const useFeedback = [ 'loading', 'msgbox', 'alert', 'confirm', 'prompt', 'notify'].map((item) => {
  return {
    ['$' + item]: function() {
      const nuxtApp = useNuxtApp()
      return nuxtApp.vueApp.config.globalProperties['$' + item].apply(null, arguments)
    }
  }
}).reduce((acc, cur) => {
  return {
    ...acc,
    ...cur
  }
}, {})

export const $alert = useFeedback.$alert
export const $confirm = useFeedback.$confirm
export const $loading = useFeedback.$loading
export const $msgbox = useFeedback.$msgbox
export const $notify = useFeedback.$notify
export const $prompt = useFeedback.$prompt

