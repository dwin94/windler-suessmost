const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html', () => {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.sass', () => {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', [ 'css' ], () => {
  return gulp
  .src('./app/assets/dist/main.css')
  .pipe(browserSync.stream());
});
