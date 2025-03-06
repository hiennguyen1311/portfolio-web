import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({
  path: './env/.env',
});

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType =
            (assetInfo?.name ? assetInfo?.name : '').split('.').at(1) ?? '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `portfolio_assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'portfolio_assets/[name]-[hash].js',
        entryFileNames: 'portfolio_assets/[name]-[hash].js',
      },
    },
  },
  plugins: [react()],
  base: '/assistant/',
  server: { port: Number(process.env.PORT) },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@themes': path.resolve(__dirname, './src/themes'),
      '@translations': path.resolve(__dirname, './src/translations'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@models': path.resolve(__dirname, './src/models'),
      '@services': path.resolve(__dirname, './src/services'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@configs': path.resolve(__dirname, './src/configs'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
});
