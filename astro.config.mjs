import { defineConfig } from 'astro/config';
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: '/',
  trailingSlash: 'always',
  outDir: './dist',
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      assetsInlineLimit:0,  //jsファイル分割 引っ剥がし
      cssCodeSplit:true, //cssファイル分割 
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
      preprocessorOptions: {
      },
      minify: false,
    }
  }
});
