import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// eslint-disable-next-line
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
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
