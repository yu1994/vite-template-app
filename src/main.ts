import { createApp } from 'vue';
import '@/style/index.scss';
import 'vant/es/dialog/style';
import 'amfe-flexible/index.js';
import '@/mock';
import App from './App.vue';
import router from './router';
import '@/api/interceptor';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$currency = (val: number) => {
  if (val !== undefined && val !== null) {
    const newVal = (val * 100).toString();
    return window.parseInt(newVal) / 100;
  }
  return '0.00';
};
app.mount('#app');
