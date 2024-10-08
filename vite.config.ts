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
      '@data': path.resolve(__dirname, './src/data/index.ts'),
    },
  },
});
