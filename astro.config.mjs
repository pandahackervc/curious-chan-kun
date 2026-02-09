import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), tailwind()],
    markdown: {
        shikiConfig: {
          // Choose from Shiki's built-in themes (or add your own)
          // https://shiki.style/themes
          // Alternatively, provide multiple themes
          // See note below for using dual light/dark themes
          themes: {
            light: 'poimandres',
            dark: 'catppuccin-latte',
          },
        },
      },
    
})
