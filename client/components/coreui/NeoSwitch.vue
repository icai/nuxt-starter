<template>
  <label class="custom-toggle" :class="switchClass">
    <input v-model="model" type="checkbox" />
    <span class="custom-toggle-slider rounded-circle" :data-label-off="offText" :data-label-on="onText" />
  </label>
</template>

<script>
import { $on, $off, $once, $emit } from '../../utils/gogocodeTransfer'
export default {
  name: 'NSwitch',
  props: {
    value: [Array, Boolean],
    type: String,
    onText: {
      type: String,
      default: 'Yes'
    },
    offText: {
      type: String,
      default: 'No'
    }
  },
  computed: {
    switchClass() {
      const baseClass = 'custom-toggle-'
      if (this.type) {
        return baseClass + this.type
      }
      return ''
    },
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update:value', value)
      }
    }
  },
  methods: {
    triggerToggle() {
      this.model = !this.model
    }
  },
  emits: ['update:value']
}
</script>
