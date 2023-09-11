export default defineNuxtRouteMiddleware((to, from) => {
  // if path startwtih /admin and route not found
  // redirect to /admin/404
  if (to.matched.length === 0) {
    if (to.path.startsWith('/admin')) {
      return navigateTo({
        path: '/admin/404',
        query: {
          from: to.path
        }
      }, { redirectCode: 404 })
    }
    if (to.path.startsWith('/')) {
      return navigateTo({
        path: '/404',
        query: {
          from: to.path
        }
      }, { redirectCode: 404 })
    }
  }
})
