import { createRouter, createWebHistory } from 'vue-router';
import pinia, { useSettingStore } from '@/store';
import appRoutes from './routes';
import Tabbar from '@/view/tabbar/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/tabbar/home',
    },
    {
      path: '/tabbar/',
      component: ()=>import('@/view/tabbar/index.vue'),
      meta: {
        title: '标签',
        keepalive: true,
      },
      children: [
        {
          path: 'home',
          name:'tabbarHome',
          component: ()=> import('@/view/tabbar/home/index.vue'),
        },{
          path: 'my',
          name:'tabbarMy',
          component: ()=> import('@/view/tabbar/my/index.vue')
        }
      ]
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
