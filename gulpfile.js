var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('html', function () {
  return gulp.src('index.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
  return gulp.src('js/*js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
  return gulp.src('css/*css')
  .pipe(concat('app.css'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watchout', function () {
  gulp.watch('js/*js', ['scripts']);
  gulp.watch('css/*css', ['styles']);
  gulp.watch('index.html', ['html']);
});

gulp.task('default', ['html', 'scripts', 'styles', 'watchout']);
