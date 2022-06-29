import { createApp } from 'vue';
import '@/style/index.scss';
import 'amfe-flexible/index.js';
import '@/mock';
import App from './App.vue';
import router from './router';
import '@/api/interceptor';

const app = createApp(App);
app.use(router);

app.mount('#app');
