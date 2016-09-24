var gulp = require('gulp');
var gutil = require('gulp-util');
var $ = require('gulp-load-plugins')();


gulp.task('default', function() {
  return gulp.src(['src/*.html'])
   .pipe($.if('*.html', $.crisper({
     scriptInHead: false,
    //  onlySplit: true
   })))
   .pipe($.if('*.js', $.babel({
     presets: ['es2015']
   })))
   .pipe(gulp.dest('dist'))
});
