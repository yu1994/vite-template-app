<template>
  <layout>
    <div>
      userInfo
      <van-button :to="{ path: '/user/info/detail' }"
        >user/info/detail</van-button
      >
    </div>
  </layout>
</template>

<script setup lang="ts" name="UserInfo">
  import useCache from '@/hooks/useCache';
  import Layout from '@/components/layout/index.vue';

  useCache();
</script>
