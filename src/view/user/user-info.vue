<template>
  <layout>
    <div>
      userInfo
      <van-button :to="{path: '/user/info/detail'}">user/info/detail</van-button>
    </div>
  </layout>
</template>

<script setup lang="ts">
import useCache from '@/hooks/useCache';
import Layout from '@/components/layout/index.vue';

console.log('UserInfo');
useCache();
</script>

<script lang="ts">
export default {
  name: 'UserInfo',
};
</script>

<style scoped>

</style>
