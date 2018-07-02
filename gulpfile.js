var gulp = require('gulp');


gulp.task('default', defaultTask);

function defaultTask(done) {
  console.log('Hi Mom');
  done();
}

var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();
