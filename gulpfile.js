var gulp = require('gulp');
var gutil = require('gulp-util');
var $ = require('gulp-load-plugins')();


gulp.task('default', function() {

  gutil.log('hey bro');
  gutil.log($);
  gutil.log($.uglify);
  return gulp.src(['src/*.html'])
  // return gulp.src(['src/*.{js,html}'])
  //  .pipe($.sourcemaps.init())
   .pipe($.if('*.html', $.crisper({
     scriptInHead: false,
    //  onlySplit: true
   })))
   .pipe($.if('*.js', $.babel({
     presets: ['es2015']
   })))
  //  .pipe($.deleteLines({
  //    'filters': [
  //      /<html>/i
  //    ]
  //  }))
  //  .pipe($.sourcemaps.write('.'))
  // .pipe($.if('*.html', $.inlineSource({attribute: ''})))

  //  .pipe($.if('*.html', $.inline({
  //    base: 'dist',
  //    js: $.uglify,
  //    disabledTypes: ['svg', 'img', 'css']
  //  })))
   .pipe(gulp.dest('dist'))
});
