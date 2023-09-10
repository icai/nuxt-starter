<template>
  <div class="app-layout-content">
    <div class="app-layout-content-grid app-layout-content-header"></div>
    <div class="app-layout-content-grid app-layout-content-body">
      <app-breadcrumb v-if="preference.useBreadcrumb" />
      <slot />
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '~/stores/main'
import AppBreadcrumb from './AppBreadcrumb'

export default {
  name: 'AppContent',

  components: {
    AppBreadcrumb
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(useStore, {
      preference(state) {
        return state.preference || {}
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.app-layout-content {
  .app-layout-content-grid {
    // overflow: hidden;
    // transition: 0.3s;
  }

  .app-layout-content-header {
    margin: 0;
    background-color: #fff;
    position: relative;
  }

  .app-layout-content-body {
    margin: 20px;
  }
}
</style>
