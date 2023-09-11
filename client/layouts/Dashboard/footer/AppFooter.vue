<template>
  <div class="app-layout-footer">
    <div class="app-layout-footer-copyright">
      <span>Copyright © 2020-{{ appYear }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      appYear: new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
.app-layout-footer {
  padding-top: 8px;
  text-align: center;
}
</style>
