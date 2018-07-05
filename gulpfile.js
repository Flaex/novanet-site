const gulp        = require('gulp');
const browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('default', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
