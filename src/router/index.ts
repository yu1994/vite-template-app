import { createRouter, createWebHistory } from 'vue-router';
import pinia, { useSettingStore } from '@/store';
import appRoutes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/home/index.vue'),
      meta: {
        title: '首页',
        requiresAuth: false,
      },
    },
    ...appRoutes,
  ],
});

const settingStore = useSettingStore(pinia);
router.beforeEach((to, from, next) => {
  if (to.meta.keepalive) {
    settingStore.updateCache(to);
  }
  next();
});

export default router;
