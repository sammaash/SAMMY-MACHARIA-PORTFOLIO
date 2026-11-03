import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { sammaCompetency } from './src/data/sammaCompetency.js'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'product-pages',
      enforce: 'post',
      generateBundle(_, bundle) {
        const homepage = bundle['index.html']
        if (!homepage || homepage.type !== 'asset') {
          throw new Error('Cannot generate product pages: index.html was not emitted.')
        }
        for (const [path, title, description] of [
          ['products', 'Products | Sammy Macharia', sammaCompetency.metaDescription],
          [`products/${sammaCompetency.id}`, sammaCompetency.pageTitle, sammaCompetency.metaDescription],
        ]) {
          const html = String(homepage.source)
            .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
            .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${description}"`)
            .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
            .replace(/(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${description}"`)
            .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${title}"`)
            .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*"/, `$1${description}"`)
            .replace('href="https://sammymacharia.com/"', `href="https://sammymacharia.com/${path}"`)
          this.emitFile({ type: 'asset', fileName: `${path}/index.html`, source: html })
        }
      },
    },
  ],
  server: {
    port: 5173,
  },
})
