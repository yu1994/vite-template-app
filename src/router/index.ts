import { createRouter, createWebHistory } from 'vue-router';
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
        requiresAuth: false,
      },
    },
    ...appRoutes,
  ],
});

export default router;
