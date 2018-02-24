const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const hash = require('gulp-hash');

gulp.task('html', () => {
  console.log('html');
});

gulp.task('css', () => {
    return gulp
      .src('./app/assets/styles/main.sass')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      // .pipe(hash())
      .pipe(gulp.dest('./app/assets/styles/'))
});

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.sass', () => {
    gulp.start('css');
  });
});
