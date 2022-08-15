import { createPinia } from 'pinia';
import useSettingStore from '@/store/modules/setting';

const pinia = createPinia();
export { useSettingStore };
export default pinia;
