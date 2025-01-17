import { resolve, relative } from 'path'
import { defineConfig } from 'vite'
import { glob } from 'glob'
import handlebarsPlugin from 'vite-plugin-handlebars'
import hbsHelpers from './src/support/hbs-helpers'
import data from './src/data'


const root = 'src/html'

const entries = () => {
    const entries = {}

    glob.sync(`${root}/**/*.html`).forEach((p) => {
        let relPath = relative(root, p)

        entries[relPath] = p
    })

    return entries
}

export default defineConfig({
    plugins: [
        handlebarsPlugin({
            partialDirectory: [resolve(__dirname, 'src', 'html', 'hbs')],

            context: {
                ...data,
                env: process.env.NODE_ENV,
            },

            helpers: hbsHelpers,
        }),
    ],
    root,
    publicDir: resolve(__dirname, 'public'),
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    optimizeDeps: {
        entries: Object.keys(entries()),
    },

    build: {
        target: 'esnext',
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: entries(),
            output: {
                assetFileNames: (chunkInfo) => {
                    let outDir = ''

                    if (/css$/.test(chunkInfo.name)) {
                        outDir = 'css'
                    }

                    return `${outDir}/[name][extname]`
                },
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: (e) => {
                    let name = e.name.split('/').pop().replace('.html', '-page')

                    return `js/${name}-[hash].js`
                },
            },
        },
    },
})
