import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Rav Rithy Portfolio',
        short_name: 'Portfolio',
        description: 'Personal portfolio website exam project',
        theme_color: '#ffffff',
        display: 'standalone', // បង្ខំឱ្យវាដើរដូច App
        start_url: '/personal-portfolio/', // ត្រូវដាក់ឈ្មោះ Repo របស់អ្នក
        scope: '/personal-portfolio/',     // ត្រូវដាក់ឈ្មោះ Repo របស់អ្នក
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  base: '/personal-portfolio/', 
})