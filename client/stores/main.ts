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
      // @todo maycase bug
      // if (/(\w*)?\/admin/.test(req.path)) {
      //   await this.getPermissions()
      // }
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
        const { menus, perms } = await (new Promise((resolve)=> {
          resolve({
            menus: [
              {
                id: 1,
                name: 'Dashboard',
                icon: 'mdi-view-dashboard',
                path: '/admin/dashboard',
                children: []
              },
            ],
            perms: [
              {
                id: 1,
                name: 'Dashboard',
                slug: 'dashboard',
                http_method: 'GET',
                http_path: '/admin/dashboard',
                created_at: '2021-03-01T09:00:00+08:00',
                updated_at: '2021-03-01T09:00:00+08:00'
              }
            ]
        })}))
        this.SET_MENU(menus)
        this.SET_PERM(perms)
      } catch (error) {}
    },
    async login({ email, username, password, isRemember, verify }) {
      try {
        await this.$auth.loginWith('local', {
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
    async logout({ commit }) {
      await this.$auth.reset()
      await this.$auth.logout()
      this.menus = []
      this.perms = []
    }
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
