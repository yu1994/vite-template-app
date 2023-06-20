import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import setupExtend from 'vite-plugin-vue-setup-extend';
import createAutoImport from './auto-import';
import createCompression from './compression';

export default function createVitePlugins(env: any, command: string) {
  const isBuild = command === 'build';
  const plugins = [vue()];
  plugins.push(vueJsx());
  plugins.push(setupExtend());
  plugins.push(createAutoImport());
  plugins.push(
    Components({
      resolvers: [VantResolver()],
    })
  );
  if (isBuild) {
    plugins.push(...createCompression(env));
  }
  return plugins;
}
