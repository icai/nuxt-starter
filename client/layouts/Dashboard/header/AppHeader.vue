<template>
  <div class="app-layout-header">
    <span class="app-layout-header-switcher" @click="switchAside">
      <el-icon v-if="ui.isAsideCollapsed" class="el-icon-s-unfold">
        <expand></expand>
      </el-icon>
      <el-icon v-else class="el-icon-s-fold">
        <fold></fold>
      </el-icon>

    </span>

    <div class="app-layout-header-menu">
      <lang-dropdown class="app-layout-header-menu-item" :menuOnRight="true" title-classes="nav-link px-0" title-tag="a" tag="div" menu-classes="dropdown-menu-sm" />

      <client-only>
        <el-dropdown class="app-layout-header-menu-item app-layout-header-menu-item-avatar" @command="handleUserCommand">
          <span class="el-dropdown-link">
            <el-avatar :src="avatar" />
            <span class="user-name">{{ user?.name }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item disabled icon="el-icon-user"> 个人中心 </el-dropdown-item>
              <el-dropdown-item divided command="logout" icon="el-icon-switch-button"> 退出登录 </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </client-only>
      <span class="app-layout-header-menu-item" @click="openDrawer">
        <el-icon>
          <Setting />
        </el-icon>
      </span>
    </div>

    <app-drawer />
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useStore } from '~/stores/main'
import defaultAvatarImg from '@/assets/images/img/avatar.png'
import AppDrawer from './AppDrawer'
import LangDropdown from '~/components/global/LangDropdown.vue'
import { Setting } from '@element-plus/icons-vue'

export default {
  name: 'AppHeader',
  components: {
    AppDrawer,
    LangDropdown,
    Setting
  },
  data() {
    return {
      defaultAvatarImg
    }
  },
  computed: {
    ...mapState(useStore, {
      ui: (store) => store.ui,
      user: (store) => store.user
    }),
    avatar() {
      return this.user.avatar || this.defaultAvatarImg
    }
  },

  methods: {
    ...mapActions(useStore, ['updateUIStatus']),
    switchAside() {
      this.updateUIStatus({
        isAsideCollapsed: !this.ui.isAsideCollapsed
      })
    },

    openDrawer() {
      this.updateUIStatus({
        isDrawerVisible: true
      })
    },

    handleUserCommand(command) {
      switch (command) {
        case 'logout':
          this.logout()
          break
        default:
          break
      }
    },
    async logout() {
      // await this.$store.logout()
    }
  }
}
</script>

<style lang="scss" scoped>
.app-layout-header {
  position: relative;
  height: 100%;
  line-height: 60px;
  background: #fff;
  .app-layout-header-switcher {
    cursor: pointer;
    height: 60px;
    padding: 20px;
    font-size: 20px;
  }

  .app-layout-header-menu {
    float: right;
    height: 100%;
    a {
      color: inherit;
    }

    .app-layout-header-menu-item {
      display: inline-block;
      padding: 0 12px;
      height: 100%;
      vertical-align: top;
      transition: all 0.3s;
      outline: none;

      &:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.05);
      }

      [class^='el-icon-'] {
        padding: 20px 0;
        font-size: 20px;
      }

      &.el-dropdown {
        padding: 0;

        .el-dropdown-link {
          height: 100%;
          padding: 0 12px;
          display: inline-block;
        }
      }
    }

    .app-layout-header-menu-item-avatar {
      .el-avatar {
        vertical-align: top;
        margin: 12px 8px 12px 0;
      }
      .user-name {
        display: inline-block;
        vertical-align: top;
        line-height: 60px;
      }
    }
  }
}
</style>
