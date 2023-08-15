import AutoImport from 'unplugin-auto-import/vite';

export default function createAutoImport() {
  return AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    dts: 'src/auto-import.d.ts',
  });
}
