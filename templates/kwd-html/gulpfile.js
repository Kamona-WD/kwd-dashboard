const gulp = require('gulp')
const rename = require('gulp-rename')

const css = (cb) => {
  gulp.src('../../node_modules/boxicons/css/**').pipe(gulp.dest('dist/assets/css/vendor/boxicons/css'))
  gulp.src('../../node_modules/boxicons/fonts/**').pipe(gulp.dest('dist/assets/css/vendor/boxicons/fonts'))
  cb()
}

const js = (cb) => {
  gulp
    .src('../../node_modules/alpinejs/dist/cdn.min.js')
    .pipe(
      rename(function (path) {
        path.basename = 'alpine.min'
      })
    )
    .pipe(gulp.dest('dist/assets/js/vendor'))
  cb()
}

gulp.task('default', gulp.series(css, js))
