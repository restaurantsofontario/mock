import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/mock/', // Add this line
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'build', // Change output directory to 'build'
  },
})
