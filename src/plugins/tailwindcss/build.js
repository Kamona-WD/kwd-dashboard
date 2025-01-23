import { context, build as esBuild } from 'esbuild'

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
        if (process.argv.includes('--watch')) {
            let ctx = await context({
                external: ['tailwindcss'],
                ...options,
            })

            await ctx.watch()
        } else {
            await esBuild({
                external: ['tailwindcss'],
                minify: true,
                ...options,
            })
        }
    } catch (error) {
        process.exit(1)
    }
}
