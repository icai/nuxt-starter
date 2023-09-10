export default {
  init: {
    // the id of your locize project
    projectId: 'b45150f1-1ae7-419a-8b9d-7fa65e3918e7',

    // add an api key if you want to send missing keys
    apiKey: '07322427-f477-42d6-88c0-0050655094b4',

    actionPath: 'https://api.locize.app/{{action}}/{{projectId}}/{{version}}/{{lng}}/{{ns}}',

    // the reference language of your project
    referenceLng: 'en',

    fallbackLng: 'zh',

    // version - defaults to latest
    version: 'latest',

    // debounce interval to send data in milliseconds
    debounceSubmit: 900
  },
  namespace: 'neon'
}
