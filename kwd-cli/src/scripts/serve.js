const { resolve } = require('path')
const bs = require('browser-sync').create()

module.exports = async (options) => {
  bs.init({
    server: resolve(options.dest),
    watch: options.watch,
    index: options.index,
  })
}
