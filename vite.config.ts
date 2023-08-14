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
    esbuild: {
      drop: ['console', 'debugger'],
    },
    build: {
      outDir: 'vite-template-app-dist',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          entryFileNames: 'assets/[name]-[hash].js',
          // eslint-disable-next-line consistent-return
          manualChunks(id): void | string {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
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
