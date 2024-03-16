import { defineConfig } from 'wxt';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'
function r(path: string) {
  return resolve(__dirname, path);
}
// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  entrypointsDir: 'entries',
  imports: {
    addons: {
      vueTemplate: true,
    },
  },
  alias: {
    '~/': `${r('src')}/`,
  },
  vite: () => ({

    plugins: [vue()],
  }),
  manifest: {
    permissions: ['storage', 'tabs'],
  },
});
