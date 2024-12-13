import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173, // Usa el puerto proporcionado por Render o el puerto por defecto
    host: '0.0.0.0', // Asegúrate de que el servidor esté escuchando en todas las interfaces de red
  }
})

