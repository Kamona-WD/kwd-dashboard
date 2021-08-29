const gulp = require('gulp')

module.exports = (options) => {
  return (cb) => {
    gulp.src('../../../node_modules/alpinejs/dist/cdn.min.js').pipe(gulp.dest('dist/assets/js/vendor/alpine.min.js'))
    cb()
  }
}
