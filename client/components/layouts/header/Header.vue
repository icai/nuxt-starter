<template>
  <n-nav v-model="showMenu" type="light" :bg="bg" :transparent="transparent" menu-classes="justify-content-end" class="navbar-horizontal navbar-main" expand="lg">
    <template #brand>
      <div class="navbar-wrapper">
        <nuxt-link class="navbar-brand" :to="localePath('index')">
          <img :src="brandimg" alt="Logo green" />
        </nuxt-link>
      </div>
    </template>
    <!-- menu start -->
    <div class="navbar-collapse-header">
      <div class="row">
        <div class="col-6 collapse-brand">
          <nuxt-link to="/">
            <img src="~/assets/images/img/brand/green1.png" alt="Logo green" />
          </nuxt-link>
        </div>
        <div class="col-6 collapse-close">
          <button type="button" class="navbar-toggler" @click="closeMenu">
            <span />
            <span />
          </button>
        </div>
      </div>
    </div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <nuxt-link :to="localePath('/')" class="nav-link">
          <span class="nav-link-inner--text">{{ $t('Home') }}</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('/admin/dashboard')" class="nav-link">
          <span class="nav-link-inner--text">{{ $t('Dashboard') }}</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('/store')" class="nav-link">
          <span class="nav-link-inner--text">{{ $t('Store') }}</span>
        </nuxt-link>
      </li>

      <li class="nav-item">
        <nuxt-link :to="localePath('/pricing')" class="nav-link">
          <span class="nav-link-inner--text">{{ $t('Pricing') }}</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('/license')" class="nav-link">
          <span class="nav-link-inner--text">{{ $t('License') }}</span>
        </nuxt-link>
      </li>
      <a-dropdown class="">
        <template #toggle="scope">
          <a :class="'nav-link dropdown-toggle ' + (scope.isOpen ? 'show' : '')" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
        </template>
        <template #menu="scope">
          <div :class="'dropdown-menu dropdown-menu-xl dropdown-menu-arrow p-0 ' + (scope.isOpen ? 'show' : '')">
            <div class="dropdown-menu-links rounded-bottom delimiter-top p-4">
              <div class="row">
                <div class="col-sm-4">
                  <nuxt-link :to="localePath('/pages/downfile')" class="dropdown-item">
                    {{ $t('Download files') }}
                  </nuxt-link>
                  <nuxt-link :to="localePath('/pages/urlshortener')" class="dropdown-item">
                    {{ $t('URL Shortener') }}
                  </nuxt-link>
                  <nuxt-link :to="localePath('/pages/news/')" class="dropdown-item">
                    <span>{{ $t('News') }}</span>
                  </nuxt-link>
                  <nuxt-link :to="localePath('/modules')" class="dropdown-item">
                    <span>{{ $t('Modules') }}</span>
                  </nuxt-link>
                  <nuxt-link :to="localePath('/plugins')" class="dropdown-item">
                    <span>{{ $t('Plugins') }}</span>
                  </nuxt-link>
                </div>
                <div class="col-sm-4">
                  <a href="/auth/login" class="dropdown-item">Login</a>
                  <a href="/auth/register" class="dropdown-item">Register</a>
                  <a href="/auth/staff" class="dropdown-item">Staff</a>
                  <a href="/auth/recover" class="dropdown-item">Recover</a>
                </div>
                <div class="col-sm-4">
                  <a href="sections.html#swiper" class="dropdown-item">Swiper</a>
                  <a href="sections.html#tables" class="dropdown-item">Tables</a>
                  <a href="sections.html#team" class="dropdown-item">Team</a>
                  <a href="sections.html#testimonials" class="dropdown-item">Testimonials</a>
                  <a href="sections.html#video" class="dropdown-item">Video</a>
                </div>
              </div>
            </div>
          </div>
        </template>
      </a-dropdown>
      <lang-dropdown class="nav-item ml-lg-2" title-classes="nav-link px-0" title-tag="a" tag="li" menu-classes="dropdown-menu-sm" />
    </ul>
    <hr class="d-lg-none" />
    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
      <li class="nav-item d-none d-lg-block ml-lg-4">
        <nuxt-link :to="loginUrl" class="btn btn-neutral rounded-pill btn-icon" rel="noopener" aria-label="Login">
          <span class="btn-inner--icon">
            <n-icon icon="user" class="mr-2" />
          </span>
          <span class="nav-link-inner--text"> Login</span>
        </nuxt-link>
      </li>
    </ul>
    <!-- menu end -->
  </n-nav>
</template>
<script>
import { ref, computed } from 'vue'
import brandimgGreen from '@/assets/images/img/brand/green1.png'
import brandimgwhite from '@/assets/images/img/brand/white1.png'

export default {
  name: 'Header',
  props: {
    bg: {
      default: '',
      type: String
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const showMenu = ref(false)
    const route = useRoute()

    const transparent = ref(props.transparent)

    const closeMenu = () => {
      console.log('closeMenu', showMenu.value)
      showMenu.value = false
    }

    // Add your computed properties and methods here
    const menuType = computed(() => {
      // Define your logic for menu type here based on route or other criteria
      return 'light' // Replace with your logic
    })

    const brandimg = computed(() => {
      return transparent.value ? brandimgwhite : brandimgGreen
    })

    const localePath = useLocalePath()

    const logout = async () => {
      // Implement your logout logic
    }

    const user = ref(null) // Set the user data as needed

    const loginUrl = computed(() => {
      const current = route.fullPath
      return `/auth/staff?redirect=${encodeURIComponent(current)}`
    })

    // Replace with your computed properties and methods

    return {
      transparent,
      showMenu,
      closeMenu,
      menuType,
      brandimg,
      localePath,
      logout,
      user,
      loginUrl,
    }
  }
}
</script>
<style>
.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.user-login .user-pic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  background: #fff;
}

.user-login li a {
  font-weight: 400;
  color: #444;
  padding: 5px 15px;
  padding-bottom: 10px;
}

.neo-site-header-cart-li a {
  color: #cecece !important;
}

.neo-site-header-cart .neo-addon-cart-wrap {
  padding: 0 0.6em;
  transition: all 0s linear;
}

.neo-site-header-cart i.fa-icon {
  /* font-size: 20px; */
  font-size: 1.5rem;
  font-style: normal;
  position: relative;
  padding: 0 2px;
}

.neo-site-header-cart i.fa-icon:after {
  font-family: 'Lato', sans-serif;
  content: attr(data-cart-total);
  position: absolute;
  font-style: normal;
  top: -10px;
  right: -12px;
  font-weight: 700;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
  font-size: 11px;
  padding-left: 0;
  padding-right: 2px;
  line-height: 17px;
  letter-spacing: -0.5px;
  height: 18px;
  min-width: 18px;
  border-radius: 99px;
  text-align: center;
  z-index: 1;
  background: #ffffff;
  color: #54595f;
}
</style>
