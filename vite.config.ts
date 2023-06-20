import { defineConfig, loadEnv } from 'vite';
import createVitePlugins from './vite/plugins';
// eslint-disable-next-line
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: createVitePlugins(env, command),
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
  };
});
