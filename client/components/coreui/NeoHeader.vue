<template>
  <div class="header" :class="{ [`bg-${type}`]: type }">
    <div class="container-fluid">
      <div class="header-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NHeader',
  props: {
    type: {
      type: String,
      default: '',
      description: 'Header background type',
    },
  },
}
</script>
