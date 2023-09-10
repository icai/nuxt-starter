<template>
  <div :class="layoutClass" class="auth-layout">
    <Header :transparent="true" />
    <div class="main-content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/layouts/footer/Footer.vue'
import Header from '@/components/layouts/header/Header.vue'

export default {
  components: {
    Footer,
    Header
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      pageClass: 'login-page'
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'g-sidenav-show g-sidenav-pinned'
      }
    }
  },
  computed: {
    layoutClass() {
      const exceptions = ['index', 'home', 'article-home']
      const nativeName = this.$route.name?.split('___')
      if (nativeName && nativeName[0] && !exceptions.includes(nativeName[0])) {
        return 'bg-default'
      } else {
        return ''
      }
    }
  },
  watch: {
    '$route.path'() {
      if (this.showMenu) {
        this.closeMenu()
      }
    }
  },
  methods: {
    closeMenu() {
      document.body.classList.remove('nav-open')
      this.showMenu = false
    }
  }
}
</script>

<style lang="scss">
.auth-layout {
  min-height: 100vh;
}
</style>
