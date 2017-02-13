var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src/'
    },
  });
});

gulp.task('sass', function(){
    return gulp.src('src/scss/*.scss')
        .pipe(sass({
          outputStyle: 'compressed'
      }).on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js',src uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('build'));
});

gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('build/images'))
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('build/fonts'))
});

gulp.task('clean', function() {
  return del.sync('build').then(function(cb) {
    return cache.clearAll(cb);
  });
});

gulp.task('clean:build', function() {
  return del.sync('build');
});

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});

gulp.task('build', function (callback) {
  runSequence('clean:build',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
});