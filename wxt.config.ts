import { defineConfig } from 'wxt';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'

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
  vite: (env) => {
    return {
      plugins: [
        vue(),
       // https://github.com/unocss/unocss
        UnoCSS(),
      ],
    }
  },
  manifest: {
    permissions: ['storage', 'tabs'],
  },
});
