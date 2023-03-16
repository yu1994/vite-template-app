import { defineStore } from 'pinia';
import type { RouteLocationNormalized } from 'vue-router';

interface SettingState {
  cacheList: Set<string>;
}

const useSettingStore = defineStore('setting', {
  state: ():SettingState => ({
    cacheList: new Set<string>(),
  }),
  getters: {
    getCacheList():string[] {
      return Array.from(this.cacheList);
    },
  },
  actions: {
    updateCache(route: RouteLocationNormalized) {
      if (typeof route.name === 'string') {
        this.cacheList.add(route.name);
      }
    },
    deleteCache(route: RouteLocationNormalized) {
      if (typeof route.name === 'string') {
        this.cacheList.delete(route.name);
      }
    },
  },
});

export default useSettingStore;
