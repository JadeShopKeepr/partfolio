import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, './src/common'),
      '@pages': path.resolve(__dirname, './src/Pages'),
    },
  },
});

// '@static/*': path.resolve(__dirname, './static/*'),
// '@utils/helpers': path.resolve(__dirname, './utils/helpers'),
// '@utils/constants': path.resolve(__dirname, './utils/constants'),
//'@utils/api': path.resolve(__dirname, './utils/api'),
// '@utils/hooks': path.resolve(__dirname, './utils/hooks'),
// '@utils/contextes': path.resolve(__dirname, './utils/contextes'),
// '@features': path.resolve(__dirname, './features'),
// '@features/*': path.resolve(__dirname, './features/*'),
