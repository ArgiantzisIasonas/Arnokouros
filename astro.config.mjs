import { defineConfig } from "astro/config";
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.arnokouros.com',
  base: '/',
    vite: {
    plugins: [tailwind()], 
  },
});

