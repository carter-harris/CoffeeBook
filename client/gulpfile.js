const gulp = require("gulp")
const sass = require("gulp-sass")

gulp.task("sass", function() {
  return gulp.src("app/sass/main.sass")
  .pipe(sass())
  .pipe(gulp.dest("app/css/"))
})

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.s+(a|c)ss", ["sass"])
})

gulp.task("default", ["sass", "watch"])
