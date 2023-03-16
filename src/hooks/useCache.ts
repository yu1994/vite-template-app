import { onBeforeRouteLeave } from 'vue-router';
import { useSettingStore } from '@/store';

const settingStore = useSettingStore();
export default function useCache() {
  onBeforeRouteLeave((to, from) => {
    if (typeof to.name === 'string') {
      if (from.meta.include && from.meta.include.indexOf(to.name) === -1) {
        console.log(from)
        settingStore.deleteCache(from);
      }
    }
  });
}
