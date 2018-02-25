const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const hash = require('gulp-hash');

gulp.task('css', () => {
    return gulp
      .src('./app/assets/styles/main.sass')
      // .pipe(sass({outputStyle: 'compressed', includePaths: [ './node_modules/normalize-scss/sass' ]}).on('error', sass.logError))
      .pipe(sass({includePaths: [ './node_modules/normalize-scss/sass' ]}).on('error', sass.logError))
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      // .pipe(hash())
      .pipe(gulp.dest('./app/assets/dist/'))
});
