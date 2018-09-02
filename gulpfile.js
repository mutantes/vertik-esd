const gulp = require("gulp"),
  sass = require("gulp-sass"),
  sourcemaps = require('gulp-sourcemaps'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano');

gulp.task('build', function() {
  const plugins = [
    autoprefixer({browsers: ['last 2 versions']}),
    cssnano()
  ];
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./css'));
})

gulp.task("watch", () => {
  gulp.watch(["./scss/**/*.scss"], ["build"]);
});