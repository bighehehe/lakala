// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/feishu-webhook': {
          target: 'https://www.feishu.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/feishu-webhook/, '')
        }
      }
    }
  }
});
