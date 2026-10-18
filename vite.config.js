import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  ssgOptions: {
    // dist/hr/index.html rather than dist/hr.html, so each language answers
    // on its directory URL with a trailing slash.
    dirStyle: 'nested',
    // The per-language <Head> tags are injected at the top of <head>, ahead
    // of the template's <meta charset>, which pushes it past the first 1024
    // bytes the HTML spec allows. Move it back to the top.
    onPageRendered(route, html) {
      return html
        .replace(/\s*<meta charset="UTF-8">/i, '')
        .replace(/<head>/i, '<head><meta charset="UTF-8">')
    },
  },
})
