<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb" :class="[{ [`bg-${type}`]: type }, listClasses]">
      <slot />
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    type: {
      type: String,
      default: '',
      description: 'Breadcrumb background type',
    },
    listClasses: {
      type: [String, Object],
      default: '',
      description: 'Breadcrumb list classes',
    },
  },
}
</script>
