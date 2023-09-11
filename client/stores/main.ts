import locales from '@/locales/locales'
import { acceptHMRUpdate, defineStore } from "pinia";

import avatarimg from '@/assets/images/img/avatar.png'

export const useStore = defineStore('main', {
  state: () => ({
    menus: null,
    perms: null,
    meta: [],
    locales,
    locale: 'en',
    user: {
      avatar: avatarimg,
      email: 'gidcai@gmail.com',
      name: 'NeonCMS',
      state: 'online'
    },
    auth: {
      user: null,
      token: null
    },
    ui: {
      appName: 'NeonCMS',
      submenuMaxLevel: 3,
      isAsideCollapsed: false,
      isDrawerVisible: false
    },

    // user preference
    preference: {
      useBreadcrumb: true,
      useTabView: false,
      themeLightMode: false
    },
    cachedSessions: []
  }),
  getters:{
    localeCodes: (state) => {
      return state.locales.map((item) => item.code)
    },
    isLogin: (state) => {
      return !!state.auth.user
    }
  },
  actions: {
    async nuxtServerInit(req: any) {
      if (/(\w*)?\/admin/.test(req.path)) {
        await this.getPermissions()
      }
    },
    SET_LANG(locale: string) {
      this.locale = locale
    },
    SET_MENU(menus: null) {
      this.menus = menus
    },
    SET_PERM( perms: null) {
      this.perms = perms
    },
    SET_META(meta: never[]) {
      this.meta = meta
    },
    updateUIStatus(ui: any) {
      const nextUI = {
        ...this.ui,
        ...ui
      }
      this.ui = nextUI
    },

    updateUserPreference(preference: any) {
      const nextPreference = {
        ...this.preference,
        ...preference
      }
      this.preference = nextPreference
    },
    async getPermissions() {
      try {
        const data = await getPermissions()
        if (data) {
          this.SET_MENU(data.menus)
          this.SET_PERM(data.perms)
        }
      } catch (error) { console.log('getPermissions', error)}
    },
    async login({ email, username, password, isRemember, verify }) {
      try {
        await useLogin({
          data: {
            email,
            username,
            password,
            isRemember,
            verify
          }
        })
      } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new Error(error.response.data.msg || 'Bad credentials')
        }
        throw error
      }
    },
    redirect(name: string, noRouter = false) {
      const $router = useRouter()
      if (name === 'admin') {
        return $router.push('/admin/dashboard')
      }
      if (noRouter) return $router.push(name)

      return $router.push({
        name
      })
    },
    async logout() {
      this.getPermissions()
      // await useLogout()
      // this.menus = []
      // this.perms = []
    }
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
