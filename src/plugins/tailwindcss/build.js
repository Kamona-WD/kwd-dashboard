import esbuild from 'esbuild'

const srcDir = 'src/plugins/tailwindcss'
const outDir = 'plugins'

bundle()

async function bundle() {
    await build({
        entryPoints: [`${srcDir}/tailwindcss.cjs`],
        outfile: `${outDir}/tailwindcss.js`,
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
            external: ['tailwindcss'],
            ...options,
        })
    } catch (error) {
        process.exit(1)
    }
}
