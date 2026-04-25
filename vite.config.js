import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // កំណត់ base ឱ្យចំឈ្មោះ repository របស់លោកអ្នកដើម្បីកុំឱ្យមានបញ្ហា Path 
  base: '/personal-portfolio/', 
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      // បញ្ជាក់ File ក្នុង folder public ដែលត្រូវបញ្ចូលទៅក្នុង cache របស់ PWA
      includeAssets: ['pwa-192x192.png', 'pwa-512x512.png', 'favicon.ico', 'profile.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Rav Rithy Portfolio',
        short_name: 'Portfolio',
        description: 'Personal portfolio website exam project',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', 
        // start_url និង scope ត្រូវតែស៊ីគ្នាជាមួយ base path របស់ GitHub Pages 
        start_url: '/personal-portfolio/', 
        scope: '/personal-portfolio/',
        icons: [
          {
            src: 'pwa-192x192.png', // ក្នុង Vite PWA មិនបាច់ដាក់ path ពេញលេញក្នុង src ទេ វានឹងយកតាម base
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
  ]
})
