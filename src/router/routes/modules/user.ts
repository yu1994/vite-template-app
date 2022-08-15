import type { RouteRecordRaw } from 'vue-router';

const routerRecordRaws: RouteRecordRaw[] = [
  {
    path: '/user/info',
    name: 'UserInfo',
    meta: {
      title: '用户信息',
      keepalive: true,
      include: ['UserInfoDetail'],
    },
    component: () => import('@/view/user/user-info.vue'),
  }, {
    path: '/user/info/detail',
    name: 'UserInfoDetail',
    meta: {
      title: '详情',
    },
    component: () => import('@/view/user/user-info-detail.vue'),
  },
];
export default routerRecordRaws;
