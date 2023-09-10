<template>
  <i :class="classes"  />
</template>

<script setup>
const props = defineProps({
  icon: String, // Define the 'icon' prop with its type
});
const icon = props.icon;
const classes = computed(() => {
  return {
    'fas': true,
    ['fa-' + icon]: true,
  }
});

</script>
<style>
</style>