import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // Default globs omit fonts/media; include them so the bundled font,
        // cover/paper images and reveal audio are cached for offline use.
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,webp,mp4}'],
      },
      manifest: {
        name: 'Spy',
        short_name: 'Spy',
        description: 'Pass-and-play social deduction game',
        theme_color: '#0b0b0d',
        background_color: '#0b0b0d',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
})
