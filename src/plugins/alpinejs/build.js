// Adapted from the oficial Alpine.js file:
// https://github.com/alpinejs/alpine/blob/main/scripts/build.js

import fs from 'fs'
import zlib from 'zlib'
import esbuild from 'esbuild'

const srcDir = 'src/plugins/alpinejs'
const outDir = 'plugins/alpinejs'

bundle()

async function bundle() {
    await build({
        entryPoints: [`${srcDir}/builds/cdn.js`],
        outfile: `${outDir}/cdn.js`,
        bundle: true,
        platform: 'browser',
        define: { CDN: 'true' },
    })

    await build({
        entryPoints: [`${srcDir}/builds/cdn.js`],
        outfile: `${outDir}/cdn.min.js`,
        bundle: true,
        minify: true,
        platform: 'browser',
        define: { CDN: 'true' },
    })

    outputSize(`${outDir}/cdn.min.js`)

    // Then output two files: an esm module and a cjs module.
    // The ESM one is meant for "import" statements (bundlers and new browsers)
    // and the cjs one is meant for "require" statements (node).
    await build({
        entryPoints: [`${srcDir}/builds/module.js`],
        outfile: `${outDir}/module.esm.js`,
        bundle: true,
        platform: 'neutral',
        mainFields: ['module', 'main'],
    })

    await build({
        entryPoints: [`${srcDir}/builds/module.js`],
        outfile: `${outDir}/module.cjs.js`,
        bundle: true,
        target: ['node10.4'],
        platform: 'node',
    })
}

async function build(options) {
    options.define || (options.define = {})
    options.define['process.env.NODE_ENV'] = process.argv.includes('--watch') ? `'production'` : `'development'`

    try {
        await esbuild.build({
            // watch: process.argv.includes("--watch"),
            // external: ['alpinejs'],
            ...options,
        })
    } catch (error) {
        process.exit(1)
    }
}

function outputSize(file) {
    let size = bytesToSize(zlib.brotliCompressSync(fs.readFileSync(file)).length)

    console.log('\x1b[32m', `${file}: ${size}`)
}

function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]}`
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
}
