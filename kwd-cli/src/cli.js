#!/usr/bin/env node
const { Command } = require('commander')
const { version, name } = require('../package.json')
const buildHtml = require('./scripts/html')
const buildJS = require('./scripts/js')
const serve = require('./scripts/serve')

const program = new Command(name)

program.version(version)

program
  .command('html')
  .option('-r, --root <root>', 'Root of `Nunjucks` files', 'src/html')
  .option('-i, --input <input...>', 'Input patterns', ['**/*.njk'])
  .option('-o, --output <output>', 'Output directory', 'dist')
  .option('-d, --data-path <data>', 'Global data', 'data/data.js')
  .option('-w, --watch', 'Watch files')
  .option('-a, --all-in-output', 'Reserve nested structure', false)
  .option('-s, --skip <skip...>', 'Patterns to skip', ['**/layouts/**', '**/components/**', '**/partials/**'])
  .description('Compile `Nunjucks` files to html')
  .action(buildHtml)

program
  .command('js')
  .option('-r, --root <root>', 'Root of `js` files', 'src/assets/js')
  .option('-i, --input <input...>', 'Entry points', ['app.js'])
  .option('-o, --output <output>', 'Output dir', 'dist/assets/js')
  .option('-w, --watch', 'Watch files')
  .option('-s, --skip <skip...>', 'Patterns to skip', [])
  .description('Build javascript')
  .action(buildJS)

program
  .command('serve')
  .option('-d, --dest <dest>', 'dest dir', 'dist')
  .option('-i, --index <index>', 'Specify which file should be used as the index page', 'index.html')
  .option('-w, --watch', 'Watch files')
  .description('Serve')
  .action(serve)

program.parse(process.argv)
