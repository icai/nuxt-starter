<template>
  <component :is="tag" v-click-outside="closeDropDown" v-on="listeners" :class="[{ show: isOpen }]">
    <slot :is-open="isOpen" name="toggle">
      <a class="nav-link dropdown-toggle" role="button" :data-toggle="dataToggle" aria-haspopup="true" aria-expanded="false">Pages</a>
    </slot>
    <slot :is-open="isOpen" name="menu"></slot>
  </component>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isOpen = ref(false);
const listeners = {};

const toggleDropDown = () => {
  isOpen.value = !isOpen.value;
  emit('change', isOpen.value);
};

const closeDropDown = () => {
  isOpen.value = false;
  emit('change', false);
};

onMounted(() => {
  listeners[dataToggle === 'hover' ? 'mouseenter' : 'click'] = toggleDropDown;
  listeners[dataToggle === 'hover' ? 'mouseleave' : 'blur'] = closeDropDown;
});
</script>
<style lang="scss" scoped>
.dropdown {
  cursor: pointer;
  user-select: none;
}

.navbar .dropdown-menu .list-group > li:first-child .list-group-item {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}

.navbar .dropdown-menu .list-group > li:last-child .list-group-item {
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.dropdown-menu {
  font-size: 0.875rem;
}

.dropdown-menu .dropdown-item > i,
.dropdown-menu .dropdown-item > svg {
  margin-right: 1rem;
  font-size: 1rem;
  vertical-align: -17%;
}

.dropdown-menu .dropdown-item img,
.dropdown-menu .dropdown-item svg {
  width: auto;
  height: 14px;
  margin-right: 0.5rem;
  position: relative;
  top: -1px;
}

.dropdown-menu .list-group-item .media p {
  color: #8492a6;
  line-height: 1.4;
}

.dropdown-menu .list-group-item .media:hover .heading {
  color: #6e00ff;
}

.dropdown-menu-dark {
  background: #282f37;
  border: 0;
}

.dropdown-menu-dark .dropdown-item {
  color: hsla(0, 0%, 100%, 0.9);
}

.dropdown-menu-dark .dropdown-item:active,
.dropdown-menu-dark .dropdown-item:focus,
.dropdown-menu-dark .dropdown-item:hover {
  color: #fff;
  background: rgba(60, 72, 88, 0.1);
}

.dropdown-menu-dark .dropdown-divider {
  background: rgba(31, 45, 61, 0.2);
}

@media (min-width: 992px) {
  .navbar-expand-lg .dropdown:not(.dropdown-submenu):not(.dropdown-fluid) > .dropdown-menu:not(.dropdown-menu-right) {
    margin-left: -1.25rem;
  }

  .navbar-expand-lg .dropdown:not(.dropdown-submenu):not(.dropdown-fluid) > .dropdown-menu-right {
    margin-right: -1.25rem;
  }

  .navbar-expand-lg .dropdown-menu .list-group > li .list-group-item {
    border: 0;
    transform: scale(1);
    transition: all 0.2s ease;
  }
}

@media (min-width: 992px) and (prefers-reduced-motion: reduce) {
  .navbar-expand-lg .dropdown-menu .list-group > li .list-group-item {
    transition: none;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg .dropdown-menu .list-group > li .media-body * {
    transition: all 0.2s ease;
  }
}

@media (min-width: 992px) and (prefers-reduced-motion: reduce) {
  .navbar-expand-lg .dropdown-menu .list-group > li .media-body * {
    transition: none;
  }
}

@media (min-width: 992px) {
  .dropdown-menu-arrow:before {
    content: '';
    background: #fff;
    box-shadow: none;
    display: block;
    height: 16px;
    width: 16px;
    left: 1.25rem;
    position: absolute;
    bottom: 100%;
    z-index: -5;
    transform: rotate(-45deg) translateY(1rem);
    border-radius: 0.2rem;
    box-shadow: -1px -1px 10px -2px rgba(31, 45, 61, 0.2);
  }

  .dropdown-menu-arrow.dropdown-menu-right:before {
    right: 2.5rem;
    left: auto;
  }

  .dropdown-menu-sm {
    min-width: 10rem !important;
    border: 0.2rem;
  }

  .dropdown-menu-sm.dropdown-menu-arrow:before {
    height: 14px;
    width: 14px;
    left: 10px;
  }

  .dropdown-menu-sm.dropdown-menu-arrow.dropdown-menu-right:before {
    right: 20px;
    left: auto;
  }

  .dropdown-menu-lg {
    min-width: 25rem !important;
    border-radius: 0.25rem;
  }

  .dropdown-menu-xl {
    min-width: 35rem !important;
    border-radius: 0.25rem;
  }
}

@media (min-width: 992px) {
  .dropdown-fluid {
    position: static;
  }

  .dropdown-fluid .dropdown-menu {
    width: calc(100% - 30px);
    max-width: 1200px;
    left: 15px;
    right: auto;
  }

  .dropdown-fluid .dropdown-menu-right {
    right: 15px;
    left: auto;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg .dropdown-menu .list-group > li:hover .list-group-item {
    z-index: 11;
    transform: scale(1.05);
    background-color: #fafbfe;
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
    border-radius: 0.375rem;
  }

  .navbar-expand-lg .dropdown-submenu .dropdown-menu {
    min-width: 16rem;
    margin-left: 1rem;
  }

  .navbar-expand-lg .dropdown-submenu .dropdown-menu:before {
    content: '';
    border-left: 1.5rem solid transparent;
    position: absolute;
    left: -1rem;
    top: 0;
    height: 100%;
    background-color: transparent;
    transform: none;
  }

  .navbar-expand-lg .dropdown-submenu .dropdown-item:after {
    right: 0;
  }

  .navbar-expand-lg .dropdown-fluid .dropdown-menu {
    overflow: hidden;
    padding: 0;
    min-width: 1000px;
  }

  .navbar-expand-lg .dropdown-fluid .dropdown-col-image {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
  }
}

.dropdown-menu .dropdown-menu {
  left: 100%;
  margin: 0;
  right: auto;
  top: 0;
}

.dropdown-submenu {
  display: block;
  position: relative;
}

.dropdown-submenu > .dropdown-menu:after {
  border: 0 !important;
}

.dropdown-submenu > .dropdown-item:after,
.dropdown-submenu > .list-group-item:after {
  margin-left: 10.2px;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  transform: rotate(270deg);
}

.dropdown-submenu > .dropdown-item:empty:after,
.dropdown-submenu > .list-group-item:empty:after {
  margin-left: 0;
}

.dropdown-submenu > .dropdown-item:after,
.dropdown-submenu > .list-group-item:after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  margin-left: 0;
  transition: all 0.2s ease;
  transform: rotate(270deg) !important;
}

@media (prefers-reduced-motion: reduce) {
  .dropdown-submenu > .dropdown-item:after,
  .dropdown-submenu > .list-group-item:after {
    transition: none;
  }
}

.dropdown-submenu > .dropdown-item:hover:after,
.dropdown-submenu > .list-group-item:hover:after {
  transform: translate(5px, -50%);
}

@media (max-width: 991.98px) {
  .dropdown-submenu .dropdown-menu {
    padding: 0;
    box-shadow: none;
    top: 0;
  }

  .dropdown-submenu .dropdown-item {
    padding-left: 3rem;
  }
}
</style>
