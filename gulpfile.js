const {src, task, watch, dest, series} = require('gulp');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const del = require('del');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const zip = require('gulp-zip');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');


// General tasks

task('serve', () => {
  browserSync.init({
      server: "./"
  });
  watch("*.html").on('change', browserSync.reload);
  watch("css/*.css").on('change', browserSync.reload);
  watch("js/*.js").on('change', browserSync.reload);
});

task('serve-pro', () => {
  browserSync.init({
      server: "./pro"
  })
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

// Development build tasks

task('css-dev', () => {
  return src(['css/normalize.css', 'css/base.css'])
    .pipe(concat('styles.css'))
    .pipe(cleanCSS())
    .pipe(dest('css'));
});

task('js-dev', async () => {
  // Header scripts
  src(['js/createjs.min.js', 'js/nosotros.js', 'js/gen_validatorv31.js'])
    .pipe(concat('topscript.js'))
    .pipe(dest('js'));
  // Body scripts
  src(['js/jquery-1.8.3.js', 'js/jquery-ui-1.9.2.custom.js', 'js/helper.js', 'js/builder.js'])
  .pipe(concat('botscript.js'))
  .pipe(dest('js'));
});

// Production build tasks
task('cleanDir', function () {
  return del([   
    'pro/**/*'  
  ]);
});

task('css-pro', () => {
  return src(['css/normalize.css', 'css/base.css'])
    .pipe(concat('styles.css'))
    .pipe(cleanCSS())
    .pipe(dest('pro/css'));
});

task('js-pro', async () => {
  // Header scripts
  src(['js/createjs.min.js', 'js/nosotros.js', 'js/gen_validatorv31.js'])
    .pipe(concat('topscript.js')) 
    .pipe(minify({
      ext:{
          src:'-debug.js',
          min:'.js',
      }
    })) 
    .pipe(dest('pro/js'));
    
  // Body scripts
  src(['js/jquery-1.8.3.js', 'js/jquery-ui-1.9.2.custom.js', 'js/helper.js', 'js/builder.js'])
  .pipe(concat('botscript.js')) 
  .pipe(minify({
      ext:{
          src:'-debug.js',
          min:'.js',
      }
  }))   
  .pipe(dest('pro/js')); 
});


task('views', () => {
  return src(['*.html','*.ico'])
    .pipe(dest('pro'));
});

task('images', () => {
  return src('img/*.*')
    .pipe(dest('pro/img'));
});

task('font', () => {
  return src('font/*.*')
    .pipe(dest('pro/font'));
});

task('php', () => {
  return src('php/*.php')
    .pipe(dest('pro/php'));
});

// Zip tasks

task('cleanJS', function () {
  return del([
    'pro/js/topscript-debug.js',    
    'pro/js/botscript-debug.js'  
  ]);
});

task('compress', async () => {
  src('pro/**/*')
  .pipe(zip('archive.zip'))
  .pipe(dest('./'))
});

task('dev', series('css-dev', 'js-dev', 'serve'));
task('pro', series('cleanDir', 'css-pro', 'js-pro', 'views', 'images', 'font', 'php', 'serve-pro' ));
task('zip', series('cleanJS', 'compress'));
