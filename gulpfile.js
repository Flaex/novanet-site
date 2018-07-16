const {src, task, watch, dest, series} = require('gulp');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const jasmine = require('gulp-jasmine-phantom');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const gzip = require('gulp-gzip');
const sourcemaps = require('gulp-sourcemaps');

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

task('css', () => {
  return src(['css/normalize.css', 'css/base.css'])
    // .pipe(sourcemaps.init())
    .pipe(concat('styles.css'))
    .pipe(dest('css'));
});

task('cssdist', () => {
  return src(['css/normalize.css', 'css/base.css'])
    .pipe(concat('styles.css'))
    .pipe(cleanCSS())
    .pipe(dest('dist/css'));
});

task('sass', () => {
  return src('sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(dest('css'))
    .pipe(browserSync.stream());
});

task('sassdist', () => {
  return src('sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
});

task('jstop', () => {
  return src(['js/createjs.min.js', 'js/nosotros.js', 'js/gen_validatorv31.js'])
    .pipe(concat('topscript.js'))
    .pipe(dest('js'));
});

task('jsbot', () => {
  return src(['js/jquery-1.8.3.js', 'js/jquery-ui-1.9.2.custom.js', 'js/helper.js', 'js/builder.js'])
    .pipe(concat('botscript.js'))
    .pipe(dest('js'));
});

task('indextop', () => {
  return src(['js/createjs.min.js', 'js/nosotros.js', 'js/gen_validatorv31.js'])
    .pipe(concat('indextop.js'))
    .pipe(gzip())
    .pipe(dest('dist/js'));
});

task('contop', () => {
  return src(['js/createjs.min.js', 'js/contacto.js'])
    .pipe(concat('contop.js'))
    .pipe(gzip())
    .pipe(dest('dist/js'));
});

task('bot', () => {
  return src(['js/jquery-1.8.3.js', 'js/jquery-ui-1.9.2.custom.js', 'js/helper.js', 'js/builder.js'])

    .pipe(concat('bot.js'))
    .pipe(gzip())
    .pipe(dest('dist/js'));
});

task('views', () => {
  return src(['*.html', '*.ico'])
    .pipe(dest('dist'));
});

task('images', () => {
  return src('img/*.*')
    .pipe(dest('dist/img'));
});

task('font', () => {
  return src('font/*.*')
    .pipe(dest('dist/font'));
});

task('php', () => {
  return src('php/*.php')
    .pipe(dest('dist/php'));
});

task('dev', series('css', 'jstop', 'jsbot'));
task('dist', series('cssdist', 'indextop', 'bot', 'contop', 'images', 'views', 'font', 'php'));
