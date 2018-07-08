const {src, task, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const jasmine = require('gulp-jasmine-phantom');

task('default', () => {
  browserSync.init({
      server: "./"
  });
  watch("*.html").on('change', browserSync.reload);
  watch("css/*.css").on('change', browserSync.reload);
  watch("js/*.js").on('change', browserSync.reload);
});

task('lint', () => {
    return src(['js/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

task('tests', () => {
  return src('spec/test.js')
         .pipe(jasmine({
           integration : true,
           vendor : 'js/*.js'
         }));
});
