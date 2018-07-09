const {src, task, watch, dest} = require('gulp');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const jasmine = require('gulp-jasmine-phantom');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');


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

task('styles', () => {
  return src('sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
});

task('topscript', () => {
  return src(['js/nosotros.js', 'js/gen_validatorv31.js'])
    .pipe(concat('topscript.js'))
    .pipe(dest('dist/js'));
});

task('botscript', () => {
  return src(['js/jquery-1.8.3.js', 'js/jquery-ui-1.9.2.custom.min.js', 'js/helper.js', 'js/builder.js'])
    .pipe(concat('botscript.js'))
    .pipe(dest('dist/js'));
});
