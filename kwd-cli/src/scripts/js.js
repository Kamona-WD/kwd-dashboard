const { resolve, join } = require('path')
const { build } = require('esbuild')
const fg = require('fast-glob')
const normalizePath = require('normalize-path')
const { green, cyan, red, yellow } = require('chalk')

// TODO: improve ignore pattern
module.exports = async (options) => {
  const { root, input, output, watch, skip } = options

  const inputPatterns = input.filter(Boolean).map((pattern) => {
    return `${normalizePath(join(resolve(root), pattern))}`
  })

  const jsFiles = await fg(inputPatterns, {
    ignore: ['**/node_modules/**', ...skip],
  })

  if (!jsFiles.length) {
    console.log(`[${cyan('js')}]:`)
    console.log(`  There is no files match your patterns ${yellow(input)} in root ${yellow(root)}`)
    return
  }

  try {
    await build({
      entryPoints: jsFiles,
      outdir: resolve(output),
      platform: 'browser',
      bundle: true,
      watch: watch,
      minify: !watch,
    })

    if (watch) {
      console.log('Watching js...')
    } else {
      console.log(`[${cyan('JS')}]:`)
      console.log(`  ${green('Done!')}`)
    }
  } catch (error) {
    console.log(`[${red('JS')}]:`)
    console.log(error)
  }
}
