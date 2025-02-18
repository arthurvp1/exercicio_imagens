import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'exercicioimagem',
        short_name: 'imgs',
        description: 'exercicio gerador de imagem',
        theme_color: '#fdf8f9',
        icons: [
          {
            src: 'socoinlges.svg',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'bottle.svg',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});