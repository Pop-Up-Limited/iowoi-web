import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use root path for custom domain, subpath for GitHub Pages
  base: process.env.CUSTOM_DOMAIN ? '/' : '/iowoi-web/',
})

