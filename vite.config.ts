import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

const routes = [
  '/',
  '/about',
  '/privacy',
  '/support'
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://ffsensitivities.web.app',
      routes,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});