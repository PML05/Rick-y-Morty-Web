import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Rick-y-Morty-Web/',
  plugins: [react()],
});
