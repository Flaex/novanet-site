const { src, task, watch, dest, series } = require("gulp");
const browserSync = require("browser-sync").create();
const del = require("del");
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const zip = require("gulp-zip");
const cleanCSS = require("gulp-clean-css");

// Development build sub-tasks
task("css-dev", () => {
  return src(["css/normalize.css", "css/base.css", "css/all.css"])
    .pipe(concat("styles.css"))
    .pipe(dest("css"));
});

task("js-dev", async () => {
  // Header scripts
  src(["js/createjs.min.js", "js/nosotros.js", "js/gen_validatorv31.js"])
    .pipe(concat("topscript.js"))
    .pipe(dest("js"));
  // Body scripts
  src([
    "js/jquery-1.8.3.js",
    "js/jquery-ui-1.9.2.custom.js",
    "js/helper.js",
    "js/builder.js",
  ])
    .pipe(concat("botscript.js"))
    .pipe(dest("js"));
});

// Production build sub-tasks
task("cleanDir", function () {
  return del(["pro/**/*", "archive.zip"]);
});

task("css-pro", () => {
  return src(["css/normalize.css", "css/base.css", "css/all.css"])
    .pipe(concat("styles.css"))
    .pipe(cleanCSS())
    .pipe(dest("pro/css"));
});

task("js-pro", async () => {
  // Header scripts
  src(["js/createjs.min.js", "js/nosotros.js", "js/gen_validatorv31.js"])
    .pipe(concat("topscript.js"))
    .pipe(
      minify({
        ext: {
          src: "-debug.js",
          min: ".js",
        },
      })
    )
    .pipe(dest("pro/js"));

  // Body scripts
  src([
    "js/jquery-1.8.3.js",
    "js/jquery-ui-1.9.2.custom.js",
    "js/helper.js",
    "js/builder.js",
  ])
    .pipe(concat("botscript.js"))
    .pipe(
      minify({
        ext: {
          src: "-debug.js",
          min: ".js",
        },
      })
    )
    .pipe(dest("pro/js"));
});

task("views", () => {
  return src(["*.html", "*.ico"]).pipe(dest("pro"));
});

task("images", () => {
  return src("img/*.*").pipe(dest("pro/img"));
});

task("fonts", () => {
  return src("fonts/*.*").pipe(dest("pro/fonts"));
});

task("php", () => {
  return src("php/*.php").pipe(dest("pro/php"));
});

task("cleanJS", function () {
  return del(["pro/js/topscript-debug.js", "pro/js/botscript-debug.js"]);
});

task("compress", async () => {
  src("pro/**/*").pipe(zip("archive.zip")).pipe(dest("./"));
});

// Development build main task
task(
  "serve",
  series(
    "css-dev",
    "js-dev",
    (liveReload = () => {
      exports.cssDev = () =>
        src(["css/normalize.css", "css/base.css"])
          .pipe(concat("styles.css"))
          .pipe(dest("css"));

      exports.jsDev = () =>
        src([
          "js/jquery-1.8.3.js",
          "js/jquery-ui-1.9.2.custom.js",
          "js/helper.js",
          "js/builder.js",
        ])
          .pipe(concat("botscript.js"))
          .pipe(dest("js"));

      browserSync.init({
        server: "./",
      });
      watch("*.html").on("change", browserSync.reload);
      watch("css/*.css").on("change", this.cssDev);
      watch("css/*.css").on("change", browserSync.reload);
      watch("js/*.js").on("change", this.jsDev);
      watch("js/*.js").on("change", browserSync.reload);
    })
  )
);

// Production build main task
task(
  "serve-pro",
  series(
    "cleanDir",
    "css-pro",
    "js-pro",
    "views",
    "images",
    "fonts",
    "php",
    (liveReload = () => {
      browserSync.init({
        server: "./pro",
      });
    })
  )
);

task("zip", series("cleanJS", "compress"));
