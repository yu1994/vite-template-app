<template>
  <div class="layout">
    <slot name="header" />
    <div class="layout-content">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout',
  };
</script>

<style scoped lang="scss">
  .layout {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .layout-content {
      position: relative;
      flex: 1;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
    }
  }
</style>
