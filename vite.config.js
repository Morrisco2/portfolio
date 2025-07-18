import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { externals  } from 'vite-plugin-externals'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  externals:({
      bootstrap: 'bootstrap'
    })
})
