import compression from 'vite-plugin-compression';

export default function createCompression(env) {
  const plugin = [];
  const { VITE_COMPRESS } = env;
  if (VITE_COMPRESS) {
    const compressionList = VITE_COMPRESS.split(',');
    if (compressionList.includes('gzip')) {
      plugin.push(
        compression({
          ext: '.gz',
          deleteOriginFile: false,
        })
      );
    }
    if (compressionList.includes('brotli')) {
      plugin.push(
        compression({
          ext: '.br',
          algorithm: 'brotliCompress',
          deleteOriginFile: false,
        })
      );
    }
  }
  return plugin;
}
