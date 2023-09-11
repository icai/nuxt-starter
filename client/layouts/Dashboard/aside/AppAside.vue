<template>
  <div class="app-layout-aside">
    <div class="app-layout-aside-logo">
      <nuxt-link :to="localePath('/')">
        <img :src="logoImg" />
        <h1>{{ ui.appName }}</h1>
      </nuxt-link>
    </div>
    <client-only>
      <el-menu :default-active="currentNav" :unique-opened="true" :collapse-transition="false" :collapse="ui.isAsideCollapsed">
        <sub-menu v-for="block in authorizedNav" :key="block.menu_id" :block="block" :max-level="ui.submenuMaxLevel" />
      </el-menu>
    </client-only>

  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '~/stores/main'
import logoImg from '@/assets/images/img/logo.png'
import SubMenu from './menu/SubMenu'

export default {
  name: 'AppAside',
  components: {
    SubMenu
  },
  data() {
    return {
      logoImg
    }
  },
  computed: {
    ...mapState(useStore, {
      menus: (state) => state.menus,
      ui(state) {
        return state.ui || {}
      },
      preference(state) {
        return state.preference || {}
      }
    }),

    currentNav() {
      return this.$route.path
    },

    authorizedNav() {
      return this.menus
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables/index.scss';

.app-layout-aside {
  min-height: 100%;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  .app-layout-aside-logo {
    z-index: 60;
    position: relative;
    overflow: hidden;
    height: 60px;
    line-height: 60px;
    padding-left: 12px;
    box-shadow: 1px 1px 0 0 #e8e8e8;
    transition: box-shadow 0.3s;

    img {
      display: inline-block;
      vertical-align: middle;
      height: 40px;
      border-radius: 4px;
    }

    a {
      color: $--color-primary;
      transition: color 0.5s;
      // @todo
      // opacity: 0;

      h1 {
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 12px;
        font-size: 20px;
        font-weight: 400;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      }
    }
  }

  .el-menu {
    padding-top: 10px;
    border-right: 0;

    &.el-menu--collapse :deep() {
      width: 64px;

      .el-sub-menu.el-menu-main-module {
        & > .el-sub-menu__title {
          padding-left: 20px !important;
        }
      }
    }

    &.v-leave-to :deep() {
      .el-sub-menu {
        .el-menu {
          opacity: 0;
        }
      }
    }

    &.v-leave-active :deep() {
      .el-sub-menu {
        .el-menu {
          transition: opacity 0.3s;
        }
      }
    }
  }

  :deep() .el-menu {
    background-color: transparent;
  }

  :deep() .el-menu--vertical .el-menu {
    background-color: #fff;
  }
}
.app-layout-default-theme-dark {
  .app-layout-aside {
    background-color: $--app-dark-theme-bg-color;

    .app-layout-aside-logo {
      box-shadow: none;

      a {
        color: #fff;
        h1 {
          color: #fff;
        }
      }
    }

    :deep() .el-menu {
      .el-sub-menu__title {
        color: $--app-dark-theme-text-color;

        &:hover,
        &:focus {
          background-color: $--app-dark-theme-menu-hover-color;
        }
      }

      .el-menu-item {
        color: $--app-dark-theme-text-color;

        &.is-active {
          color: $--color-primary;
        }

        &:hover,
        &:focus {
          background-color: $--app-dark-theme-menu-hover-color;
        }
      }
    }

    :deep() .el-menu--vertical .el-menu {
      background-color: $--app-dark-theme-bg-color;
    }
  }
}
</style>
