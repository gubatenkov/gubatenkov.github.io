import { defineConfig } from 'astro-imagetools/config'

export default defineConfig({
  placeholder: 'blurred',
  decoding: 'async',
  loading: 'lazy',
})
