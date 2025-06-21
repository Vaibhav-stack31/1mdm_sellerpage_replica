import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // same as '0.0.0.0'
    port: 4444,
    allowedHosts: ['www.vaibhav.code4bharat.com']
  }
})
