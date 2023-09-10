const env = process.env.NODE_ENV || 'development'
// const debug = require('debug')('auth:server:i18n:translate')
export default (locale, path) => {
  if (env == 'development') {
    // debug(locale, key)
    // if(process.client) {
    //   const ret = require('./translate-client').default;
    //   ret(locale, path)
    // }
    // // if(process.server) {
    //   const ret2 = require('./translate-server').default;
    //   ret2(locale, path)
    // }
  }
}
