import { vitePlugin as utwm } from 'unplugin-tailwindcss-mangle'
import { astroImageTools } from 'astro-imagetools'
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import glsl from 'vite-plugin-glsl'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [astroImageTools, mdx(), react(), tailwind(), sitemap()],
  vite: {
    plugins: [glsl(), utwm()],
  },
  site: 'https://sokolenkov.github.com',
})
