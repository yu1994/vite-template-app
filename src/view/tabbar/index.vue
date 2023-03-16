<template>
  <layout>
    <template #default>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </template>
    <template #footer>
      <van-tabbar route>
        <van-tabbar-item replace to="/tabbar/home" icon="home-o"
          >首页</van-tabbar-item
        >
        <van-tabbar-item replace to="/tabbar/my" icon="search"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </template>
  </layout>
</template>

<script lang="ts" setup>
  import useCache from '@/hooks/useCache';

  useCache();
</script>

<script lang="ts">
  export default {
    name: 'TabbarHome',
  };
</script>
