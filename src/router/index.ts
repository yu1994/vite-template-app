import { createRouter, createWebHistory } from 'vue-router';
import pinia, { useSettingStore } from '@/store';
import appRoutes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/tabbar/home',
    },
    {
      path: '/tabbar/',
      component: () => import('@/view/tabbar/index.vue'),
      meta: {
        title: '标签',
        keepalive: true,
      },
      children: [
        {
          path: 'home',
          name: 'TabbarHome',
          component: () => import('@/view/tabbar/home/index.vue'),
        },
        {
          path: 'my',
          name: 'TabbarMy',
          component: () => import('@/view/tabbar/my/index.vue'),
        },
      ],
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
