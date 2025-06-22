import * as esbuild from 'esbuild'
import { rimraf } from 'rimraf'
import stylePlugin from 'esbuild-style-plugin'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { writeFileSync } from 'fs'

const args = process.argv.slice(2)
const isProd = args[0] === '--production'

await rimraf('dist')

/**
 * @type {esbuild.BuildOptions}
 */
const esbuildOpts = {
  color: true,
  entryPoints: ['src/main.tsx'],
  outdir: 'dist',
  entryNames: '[name]',
  write: true,
  bundle: true,
  format: 'iife',
  sourcemap: isProd ? false : 'linked',
  minify: isProd,
  treeShaking: true,
  jsx: 'automatic',
  loader: {
    '.png': 'file',
  },
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
}

if (isProd) {
  await esbuild.build(esbuildOpts)

  // Create a standalone index.html file for production
  const htmlContent = `<!DOCTYPE html>
<html lang="el">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Επισήμανση Προσωπικών Πληροφοριών (PII)</title>
    <meta name="description" content="Εκπαιδευτικό εργαλείο για την επισήμανση προσωπικών αναγνωρίσιμων πληροφοριών (PII) σε κείμενα" />
    <link href="main.css" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script src="main.js"></script>
  </body>
</html>`

  writeFileSync('dist/index.html', htmlContent)
  console.log('✅ Production build complete! You can now open dist/index.html directly in your browser.')
} else {
  const ctx = await esbuild.context({
    ...esbuildOpts,
    entryPoints: ['src/main.tsx', 'index.html'],
    loader: {
      ...esbuildOpts.loader,
      '.html': 'copy',
    },
  })
  await ctx.watch()
  const { hosts, port } = await ctx.serve()
  console.log(`Running on:`)
  hosts.forEach((host) => {
    console.log(`http://${host}:${port}`)
  })
}
