import locizeActions from '@w3cub/locize-node-actions'
import options from './config'
locizeActions.init(options.init)

export default (locale, path) => {
  return locizeActions.actions('missing', options.namespace, path, path)
}
