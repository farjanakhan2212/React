import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/Projects/React/',
  server: {
    proxy: {
      '/api': {
        target: 'http://farjana.intelsofts.com/Projects/core/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});

// export default defineConfig({
//   plugins: [react()],
// });
