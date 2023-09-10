export default {
  model: {
    prop: 'value',
  },
  emits: ['update:value', 'cancel', 'confirm'],
  props: {
    value: Boolean,
    confirmButtonText: {
      type: String,
      default: 'Save changes',
    },
    cancelButtonText: {
      type: String,
      default: 'Close',
    },
  },
  computed: {
    autoFooter() {
      if (this.$listeners.confirm) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    onClose() {
      this.$emit('update:value', false)
      this.$emit('cancel', false)
    },
    onConfirm() {
      this.$emit('confirm')
    },
  }
}
