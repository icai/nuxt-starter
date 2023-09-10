<template>
  <div @click="onFieldClick" class="edit-cell">
    <client-only>
      <el-tooltip v-if="!editMode && !showInput" :disabled="!canEdit" :placement="toolTipPlacement" :open-delay="toolTipDelay" :content="toolTipContent">
        <div tabindex="0" class="cell-content" :class="{ 'edit-enabled-cell': canEdit }" @keyup.enter="onFieldClick">
          <slot name="content">
            {{ format(modelValue) }}
          </slot>
        </div>
      </el-tooltip>
    </client-only>
    <slot name="component-slot">
      <component
        v-bind="comAttrs"
        :is="'el-' + inputType"
        v-if="editMode || showInput"
        ref="input"
        @focus="onFieldClick"
        @keyup.enter="onInputExit"
        :value="modelValue"
        v-on="listeners"
      >
        <template v-if="inputType == 'select'">
          <el-option v-bind="option" v-for="(option, index) in $attrs.options" :key="index"></el-option>
        </template>
      </component>
    </slot>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
function inheriltClassAndStyle() {
  const attrs = this.$attrs
  attrs.class && this.$el.classList.add(attrs.class)
  attrs.style &&
    Object.entries(attrs.style).forEach(([k, v]) => {
      this.$el.style[k] = v
    })
}
export default {
  mounted() {
    inheriltClassAndStyle.call(this)
  },
  name: 'AEditColumn',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: ''
    },
    toolTipContent: {
      type: String,
      default: 'Click to edit'
    },
    toolTipDelay: {
      type: Number,
      default: 500
    },
    toolTipPlacement: {
      type: String,
      default: 'top'
    },
    showInput: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'input'
    },
    closeEvent: {
      type: String,
      default: 'blur'
    },
    canEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editMode: false
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.value
      }
    },
    comAttrs() {
      // extend with size
      return Object.assign({}, this.$attrs, { size: 'small' })
    },
    listeners() {
      let closeEvent = this.inputType == 'select' ? 'change' : this.closeEvent
      return {
        [closeEvent]: this.onInputExit,
        ...this.$listeners,
        input: (val) => {
          this.$emit('update:value', val)
        },
        change: (val) => {
          if (this.inputType == 'select') {
            this.onInputExit()
          }
          this.$emit('tableChange', val)
        }
      }
    }
  },
  methods: {
    format(value) {
      if (this.inputType == 'select' && value) {
        let found = this.$attrs.options.find((option) => option.value == value)
        value = found?.label || value
      }
      return value
    },
    onFieldClick() {
      if (this.canEdit) {
        this.editMode = true
        this.$nextTick(() => {
          let inputRef = this.$refs.input
          if (inputRef && inputRef.focus) {
            inputRef.focus()
          }
        })
      }
    },
    onInputExit() {
      this.editMode = false
    }
  },
  emits: ['update:value', 'tableChange']
}
</script>

<style>
.cell-content {
}
.edit-enabled-cell {
  padding: 5px 5px;
  min-height: 35px;
  border: 1px dashed #409eff;
}
</style>
