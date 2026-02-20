import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const ensureTrailingSlash = (value) => (value.endsWith('/') ? value : `${value}/`)

const base = process.env.BASE_PATH ? ensureTrailingSlash(process.env.BASE_PATH) : '/'

export default defineConfig({
  base,
  plugins: [svelte()],
})
