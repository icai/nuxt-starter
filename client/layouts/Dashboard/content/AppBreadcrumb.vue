<template>
  <transition name="fade">
    <section v-if="!!breadcrumbs.length" class="app-layout-content-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <transition-group tag="span" name="breadcrumb-item">
          <el-breadcrumb-item
            v-for="(item, key) in breadcrumbs"
            :key="item.text"
            :class="{ active: key + 1 === breadcrumbs.length }"
          >
            <nuxt-link v-if="item.link" :to="localePath(item.link)">
              {{ item.text }}
            </nuxt-link>
            <span v-else>{{ item.text }}</span>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'AppBreadcrumb',

  computed: {
    breadcrumbs() {
      // let breadcrumbs = this.$store.state.meta
      let breadcrumbs = ['Dashboard', 'Home']
      if (breadcrumbs) {
        breadcrumbs = breadcrumbs.map((breadcrumb) => {
          if (typeof breadcrumb === 'string') {
            return {
              text: breadcrumb,
            }
          }
          return breadcrumb
        })
      }

      return breadcrumbs || this.getInitialBreadcrumbs()
    },

    dev() {
      const global = this.$store?.state?.global || {}
      return global.env !== 'production'
    },

    serverIP() {
      const global = this.$store?.state?.global || {}
      return global.serverIP || 'LOCAL'
    },
  },

  methods: {
    getInitialBreadcrumbs() {
      return []
    },
  },
}
</script>

<style lang="scss" scoped>
.app-layout-content-breadcrumb {
  height: 100%;
  padding: 0 0 20px 0;
  .breadcrumb-item-move,
  .breadcrumb-item-enter-active,
  .breadcrumb-item-leave-active {
    transition: all 0.5s;
  }

  .breadcrumb-item-enter,
  .breadcrumb-item-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-item-leave-active {
    position: absolute;
  }
}
</style>
