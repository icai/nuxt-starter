<template>
  <div class="card">
    <div role="tab" class="card-header" :aria-expanded="active">
      <a data-toggle="collapse" data-parent="#accordion" :href="`#${itemId}`" :aria-controls="`content-${itemId}`" @click.prevent="activate">
        <slot name="title"> {{ title }} </slot>
        <i class="tim-icons icon-minimal-down" />
      </a>
    </div>
    <div v-show="active" :id="`content-${itemId}`" role="tabpanel" :aria-labelledby="title" class="collapsed">
      <div class="card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapseItem',
  inject: {
    animationDuration: {
      default: 250
    },
    multipleActive: {
      default: false
    },
    addItem: {
      default: () => {}
    },
    removeItem: {
      default: () => {}
    },
    deactivateAll: {
      default: () => {}
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      description: 'Collapse item title'
    },
    id: String
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    itemId() {
      return this.id || this.title
    }
  },
  mounted() {
    this.addItem(this)
  },
  unmounted() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.removeItem(this)
  },
  methods: {
    activate() {
      const wasActive = this.active
      if (!this.multipleActive) {
        this.deactivateAll()
      }
      this.active = !wasActive
    }
  }
}
</script>
