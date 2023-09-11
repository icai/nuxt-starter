<template>
  <NuxtLayout name="auth-layout">
    <div class="bg-default">
      <!-- Header -->
      <div class="header bg-primary py-7 py-lg-8 pt-lg-9">
        <div class="container">
          <div class="header-body text-center mt-7 mb-7">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 class="text-white">Ooops!</h1>
                <p class="text-lead text-white">Page not found. Don't worry though, we have plenty of other pages to explore</p>
                <nuxt-link to="/" class="font-weight-bold text-white mt-5"> Back to Home </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="separator separator-bottom separator-skew">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40" class="width-full z-1">
            <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" class="fill-default" />
          </svg>
        </div>
      </div>
      <!-- Page content -->
      <section class="py-6">
        <div class="container">
          <div class="row row-grid align-items-center">
            <div class="col-md-6">
              <img src="~/assets/images/img/theme/landing-2.png" class="img-fluid" />
            </div>
            <div class="col-md-6">
              <div class="pr-md-5">
                <h1 class="text-light">Explore pages</h1>
                <p class="text-light">
                  If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages.
                </p>
                <nuxt-link to="/pages/user" class="font-weight-bold text-warning mt-5"> Explore pages </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Error 404',
  meta: [
    {
      name: 'description',
      content: 'Error 404'
    }
  ]
})
</script>
