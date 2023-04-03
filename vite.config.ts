import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import setupExtend from 'vite-plugin-vue-setup-extend';
// eslint-disable-next-line
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    setupExtend(),
    AutoImport({
      imports: ['vue', 'vue-router'], // 自动导入vue和vue-router相关函数
      dts: 'src/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  build: {
    outDir: 'vite-template-app-dist',
  },
  server: {
    open: true,
    port: 3800,
    host: '0.0.0.0',
    proxy: {
      //  '/website-charge': 'http://192.168.101.36:7845',
    },
  },
});
