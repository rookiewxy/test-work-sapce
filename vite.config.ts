/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-08-09 11:23:14
 * @LastEditors: wxy
 * @LastEditTime: 2022-08-24 14:48:13
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { Target } from 'rollup-plugin-copy';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import copy from 'rollup-plugin-copy';
import VitePluginStyleInject from './style-inject'

const copyTargets: Target[] = [
  {
    src: `node_modules/xt-earth`,
    dest: `dist`
  }
];
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    // viteCommonjs(),
    // VitePluginStyleInject(),
    // copy({
    //   targets: copyTargets,
    //   hook: 'writeBundle'

    // })
  ],
  optimizeDeps: {
  },
  build: {
    rollupOptions: {
      output: {
      }
    }
  }
})
