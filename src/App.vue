<script setup lang="ts">
import { RouteLocationNormalized } from 'vue-router';
import { useSettingStore } from '@/store';

const getFirstLevelRoute = (route: RouteLocationNormalized) => {
  if (!Array.isArray(route.matched) || route.matched.length === 0) {
    return route.fullPath;
  }
  return route.matched[0].name;
};

const settingStore = useSettingStore();
const cacheList = computed(() => settingStore.getCacheList);

</script>

<template>
  <router-view v-slot="{Component, route}">
    <transition name="fade">
      <keep-alive :include="[...cacheList]">
        <component :is="Component" :key="getFirstLevelRoute(route)" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style>
#app{
  width: 100%;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity .8s ease;
}
.fade-enter-from,.fade-leave-to{
  opacity: 0;
}
</style>
