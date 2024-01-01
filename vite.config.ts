import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import VitePluginPages from 'vite-plugin-pages';
import VitePluginGhPages from 'vite-plugin-gh-pages';


// https://vitejs.dev/config/
export default defineConfig({
  base: 'Practice-Project',
  plugins: [VitePluginPages(),
  VitePluginGhPages(),
react()],
})
