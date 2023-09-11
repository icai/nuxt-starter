<template>
  <el-sub-menu :data-level="level" :class="subMenuClasses" :index="block.menu_id" :popper-append-to-body="false">
    <template #title>
      <el-icon v-if="level === 1" >
        <component :is="block.menu_icon.replace('el-icon-', '') || 'el-icon-location-outline'" />
      </el-icon><span>{{ block.menu_name }}</span>
    </template>
    <template v-if="block.children && !block.children[0].children">
      <el-menu-item v-for="linkItem in block.children" :key="localePath(linkItem.menu_url)" :index="localePath(linkItem.menu_url)">
        <nuxt-link :to="localePath(linkItem.menu_url)" :target="linkItem.target">
          {{ linkItem.menu_name }}
        </nuxt-link>
      </el-menu-item>
    </template>
    <template v-if="block.children && block.children[0].children && level < maxLevel">
      <sub-menu v-for="next in block.children" :key="next.menu_id" :block="next" :level="level + 1" :max-level="maxLevel" />
    </template>
  </el-sub-menu>
</template>

<script>
export default {
  name: 'SubMenu',
  props: {
    block: {
      type: Object,
      default() {
        return {}
      }
    },

    level: {
      type: Number,
      default: 1
    },

    maxLevel: {
      type: Number,
      default: 2
    }
  },

  computed: {
    subMenuClasses() {
      if (this.level === 1) {
        return {
          'el-menu-main-module': true
        }
      }

      if (this.level === 2) {
        return {
          'el-menu-minor-module': true
        }
      }

      return {}
    }
  }
}
</script>

<style lang="scss" scoped>
.el-sub-menu :deep() {
  .el-sub-menu__title {
    height: 50px;
    line-height: 50px;
  }

  .el-menu--vertical,
  .el-menu {
    .el-menu-item {
      height: 50px;
      line-height: 50px;
      a {
        color: inherit;
        display: block;
      }
    }
  }

  .el-menu--vertical {
    .el-menu {
      padding: 0;
    }
  }
}
.el-sub-menu.el-menu-main-module :deep() {
  & > .el-sub-menu__title {
    transition: padding-left 0.3s, border-color 0.3s, background-color 0.3s, color 0.3s;
    padding-left: 10px !important;

    [class^='el-icon-'] {
      margin-right: 6px;
    }
  }
}
.el-sub-menu.el-menu-minor-module :deep() {
  & > .el-menu--vertical {
    top: -1px !important;
  }
}
</style>
