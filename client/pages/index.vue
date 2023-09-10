<template>
  <div>
    <NuxtLayout name='auth-layout'>
    <!--Header-->
    <div class="header section-shaped bg-primary pt-5 pb-7">
      <div class="shape shape-style-1 shape-primary">
        <span class="span-150" />
        <span class="span-50" />
        <span class="span-50" />
        <span class="span-75" />
        <span class="span-100" />
        <span class="span-75" />
        <span class="span-50" />
        <span class="span-100" />
        <span class="span-50" />
        <span class="span-100" />
      </div>
      <div class="container">
        <div class="header-body">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="pr-5">
                <h1 class="display-2 text-white font-weight-bold mb-0">NeonCMS Kit</h1>
                <h2 class="display-4 text-white font-weight-light">
                  {{ $t('A premium rbac Content Management System(CMS) build with Nuxt.') }}
                </h2>
                <p class="text-white mt-4">
                  {{ $t('Neon perfectly combines reusable HTML and modular CSS with a modern styling and beautiful markup throughout each HTML template in the pack.') }}
                </p>
                <div class="mt-5">
                  <nuxt-link to="/admin/dashboard" class="btn btn-neutral rounded-pill my-2"> Explore Dashboard </nuxt-link>
                  <a href="/pricing?ref=landing" class="btn btn-default rounded-pill my-2">Purchase now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row pt-5">
                <div class="col-md-6">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                        <n-icon icon="smile"></n-icon>
                      </div>
                      <h5 class="h3">
                        {{ $t('Components') }}
                      </h5>
                      <p>{{ $t('Neon comes with over 70 handcrafted components.') }}</p>
                    </div>
                  </div>
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                        <n-icon icon="smile"></n-icon>
                      </div>
                      <h5 class="h3">
                        {{ $t('Plugins') }}
                      </h5>
                      <p>{{ $t('Fully integrated and extendable third-party plugins that you will love.') }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pt-lg-5 pt-4">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow mb-4">
                        <n-icon icon="smile"></n-icon>
                      </div>
                      <h5 class="h3">
                        {{ $t('Pages') }}
                      </h5>
                      <p>{{ $t('From simple to complex, you get a beautiful set of 15+ page examples.') }}</p>
                    </div>
                  </div>
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                        <n-icon icon="smile"></n-icon>
                      </div>
                      <h5 class="h3">
                        {{ $t('Documentation') }}
                      </h5>
                      <p>{{ $t('You will love how easy is to to work with Neon.') }}</p>
                    </div>
                  </div>
                </div>
              </div>
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
    <section class="py-6 pb-9 overflow-hidden bg-default">
      <div class="row justify-content-center text-center">
        <div class="col-md-6">
          <h2 class="display-3 text-white">A complete RBAC solution</h2>
          <p class="lead text-white">
            Neon is a completly new product built on our newest re-built from scratch framework structure that is meant to make our products more intuitive, more adaptive and,
            needless to say, so much easier to customize. Let Neon amaze you with its cool features and build tools and get your project to a whole new level.
          </p>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 mt--7">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-4">
                <div class="card mb-4 card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-primary text-white rounded-circle mb-4">
                      <n-icon icon="check"></n-icon>
                    </div>
                    <h4 class="h3 text-primary text-uppercase">Based on Nuxt</h4>
                    <p class="description mt-3">Neon is built on top of the most popular open source toolkit for developing with HTML, CSS, and JS.</p>
                    <div>
                      <span class="badge badge-pill badge-primary">bootstrap 5</span>
                      <span class="badge badge-pill badge-primary">dashboard</span>
                      <span class="badge badge-pill badge-primary">template</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card mb-4 card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-default text-white rounded-circle mb-4">
                      <n-icon icon="wrench"></n-icon>
                    </div>
                    <h4 class="h3 text-default text-uppercase">Integrated build tools</h4>
                    <p class="description mt-3">Use Neons's included npm and gulp scripts to compile source code, run tests, and more with just a few simple commands.</p>
                    <div>
                      <span class="badge badge-pill badge-default">npm</span>
                      <span class="badge badge-pill badge-default">webpack</span>
                      <span class="badge badge-pill badge-default">build tools</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card mb-4 card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4">
                      <n-icon icon="heart"></n-icon>
                    </div>
                    <h4 class="h3 text-warning text-uppercase">Full Sass support</h4>
                    <p class="description mt-3">Neon makes customization easier than ever before. You get all the tools to make your website building process a breeze.</p>
                    <div>
                      <span class="badge badge-pill badge-warning">sass</span>
                      <span class="badge badge-pill badge-warning">design</span>
                      <span class="badge badge-pill badge-warning">customize</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="card mb-4 card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                      <n-icon icon="key"></n-icon>
                    </div>
                    <h4 class="h3 text-success text-uppercase">Full RBAC support</h4>
                    <p class="description mt-3">Neon is built on top of the most popular open source toolkit for developing with HTML, CSS, and JS.</p>
                    <div>
                      <span class="badge badge-pill badge-success">role</span>
                      <span class="badge badge-pill badge-success">limit</span>
                      <span class="badge badge-pill badge-success">admin</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card mb-4 card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-info text-white rounded-circle mb-4">
                      <n-icon icon="flag"></n-icon>
                    </div>
                    <h4 class="h3 text-info text-uppercase">Sequelize modelize Table</h4>
                    <p class="description mt-3">Use Neons's included npm and gulp scripts to compile source code, run tests, and more with just a few simple commands.</p>
                    <div>
                      <span class="badge badge-pill badge-info">model</span>
                      <span class="badge badge-pill badge-info">database</span>
                      <span class="badge badge-pill badge-info">mysql</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card mb-4 card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-danger text-white rounded-circle mb-4">
                      <n-icon icon="bookmark"></n-icon>
                    </div>
                    <h4 class="h3 text-danger text-uppercase">Jwt authenticates</h4>
                    <p class="description mt-3">Neon makes customization easier than ever before. You get all the tools to make your website building process a breeze.</p>
                    <div>
                      <span class="badge badge-pill badge-danger">sass</span>
                      <span class="badge badge-pill badge-danger">design</span>
                      <span class="badge badge-pill badge-danger">customize</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6 bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="~/assets/images/img/theme/landing-1.png" class="img-fluid" alt="Landing image" />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h1>Awesome features</h1>
              <p>
                This NeonCMS comes with super cool features that are meant to help in the process. Low-Code components, modules and useful plugins are just a few things you will
                see and love at first sight.
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <n-icon icon="settings-gear-65"></n-icon>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Carefully crafted components</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <n-icon icon="html5"></n-icon>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Amazing page examples</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <n-icon icon="satisfied"></n-icon>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Super friendly support team</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <img src="~/assets/images/img/theme/landing-2.png" class="img-fluid" alt="Landing image 2" />
          </div>
          <div class="col-md-6">
            <div class="pr-md-5">
              <h1>Example pages</h1>
              <p>If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages.</p>
              <nuxt-link to="/pages/user" class="font-weight-bold text-warning mt-5"> Explore pages </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="~/assets/images/img/theme/landing-3.png" class="img-fluid" alt="Landing image 3" />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h1>Lovable widgets and cards</h1>
              <p>
                We love cards and everybody on the web seems to. We have gone above and beyond with options for you to organise your information. From cards designed for content,
                to pricing cards or user profiles, you will have many options to choose from.
              </p>
              <nuxt-link to="/widgets" class="font-weight-bold text-info mt-5"> Explore widgets </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-7 section-floating-icons bg-white overflow-hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3">FontAwesome Icons</h2>
            <p class="lead">
              The official package contains over 2.000 icons which are looking great in combination with Neon Design System. Make sure you check all of them and use those that you
              like the most.
            </p>
            <div class="btn-wrapper">
              <a href="https://fontawesome.com/icons?m=free" class="btn btn-primary rounded-pill">View demo icons</a>
              <a href="https://fontawesome.com/icons?m=free" target="_blank" rel="noopener" class="btn btn-default rounded-pill mt-3 mt-md-0">View all icons</a>
            </div>
          </div>
        </div>
        <div class="blur--hover">
          <a href="https://fontawesome.com/icons?m=free">
            <div class="icons-container blur-item mt-5">
              <!-- Center -->
              <i class="icon fab fa-dribbble" />
              <!-- Right 1 -->
              <i class="icon icon-sm fab fa-css3" />
              <i class="icon icon-sm fab fa-cloudsmith" />
              <i class="icon icon-sm fab fa-google" />
              <!-- Right 2 -->
              <i class="icon fab fa-twitter" />
              <i class="icon fab fa-html5" />
              <i class="icon fab fa-instagram" />
              <!-- Left 1 -->

              <i class="icon icon-sm fab fa-apple" />
              <i class="icon icon-sm fab fa-amazon" />
              <i class="icon icon-sm fab fa-behance" />

              <!-- Left 2 -->
              <i class="icon fab fa-angular" />
              <i class="icon fab fa-react" />
              <i class="icon fab fa-slack" />
            </div>

            <span class="blur-hidden h5 text-primary">Explore all the 2.000+ FontAwesome Icons</span>
          </a>
        </div>
      </div>
    </section>

    <section class="py-7">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3">Do you love this awesome <span class="text-success">NeonCMS using Nuxt?</span></h2>
            <p class="lead">
              Cause if you do, it can be yours now. Hit the button below to navigate to purchase a license for your next project. Build a new offcial website with better seo or use
              the newest technology for employee!
            </p>
            <div class="btn-wrapper">
              <a href="/pricing?ref=index-page" class="btn btn-default rounded-pill btn-icon mb-3 mb-sm-0">
                <span class="btn-inner--icon"><n-icon icon="shopping-cart"></n-icon></span>
                <span class="btn-inner--text">Purchase now</span>
              </a>
            </div>
            <div class="text-center">
              <h4 class="display-4 mb-5 mt-5">Combination with these technologies</h4>
              <client-only>
                <div class="row justify-content-center">
                  <div class="col-md-2 col-3 my-2">

                      <el-tooltip placement="top" content="Express.js - Fast, unopinionated, minimalist web framework for Node.js">
                        <a href="https://expressjs.com/?ref=neoncms-index-page" target="_blank" rel="noopener" aria-label="Express">
                          <img src="~/assets/images/tech/express.png" class="img-fluid rounded-circle shadow shadow-lg--hover" alt="Express logo" />
                        </a>
                      </el-tooltip>
                  </div>

                  <div class="col-md-2 col-3 my-2">
                    <client-only>
                      <el-tooltip placement="top" content="Nuxt - The Intuitive Vue Framework">
                        <a href="https://nuxt.com/?ref=neoncms-index-page" target="_blank" rel="noopener" aria-label="Nuxt">
                          <img src="~/assets/images/tech/nuxt.png" class="img-fluid rounded-circle shadow shadow-lg--hover" alt="Nuxt logo" />
                        </a>
                      </el-tooltip>
                    </client-only>
                  </div>
                  <div class="col-md-2 col-3 my-2">
                    <client-only>

                      <el-tooltip placement="top" content="Vue.js - The progressive javascript framework">
                        <a href="https://vuejs.org/?ref=neoncms-index-page" target="_blank" rel="noopener" aria-label="Vue">
                          <img src="~/assets/images/tech/vue.png" class="img-fluid rounded-circle shadow shadow-lg--hover" alt="Vue logo" />
                        </a>
                      </el-tooltip>

                    </client-only>
                  </div>
                  <div class="col-md-2 col-3 my-2">
                    <el-tooltip placement="top" content="Bootstrap 5 - The world’s most popular front-end open source toolkit">
                      <a href="http://getbootstrap.com/?ref=neoncms-index-page" target="_blank" rel="noopener" aria-label="Bootstrap">
                        <img src="~/assets/images/tech/bootstrap.png" class="img-fluid rounded-circle shadow shadow-lg--hover" alt="Bootstrap image" />
                      </a>
                    </el-tooltip>
                  </div>
                  <div class="col-md-2 col-3 my-2">
                    <el-tooltip placement="top" content="ElementUI - A Desktop UI Toolkit for Web">
                      <a href="https://element.eleme.io/?ref=neoncms-index-page" target="_blank" rel="noopener" aria-label="ElementUI">
                        <img src="~/assets/images/tech/elementui.png" class="img-fluid rounded-circle shadow shadow-lg--hover" alt="ElementUI logo" />
                      </a>
                    </el-tooltip>
                  </div>
                  <div class="col-md-2 col-3 my-2">
                    <el-tooltip placement="top" content="Sequelize - the promise-based Node.js ORM">
                      <a href="https://sequelize.org/?ref=neoncms-index-page" target="_blank" rel="noopener" aria-label="Sequelize">
                        <img src="~/assets/images/tech/sequelize.png" class="img-fluid rounded-circle shadow shadow-lg--hover" alt="Sequelize logo" />
                      </a>
                    </el-tooltip>
                  </div>
                  <div class="col-md-2 col-3 my-2">
                    <el-tooltip placement="top" content="Oauth - The industry-standard protocol for authorization">
                      <a href="https://oauth.net/2/?ref=neoncms-index-page" target="_blank" rel="noopener" aria-label="Oauth">
                        <img src="~/assets/images/tech/oauth.png" class="img-fluid rounded-circle shadow shadow-lg--hover" alt="Oauth logo" />
                      </a>
                    </el-tooltip>
                  </div>
                </div>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
  </div>

</template>
<style lang="scss">
.section-shaped {
  position: relative;

  .stars-and-coded {
    margin-top: 8rem;
  }

  .shape {
    position: absolute;
    display: none;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;

    span {
      position: absolute;
    }

    + .container {
      position: relative;
      padding-top: 6rem;
      padding-bottom: 0rem;
      height: 100%;
    }

    &.shape-skew {
      + .container {
        padding-top: 0;

        .col {
          margin-top: -100px;
        }
      }

      + .shape-container {
        padding-top: 18rem;
        padding-bottom: 19rem;
      }
    }
  }

  .shape-skew {
    transform: skewY(-8deg);
    transform-origin: 0;

    span {
      transform: skew(8deg);
    }
  }

  // Color variations
  .shape-primary {
    background: linear-gradient(
      150deg,
      shapes-primary-color('step-1-gradient-bg') 15%,
      shapes-primary-color('step-2-gradient-bg') 70%,
      shapes-primary-color('step-3-gradient-bg') 94%
    );

    :nth-child(1) {
      background: shapes-primary-color('span-1-bg');
    }

    :nth-child(2) {
      background: shapes-primary-color('span-2-bg');
    }

    :nth-child(3) {
      background: shapes-primary-color('span-3-bg');
    }

    :nth-child(4) {
      background: shapes-primary-color('span-4-bg');
    }

    :nth-child(5) {
      background: shapes-primary-color('span-5-bg');
    }
  }

  .shape-default {
    background: linear-gradient(
      150deg,
      shapes-default-color('step-1-gradient-bg') 15%,
      shapes-default-color('step-2-gradient-bg') 70%,
      shapes-default-color('step-3-gradient-bg') 94%
    );

    :nth-child(1) {
      background: shapes-default-color('span-1-bg');
    }

    :nth-child(2) {
      background: shapes-default-color('span-2-bg');
    }

    :nth-child(3) {
      background: shapes-default-color('span-3-bg');
    }

    :nth-child(4) {
      background: shapes-default-color('span-4-bg');
    }

    :nth-child(5) {
      background: shapes-default-color('span-5-bg');
    }
  }

  .shape-light {
    background: linear-gradient(150deg, shapes-light-color('step-1-gradient-bg') 15%, shapes-light-color('step-2-gradient-bg') 70%, shapes-light-color('step-3-gradient-bg') 94%);

    :nth-child(1) {
      background: shapes-light-color('span-1-bg');
    }

    :nth-child(2) {
      background: shapes-light-color('span-2-bg');
    }

    :nth-child(3) {
      background: shapes-light-color('span-3-bg');
    }

    :nth-child(4) {
      background: shapes-light-color('span-4-bg');
    }

    :nth-child(5) {
      background: shapes-light-color('span-5-bg');
    }
  }

  .shape-dark {
    background: linear-gradient(150deg, shapes-dark-color('step-1-gradient-bg') 15%, shapes-dark-color('step-2-gradient-bg') 70%, shapes-dark-color('step-3-gradient-bg') 94%);

    :nth-child(1) {
      background: shapes-dark-color('span-1-bg');
    }

    :nth-child(2) {
      background: shapes-dark-color('span-2-bg');
    }

    :nth-child(3) {
      background: shapes-dark-color('span-3-bg');
    }

    :nth-child(4) {
      background: shapes-dark-color('span-4-bg');
    }

    :nth-child(5) {
      background: shapes-dark-color('span-5-bg');
    }
  }

  .shape-style-1 {
    span {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    .span-200 {
      height: 200px;
      width: 200px;
    }

    .span-150 {
      height: 150px;
      width: 150px;
    }

    .span-100 {
      height: 100px;
      width: 100px;
    }

    .span-75 {
      height: 75px;
      width: 75px;
    }

    .span-50 {
      height: 50px;
      width: 50px;
    }

    :nth-child(1) {
      left: -4%;
      bottom: auto;
      background: rgba(255, 255, 255, 0.1);
    }

    :nth-child(2) {
      right: 4%;
      top: 10%;
      background: rgba(255, 255, 255, 0.1);
    }

    :nth-child(3) {
      top: 280px;
      right: 5.66666%;
      background: rgba(255, 255, 255, 0.3);
    }

    :nth-child(4) {
      top: 320px;
      right: 7%;
      background: rgba(255, 255, 255, 0.15);
    }

    :nth-child(5) {
      top: 38%;
      left: 1%;
      right: auto;
      background: rgba(255, 255, 255, 0.05);
    }

    :nth-child(6) {
      width: 200px;
      height: 200px;
      top: 44%;
      left: 10%;
      right: auto;
      background: rgba(255, 255, 255, 0.15);
    }

    :nth-child(7) {
      bottom: 50%;
      right: 36%;
      background: rgba(255, 255, 255, 0.04);
    }

    :nth-child(8) {
      bottom: 70px;
      right: 2%;
      background: rgba(255, 255, 255, 0.2);
    }

    :nth-child(9) {
      bottom: 1%;
      right: 2%;
      background: rgba(255, 255, 255, 0.1);
    }

    :nth-child(10) {
      bottom: 1%;
      left: 1%;
      right: auto;
      background: rgba(255, 255, 255, 0.05);
    }

    @include media-breakpoint-down(md) {
      span {
        height: 120px;
      }
    }

    @include media-breakpoint-down(sm) {
      span {
        height: 90px;
      }
    }

    // shape color variations
    &.shape-primary {
      background: linear-gradient(
        150deg,
        shapes-primary-color('step-1-gradient-bg') 15%,
        shapes-primary-color('step-2-gradient-bg') 70%,
        shapes-primary-color('step-3-gradient-bg') 94%
      );
    }

    &.shape-default {
      background: linear-gradient(
        150deg,
        shapes-default-color('step-1-gradient-bg') 15%,
        shapes-default-color('step-2-gradient-bg') 70%,
        shapes-default-color('step-3-gradient-bg') 94%
      );
    }

    &.shape-light {
      background: linear-gradient(150deg, shapes-light-color('step-1-gradient-bg') 15%, shapes-light-color('step-2-gradient-bg') 70%, shapes-light-color('step-3-gradient-bg') 94%);
    }

    &.shape-dark {
      background: linear-gradient(150deg, shapes-dark-color('step-1-gradient-bg') 15%, shapes-dark-color('step-2-gradient-bg') 70%, shapes-dark-color('step-3-gradient-bg') 94%);
    }
  }

  // Styles - works with a color variation class (e.g shapes-default)
  .shape-style-2 {
    span {
      height: 190px;
    }

    .span-sm {
      height: 100px;
    }

    :nth-child(1) {
      width: 33.33333%;
      top: 0;
      left: -16.66666%;
    }

    :nth-child(2) {
      width: 33.33333%;
      top: 0;
      left: 16.66666%;
      right: auto;
    }

    :nth-child(3) {
      width: 33.33333%;
      left: 49.99999%;
      bottom: auto;
    }

    :nth-child(4) {
      width: 33.33333%;
      top: 55%;
      right: -16.66666%;
    }

    :nth-child(5) {
      width: 33.33333%;
      bottom: 0;
    }

    @include media-breakpoint-down(md) {
      span {
        height: 120px;
      }
    }

    @include media-breakpoint-down(sm) {
      span {
        height: 90px;
      }
    }
  }

  .shape-style-3 {
    span {
      height: 140px;
    }

    .span-sm {
      height: 100px;
    }

    :nth-child(1) {
      width: 66%;
      left: -16.66666%;
      bottom: auto;
    }

    :nth-child(2) {
      width: 40%;
      top: 54%;
      //height: 320px;
      right: -16.66666%;
    }

    :nth-child(3) {
      width: 33.33333%;
      top: 34%;
      left: -16.66666%;
      right: auto;
    }

    :nth-child(4) {
      width: 60%;
      bottom: 0;
      right: -16.66666%;
      opacity: 0.6;
    }

    :nth-child(5) {
      width: 33.33333%;
      bottom: 0;
    }

    @include media-breakpoint-down(md) {
      span {
        height: 120px;
      }
    }

    @include media-breakpoint-down(sm) {
      span {
        height: 90px;
      }
    }
  }
}
</style>
<script setup>
useHead({
  title: 'Home - Nuxt Admin Template',
})
</script>
