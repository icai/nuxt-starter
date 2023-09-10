<template>
<client-only>
  <el-drawer class="app-layout-drawer" title="应用设置" append-to-body v-model="visible" :direction="direction">
    <div class="app-layout-drawer-body">
      <div class="app-layout-theme">
        <h4>主题设置</h4>
        <div class="switcher-list">
          <div class="switcher-item">
            <span>亮色模式</span>
            <el-switch v-model="themeLightMode" class="switcher-item-input" />
          </div>
        </div>
      </div>
    </div>
  </el-drawer>
</client-only>
</template>

<script>
import { useStore } from '~/stores/main'
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'AppDrawer',
  props: {
    direction: {
      type: String,
      default: 'rtl'
    }
  },
  setup() {
    const store = useStore()
    const visible = computed({
      get: () => store.ui.isDrawerVisible,
      set: (val) => store.updateUIStatus({ isDrawerVisible: val })
    })
    const themeLightMode = computed({
      get: () => store.preference.themeLightMode,
      set: (val) => store.updateUserPreference({ themeLightMode: val })
    })
    return {
      visible,
      themeLightMode
    }
  }
})
</script>

<style lang="scss" scoped>
.app-layout-drawer {
  line-height: 1.5;
  :deep() [tabindex]:focus {
    outline: none;
  }

  .app-layout-drawer-body {
    padding: 0 20px 20px 20px;

    .switcher-list {
      line-height: 24px;

      .switcher-item {
        .switcher-item-input {
          float: right;
        }
      }
    }
  }
}
</style>
