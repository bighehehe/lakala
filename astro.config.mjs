// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.pospee.com',
  output: 'static',
  integrations: [sitemap()],
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
