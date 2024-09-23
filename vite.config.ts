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
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'porfolio_assets/[name]-[hash].js',
        entryFileNames: 'porfolio_assets/[name]-[hash].js',
      },
    },
  },
  plugins: [react()],
  server: { port: Number(process.env.PORT) },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(
        __dirname,
        './src/components/components.index.ts',
      ),
      '@pages': path.resolve(__dirname, './src/pages/pages.index.ts'),
      '@routes': path.resolve(__dirname, './src/routes/routes.index.ts'),
      '@themes': path.resolve(__dirname, './src/themes/themes.index.ts'),
      '@translations': path.resolve(
        __dirname,
        './src/translations/translations.index.ts',
      ),
      '@constants': path.resolve(
        __dirname,
        './src/constants/constants.index.ts',
      ),
      '@models': path.resolve(__dirname, './src/models/models.index.ts'),
      '@services': path.resolve(__dirname, './src/services/services.index.ts'),
      '@reducers': path.resolve(__dirname, './src/reducers/reducers.index.ts'),
      '@utils': path.resolve(__dirname, './src/utils/utils.index.ts'),
      '@configs': path.resolve(__dirname, './src/configs/configs.index.ts'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
});
