var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('bowling-kata', function(){
  gulp.watch(['bowling/**/*.js'], ['bowling-test']);
});

gulp.task('bowling-test', function(){
  return gulp.src('bowling/*-test.js')
    .pipe(jasmine({verbose:true, includeStackTrace: false}));
});
