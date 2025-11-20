import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Base path para GitHub Pages (si usas un subdirectorio)
  // Si tu repo es: github.com/usuario/portfolio, descomenta la siguiente línea:
  // base: '/portfolio/',
  // Para Vercel/Netlify, deja base vacío o no lo definas
});

