<template>
  <nav :class="classes" class="navbar">
    <div :class="containerClasses">
      <slot name="brand" />
      <slot name="toggle-button">
        <button v-if="hasMenu" class="navbar-toggler collapsed" type="button" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMenu">
          <span class="navbar-toggler-bar navbar-kebab" />
          <span class="navbar-toggler-bar navbar-kebab" />
          <span class="navbar-toggler-bar navbar-kebab" />
        </button>
      </slot>
      <button class="navbar-toggler" @click.stop="toggleMenu">
        <span class="navbar-toggler-icon" />
      </button>

      <div v-click-outside="closeMenu"  :class="toogleMenuClasses">
        <slot :close-menu="closeMenu" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NNav',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
      description: 'Whether navbar menu is shown (valid for viewports < specified by `expand` prop)'
    },
    transparent: {
      type: Boolean,
      default: false,
      description: 'Whether navbar is transparent'
    },
    expand: {
      type: String,
      default: 'lg',
      description: 'Breakpoint where nav should expand'
    },
    menuClasses: {
      type: [String, Object, Array],
      default: '',
      description: 'Navbar menu (items) classes. Can be used to align menu items to the right/left'
    },
    containerClasses: {
      type: [String, Object, Array],
      default: 'container',
      description: 'Container classes. Can be used to control container classes (contains both navbar brand and menu items)'
    },
    type: {
      type: String,
      default: '',
      description: 'Navbar navbar-color type'
    },
    bg: {
      type: String,
      default: '',
      description: 'Navbar color type'
    }
  },
  computed: {
    classes() {
      const color = `bg-${this.bg}`
      const classes = [{ 'navbar-transparent': this.transparent }, { [`navbar-expand-${this.expand}`]: this.expand }]
      classes.push(color)
      if (this.transparent) {
        classes.push('bg-transparent')
      }
      if (this.type) {
        classes.push(`navbar-${this.type}`)
      }
      return classes
    },
    toogleMenuClasses() {
      return [{ show: this.show }, this.menuClasses, 'navbar-collapse', 'collapse', 'navbar-custom-collapse']
    },
    hasMenu() {
      return !!this.$slots.default
    }
  },
  setup(props, { emit }) {
    const show = computed({
      get() {
        return props.modelValue
      },
      set(newValue) {
        emit('update:modelValue', newValue)
      }
    })

    const toggleMenu = () => {
      show.value = true
    }

    const closeMenu = () => {
      show.value = false
    }

    return {
      show,
      toggleMenu,
      closeMenu
    }
  }
}
</script>
