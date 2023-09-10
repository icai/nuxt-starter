<template>
  <footer class="web-footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <img src="~/assets/images/img/brand/logo-dark.png" alt="" class="logo-dark" height="18" />
          <p class="mt-4">
            NeonCMS makes it easier to build better websites
            <br />with nuxtjs.
          </p>

          <ul class="social-list list-inline mt-3">
            <li class="list-inline-item text-center">
              <a class="social-list-item" href="https://www.facebook.com/terry.cai.7921" target="_blank" rel="noopener" aria-label="Facebook">
                <i class="fab fa-facebook-square" />
              </a>
            </li>
            <li class="list-inline-item text-center">
              <a class="social-list-item" href="https://www.instagram.com/gidcai" target="_blank" rel="noopener" aria-label="Instagram">
                <i class="fab fa-instagram-square" />
              </a>
            </li>
            <li class="list-inline-item text-center">
              <a class="social-list-item" href="https://twitter.com/RainAchi" target="_blank" rel="noopener" aria-label="Twitter">
                <i class="fab fa-twitter-square" />
              </a>
            </li>
            <li class="list-inline-item text-center">
              <a class="social-list-item" href="https://github.com/neoncms" target="_blank" rel="noopener" aria-label="Github">
                <i class="fab fa-github-square" />
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 mt-3 mt-lg-0">
          <h5 class="">Company</h5>
          <ul class="list-unstyled pl-0 mb-0 mt-3">
            <li class="mt-2">
              <a href="javascript: void(0);" class="">About Us</a>
            </li>
            <li class="mt-2">
              <a href="javascript: void(0);" class="">Documentation</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 mt-3 mt-lg-0">
          <h5 class="">Open Source</h5>
          <ul class="list-unstyled pl-0 mb-0 mt-3">
            <li class="mt-2">
              <a href="https://github.com/icai/vue-ast-i18n" class="">Vue Ast I18n</a>
            </li>
            <li class="mt-2">
              <a href="https://docs.w3cub.com/" class="">W3cubDocs</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 mt-3 mt-lg-0">
          <h5 class="">Discover</h5>

          <ul class="list-unstyled pl-0 mb-0 mt-3">
            <li class="mt-2">
              <a href="/helpcenter" class="">Help Center</a>
            </li>
            <li class="mt-2">
              <a href="/posts" class="">Blog</a>
            </li>
            <li class="mt-2">
              <a href="/plugins" class="">Plugins</a>
            </li>
            <li class="mt-2">
              <a href="javascript: void(0);" class="">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-4" />
      <div class="row">
        <div class="col-lg-12">
          <div class="">
            <p class="text-left mb-0">Copyright &copy; 2019 - {{ year }} NeonCMS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.web-footer {
  background-color: #f4f5f7;
  a {
    color: #42526e;
    font-size: 0.875rem;
    line-height: 1.125;
  }
  .social-list-item {
    i {
      font-size: 2rem;
    }
  }
  &.dark {
    background-color: #172b4d;

    p,
    h5 {
      color: #fff;
    }
    a {
      color: #ffffff80;
    }
  }
}
</style>
