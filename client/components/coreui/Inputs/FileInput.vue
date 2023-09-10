<template>
  <div class="custom-file">
    <input v-bind="$attrs" id="customFileLang" type="file" class="custom-file-input" lang="en" v-on="listeners" />
    <label class="custom-file-label" for="customFileLang">
      {{ label }}
    </label>
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
  name: 'FileInput',
  inheritAttrs: false,
  props: {
    initialLabel: {
      type: String,
      default: 'Select file'
    }
  },
  data() {
    return {
      files: []
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: this.fileChange
      }
    },
    label() {
      const fileNames = []
      for (const file of this.files) {
        fileNames.push(file.name)
      }
      return fileNames.length ? fileNames.join(', ') : this.initialLabel
    }
  },
  methods: {
    fileChange(evt) {
      this.files = evt.target.files
      this.$emit('change', this.files)
    }
  },
  emits: ['change']
}
</script>
