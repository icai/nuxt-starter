<template>
  <div class="custom-control custom-checkbox" :class="[{ disabled: disabled }, { [`custom-checkbox-${type}`]: type }, inlineClass]">
    <input :id="cbId" v-model="model" class="custom-control-input" :aria-label="ariaLabel" :class="inputClasses" type="checkbox" :disabled="disabled" />
    <label :for="cbId" class="custom-control-label">
      <slot>
        <span v-if="inline">&nbsp;</span>
      </slot>
    </label>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
export default {
  name: 'NCheckbox',
  model: {
    prop: 'checked'
  },
  props: {
    checked: {
      type: [Array, Boolean],
      description: 'Whether checkbox is checked'
    },
    disabled: {
      type: Boolean,
      description: 'Whether checkbox is disabled'
    },
    ariaLabel: String,
    inline: {
      type: Boolean,
      description: 'Whether checkbox is inline'
    },
    inputClasses: {
      type: [String, Object, Array],
      description: 'Checkbox input classes'
    },
    type: {
      type: String,
      description: 'Checkbox type (e.g info, danger etc)'
    }
  },
  data() {
    return {
      cbId: '',
      touched: false
    }
  },
  computed: {
    model: {
      get() {
        return this.checked
      },
      set(check) {
        if (!this.touched) {
          this.touched = true
        }
        this.$emit('update:value', check)
      }
    },
    inlineClass() {
      if (this.inline) {
        return 'form-check-inline'
      }
      return ''
    }
  },
  mounted() {
    this.cbId = Math.random().toString(16).slice(2)
  },
  emits: ['update:value']
}
</script>
