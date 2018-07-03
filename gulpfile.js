var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('default', function() {
  console.log('Hi Mom');

  browserSync.init({
      server: "./"
  });
  browserSync.stream();

});

gulp.task('watch', function(){
  gulp.watch('css/*.css', '[default]')

});
