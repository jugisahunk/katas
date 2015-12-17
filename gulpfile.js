var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('bowling-kata', function(){
  gulp.watch(['./dojo/sensei/bowling/**/*.js'], ['bowling-test']);
});

gulp.task('bowling-test', function(){
  return gulp.src('./dojo/sensei/bowling/*-test.js')
    .pipe(jasmine({verbose:true, includeStackTrace: false}));
});

gulp.task('hungryscience-kata', function(){
  gulp.watch(['./dojo/sensei/advent/hungryscience/**/*.js'], ['hungryscience-test']);
});

gulp.task('hungryscience-test', function(){
  return gulp.src('./dojo/sensei/advent/hungryscience/*-test.js')
    .pipe(jasmine({verbose:true, includeStackTrace: false}));
});

gulp.task('santalisp-kata', function(){
  gulp.watch(['./dojo/sensei/advent/santalisp/**/*.js'], ['santalisp-test']);
});

gulp.task('santalisp-test', function(){
  return gulp.src('./dojo/sensei/advent/santalisp/*-test.js')
    .pipe(jasmine({verbose:true, includeStackTrace: false}));
});
