import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures proper routing for React Router on Vercel
  build: {
    outDir: 'dist', // Vercel deploys whatever is inside 'dist'
    sourcemap: false, // optional, speeds up build
  },
  server: {
    port: 5173, // optional, default Vite port
  },
})
