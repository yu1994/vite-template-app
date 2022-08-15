<template>
  <div class="layout">
    <slot name="header" />
    <div class="layout-content">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
import Layout from '@/components/layout/index.vue';

</script>

<script lang="ts">
export default {
  name: 'Layout',
};
</script>

<style scoped lang="scss">
.layout{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .layout-content{
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
