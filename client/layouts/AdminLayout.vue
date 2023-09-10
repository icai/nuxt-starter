<template>
  <div class="wrapper">
    <div class="app-layout app-layout-default-theme" :class="layoutClasses">
      <el-container>
        <el-aside :width="ui.isAsideCollapsed ? '64px' : '208px'" :class="{ 'el-aside-collapsed': ui.isAsideCollapsed }">
          <app-aside />
        </el-aside>
        <el-container class="main-box" :class="{ collapsed: ui.isAsideCollapsed }">
          <el-header>
            <app-header />
          </el-header>
          <el-main>
            <app-content>
              <keep-alive :include="cachedSessions" :max="20">
                <slot />
              </keep-alive>
            </app-content>
          </el-main>
          <el-footer>
            <app-footer />
          </el-footer>
        </el-container>
      </el-container>
      <el-backtop :bottom="50" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '~/stores/main'
import AppAside from './Dashboard/aside/AppAside.vue'
import AppHeader from './Dashboard/header/AppHeader.vue'
import AppContent from './Dashboard/content/AppContent.vue'
import AppFooter from './Dashboard/footer/AppFooter.vue'


export default {
  name: 'AppLayout',
  components: {
    AppAside,
    AppHeader,
    AppContent,
    AppFooter
  },
  head() {
    return {
      bodyAttrs: {
        class: 'g-sidenav-show g-sidenav-pinned'
      }
    }
  },
  computed: {
    ...mapState(useStore, {
      ui(state) {
        return state.ui || {}
      },

      preference(state) {
        return state.preference || {}
      },

      cachedSessions(state) {
        return state.cachedSessions || []
      }
    }),

    layoutClasses() {
      return this.preference.themeLightMode
        ? {
            'app-layout-default-theme-light': true
          }
        : {
            'app-layout-default-theme-dark': true
          }
    }
  }
}
</script>
<style lang="scss" scoped>
.app-layout {
  box-sizing: border-box;
  min-height: 100vh;

  :deep() * {
    box-sizing: border-box;
  }

  .el-container {
    min-height: 100vh;

    .el-aside {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      overflow: visible;
      z-index: 50;
      width: 208px;
      transition: 0.3s width ease-in-out;
      box-shadow: 2px 0 8px 0 rgba(0, 0, 0, 0.05);

      & .el-aside-collapsed {
        width: 64px;
      }
    }
    .main-box {
      transition: 0.3s margin-left ease-in-out;
      margin-left: 208px;
      &.collapsed {
        margin-left: 64px;
      }
    }

    .el-header {
      position: sticky;
      z-index: 10;
      padding: 0;
      top: 0;
      left: 0;
      right: 0;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }

    .el-main {
      padding: 0;
    }

    .el-footer {
      padding: 0;
    }
  }

  .page-switch-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .page-switch-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .page-switch-leave-active,
  .page-switch-enter-active {
    transition: all 0.5s;
  }
}
</style>
